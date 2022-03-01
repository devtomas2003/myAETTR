import {
    TitleContent,
    BoxLinks,
    TitleZone,
    AuthorizationList,
    AuthorizationBox,
    AuthorizationHeader,
    AuthHeadText,
    AuthorizationBody,
    AuthBodyLine,
    AuthBodyTopic,
    AuthBodyTopCont,
    SecState,
    StateTopic,
    StateMiniWin,
    MiniWinText,
    BoxChange,
    BoxCnt,
    LineSeparator,
    LineSeparatorLA,
    BtnHeaderAL
} from './style';

import { AiOutlineMinus } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';
import { RiLockPasswordLine } from 'react-icons/ri';
import { HiDotsHorizontal } from 'react-icons/hi';
import { MdSecurityUpdateGood } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { apiSAU } from '../../services/api';
import { langProps } from '../../types/Lang';

type SecurityProps = {
    modalAtive: React.Dispatch<React.SetStateAction<string>>;
    setHaveOTP: React.Dispatch<React.SetStateAction<Boolean>>;
    haveOPT: Boolean;
    lang: langProps;
}

type AuthListProps = {
    endTime: String;
    redirectTime: String;
    startTime: String;
    state: Number;
    authorizationID: String;
    Applications: {
        applicationName: String;
    };
}

export default function Security(props: SecurityProps){
    const [listAuths, setListAuths] = useState<[]>();
    useEffect(function(){
        function populateSecInfo(){
            apiSAU.get('/getSecurityInfo', {
                headers: {
                    "Authorization": "Bearer " + sessionStorage.getItem("authToken")
                }
            }).then(function(res){
                if(res.data.status !== "error"){
                    props.setHaveOTP(res.data.otpEnable);
                    setListAuths(res.data.listAuths);
                }else{
                    location.reload();
                }
            }).catch(() => {
                location.reload();
            });
        }
        populateSecInfo();
    }, []);
    function extendTime(dateStr: string){
        const date = new Date(dateStr);
        const realMonth = date.getUTCMonth()+1;
        return date.getUTCDate().toString().padStart(2, '0') + "/" + realMonth.toString().padStart(2, '0') + "/" + date.getFullYear() + " " + props.lang.timeSeparator + " " + date.getHours().toString().padStart(2, '0') + ":" + date.getMinutes().toString().padStart(2, '0') + ":" + date.getSeconds().toString().padStart(2, '0');
    }
    function openOTPModal(){
        props.modalAtive('otp');
    }
    function revokeAuth(authID: string){
        if(confirm(props.lang.revokeQuestion?.toString())){
            apiSAU.get('/revokeAuth/' + authID, {
                headers: {
                    "Authorization": "Bearer " + sessionStorage.getItem("authToken")
                }
            }).then(function(res){
                if(res.data.status !== "error"){
                    apiSAU.get('/getSecurityInfo', {
                        headers: {
                            "Authorization": "Bearer " + sessionStorage.getItem("authToken")
                        }
                    }).then(function(res){
                        if(res.data.status !== "error"){
                            setListAuths(res.data.listAuths);
                        }else{
                            location.reload();
                        }
                    }).catch(() => {
                        location.reload();
                    });
                }else{
                    location.reload();
                }
            }).catch(() => {
                location.reload();
            });
        }
    }
    return(
        <>
        <BoxCnt>
            <TitleContent>{props.lang.securityTitle}</TitleContent>
            <LineSeparator />
            <BoxLinks>
                <SecState>
                    <StateTopic>{props.lang.authTwoFactorTit}</StateTopic>
                    <MdSecurityUpdateGood size={100} color="#444" />
                    <StateMiniWin isAtive={props.haveOPT}>
                        <MiniWinText>{props.haveOPT ? props.lang.enabledTwoFacTxt : props.lang.disabledTwoFacTxt}</MiniWinText>
                    </StateMiniWin>
                    <BoxChange onClick={() => {openOTPModal()}}>
                        <BsFillPencilFill size={20} color="#444" />
                    </BoxChange>
                </SecState>
                <SecState>
                    <StateTopic>Password</StateTopic>
                    <RiLockPasswordLine size={100} color="#444" />
                    <StateMiniWin isAtive={true}>
                        <MiniWinText>********</MiniWinText>
                    </StateMiniWin>
                    <BoxChange>
                        <BsFillPencilFill size={20} color="#444" />
                    </BoxChange>
                </SecState>
                <SecState>
                    <StateTopic>PIN</StateTopic>
                    <HiDotsHorizontal size={100} color="#444" />
                    <StateMiniWin isAtive={true}>
                        <MiniWinText>****</MiniWinText>
                    </StateMiniWin>
                    <BoxChange>
                        <BsFillPencilFill size={20} color="#444" />
                    </BoxChange>
                </SecState>
            </BoxLinks>
        </BoxCnt>
        <BoxCnt>
            <TitleZone>{props.lang.titleListAuth}</TitleZone>
            <LineSeparator />
            <AuthorizationList>
                { listAuths?.map((auth: AuthListProps, i) => {
                    return (
                        <AuthorizationBox key={i}>
                        <AuthorizationHeader>
                            <AuthHeadText>{auth.Applications.applicationName} - { auth.state === 1 ? props.lang.waitingOTP : auth.state === 2 ? props.lang.statusAuthorizedPass : auth.state === 3 ? props.lang.statusAuthorizedOTP : auth.state === 4 ? props.lang.revokedLog : props.lang.invalidLogCred } ({extendTime(auth.redirectTime.toString())})</AuthHeadText>
                            { auth.state === 2 || auth.state === 3 ?
                            <BtnHeaderAL title={props.lang.rovokeSuggest?.toString()} onClick={() => {revokeAuth(auth.authorizationID.toString())}}>
                                <AiOutlineMinus size={15} color="#FFF" />
                            </BtnHeaderAL>
                            : null }
                        </AuthorizationHeader>
                        <AuthorizationBody>
                            <AuthBodyLine>
                                <AuthBodyTopic>{props.lang.appTopic}:</AuthBodyTopic>
                                <AuthBodyTopCont>{auth.Applications.applicationName}</AuthBodyTopCont>
                            </AuthBodyLine>
                            <LineSeparatorLA />
                            <AuthBodyLine>
                                <AuthBodyTopic>{props.lang.stateTopic}:</AuthBodyTopic>
                                <AuthBodyTopCont>{ auth.state === 1 ? props.lang.waitingOTP : auth.state === 2 ? props.lang.statusAuthorizedPass : auth.state === 3 ? props.lang.statusAuthorizedOTP : auth.state === 4 ? props.lang.revokedLog : props.lang.invalidLogCred }</AuthBodyTopCont>
                            </AuthBodyLine>
                            <LineSeparatorLA />
                            <AuthBodyLine>
                                <AuthBodyTopic>{props.lang.requestHourTopic}:</AuthBodyTopic>
                                <AuthBodyTopCont>{extendTime(auth.redirectTime.toString())}</AuthBodyTopCont>
                            </AuthBodyLine>
                            { auth.startTime != null ?
                            <>
                            <LineSeparatorLA />
                                <AuthBodyLine>
                                    <AuthBodyTopic>{props.lang.startHourTopic}:</AuthBodyTopic>
                                    <AuthBodyTopCont>{extendTime(auth.startTime.toString())}</AuthBodyTopCont>
                                </AuthBodyLine>
                            </>
                            : null }
                            { auth.endTime != null ?
                            <>
                            <LineSeparatorLA />
                            <AuthBodyLine>
                                <AuthBodyTopic>{props.lang.endHourTopic}:</AuthBodyTopic>
                                <AuthBodyTopCont>{extendTime(auth.endTime.toString())}</AuthBodyTopCont>
                            </AuthBodyLine>
                            </>
                            : null }
                        </AuthorizationBody>
                    </AuthorizationBox>
                    );
                }) }
            </AuthorizationList>
        </BoxCnt>
        </>
    );
}