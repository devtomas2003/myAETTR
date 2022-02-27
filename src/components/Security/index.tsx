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
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
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
    Applications: {
        applicationName: String;
    };
}

export default function Security(props: SecurityProps){
    const [listAuths, setListAuths] = useState<[]>();
    useEffect(function(){
        function populateSecInfo(){
            api.get('/getSecurityInfo', {
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
        var day = "", month = "", hours = "", minutes = "", seconds = "";
        if(date.getUTCDate() <= 9){
            day = "0" + date.getUTCDate().toString();
        }else{
            day = date.getUTCDate().toString();
        }
        const realMonth = date.getUTCMonth()+1;
        if(realMonth <= 9){
            month = "0" + realMonth.toString();
        }else{
            month = realMonth.toString();
        }
        if(date.getHours() <= 9){
            hours = "0" + date.getHours().toString();
        }else{
            hours = date.getHours().toString();
        }
        if(date.getMinutes() <= 9){
            minutes = "0" + date.getMinutes().toString();
        }else{
            minutes = date.getMinutes().toString();
        }
        if(date.getSeconds() <= 9){
            seconds = "0" + date.getSeconds().toString();
        }else{
            seconds = date.getSeconds().toString();
        }
        return day + "/" + month + "/" + date.getFullYear() + " " + props.lang.timeSeparator + " " + hours + ":" + minutes + ":" + seconds;
    }
    function openOTPModal(){
        props.modalAtive('otp');
    }
    return(
        <>
        <BoxCnt>
            <TitleContent>{props.lang.securityTitle}</TitleContent>
            <LineSeparator />
            <BoxLinks>
                <SecState>
                    <StateTopic>{props.lang.authTwoFactorTit}</StateTopic>
                    <StateMiniWin isAtive={props.haveOPT}>
                        <MiniWinText>{props.haveOPT ? props.lang.enabledTwoFacTxt : props.lang.disabledTwoFacTxt}</MiniWinText>
                    </StateMiniWin>
                    <BoxChange onClick={() => {openOTPModal()}}>
                        <BsFillPencilFill size={15} color="#444" />
                    </BoxChange>
                </SecState>
                <SecState>
                    <StateTopic>Password</StateTopic>
                    <StateMiniWin isAtive={true}>
                        <MiniWinText>********</MiniWinText>
                    </StateMiniWin>
                    <BoxChange>
                        <BsFillPencilFill size={15} color="#444" />
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
                            <BtnHeaderAL title={props.lang.rovokeSuggest?.toString()}>
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
                            <LineSeparatorLA />
                            <AuthBodyLine>
                                <AuthBodyTopic>{props.lang.startHourTopic}:</AuthBodyTopic>
                                <AuthBodyTopCont>{extendTime(auth.startTime.toString())}</AuthBodyTopCont>
                            </AuthBodyLine>
                            <LineSeparatorLA />
                            <AuthBodyLine>
                                <AuthBodyTopic>{props.lang.endHourTopic}:</AuthBodyTopic>
                                <AuthBodyTopCont>{extendTime(auth.endTime.toString())}</AuthBodyTopCont>
                            </AuthBodyLine>
                        </AuthorizationBody>
                    </AuthorizationBox>
                    );
                }) }
            </AuthorizationList>
        </BoxCnt>
        </>
    );
}