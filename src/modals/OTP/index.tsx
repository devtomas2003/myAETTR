import {
    Container,
    ModalTitle,
    HeaderModal,
    ModalClose,
    ModalBody,
    QRCodeImg,
    InstLineOne,
    InstLineTwo,
    ListApps,
    ListLine,
    ListLink,
    InstLinePq,
    BtnModalOTP,
    BtnMOText,
    OTPCode,
    SensitiveInfo,
    OTPInput,
    ErrorText,
    SucessBox,
    ImgSucBox,
    SucessText,
    SucessTextInstOne,
    SucessTextInstTwo,
    DesactivateBox,
    TextQuestions
} from './style';

import { AiOutlineClose, AiOutlineCheck, AiOutlineCheckCircle } from 'react-icons/ai';
import { BiShow } from 'react-icons/bi';
import { GiShieldDisabled } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import { apiSAU } from '../../services/api';
import QRCode from 'qrcode';
import { langProps } from '../../types/Lang';

type OTPProps = {
    modalAtive: React.Dispatch<React.SetStateAction<string>>;
    setHaveOTP: React.Dispatch<React.SetStateAction<Boolean>>;
    haveOPT: Boolean;
    lang: langProps;
}

export default function OTP(props: OTPProps){
    const [qrcode, setQrcode] = useState<string>('');
    const [otpActCode, setOTPActCode] = useState<String>('');
    const [otpCode, setOTPCode] = useState<string>('');
    const [sensitiveInfo, setSensitiveInfo] = useState<Boolean>(false);
    const [showError, setShowError] = useState<Boolean>(false);
    const [activeWindow, setActiveWindow] = useState<String>('normal');
    
    useEffect(function(){
        function startOTP(){
            if(props.haveOPT){
                setActiveWindow('desactivate');
            }else{
                apiSAU.get('/getOtpQrCode', {
                    headers: {
                        "Authorization": "Bearer " + sessionStorage.getItem("authToken")
                    }
                }).then(function(res){
                    if(res.data.status !== "error"){
                        setOTPActCode(res.data.code);
                        QRCode.toDataURL(res.data.otp, function (err: Object, url: String) {
                            setQrcode(url.toString());
                        });
                    }else{
                        location.reload();
                    }
                }).catch(() => {
                    location.reload();
                });
            }
        }
        startOTP();
    }, []);
    function activeOTP(){
        if(otpCode === ""){
            setShowError(true);
        }else{
            apiSAU.post('/activateOTP', {
                otp: otpCode.replace(/ /g,'')
            }, {
                headers: {
                    "Authorization": "Bearer " + sessionStorage.getItem("authToken")
                }
            }).then(function(res){
                if(res.data.status === "error"){
                    location.reload();
                }else if(res.data.status === "error-notvalid"){
                    setShowError(true);
                    setOTPCode('');
                }else{
                    setActiveWindow('sucessActivate');
                    setOTPCode('');
                    props.setHaveOTP(true);
                }
            }).catch(() => {
                location.reload();
            });
        }
    }
    function hideTypingOTP(otpCode: string){
        setOTPCode(otpCode);
        setShowError(false);
    }
    function desactivateOTP(){
        if(otpCode === ""){
            setShowError(true);
        }else{
            apiSAU.post('/desactivateOTP', {
                otp: otpCode.replace(/ /g,'')
            }, {
                headers: {
                    "Authorization": "Bearer " + sessionStorage.getItem("authToken")
                }
            }).then(function(res){
                if(res.data.status === "error"){
                    location.reload();
                }else if(res.data.status === "error-notvalid"){
                    setShowError(true);
                    setOTPCode('');
                }else{
                    setActiveWindow('sucessDesactivate');
                    setOTPCode('');
                    props.setHaveOTP(false);
                }
            }).catch(() => {
                location.reload();
            });
        }
    }
    function submitActOTP(key: string){
        if(key === "Enter" || key === "NumpadEnter"){
            activeOTP();
        }
    }
    function submitDesOTP(key: string){
        if(key === "Enter" || key === "NumpadEnter"){
            desactivateOTP();
        }
    }
    return (
        <Container>
            <HeaderModal>
                <ModalTitle>{props.lang.modOTPTitle}</ModalTitle>
                <ModalClose onClick={() => { props.modalAtive('') }}>
                    <AiOutlineClose size={22} color="#444" />
                </ModalClose>
            </HeaderModal>
            <ModalBody>
                { activeWindow === "normal" ?
                <>
                <InstLineOne>{props.lang.modOTPFirstEnStep}</InstLineOne>
                <ListApps>
                    <ListLine><ListLink href="https://support.google.com/accounts/answer/1066447?hl=en&co=GENIE.Platform%3DAndroid" target="_blank">Google Authenticator</ListLink></ListLine>
                    <ListLine><ListLink href="https://www.microsoft.com/pt-pt/security/mobile-authenticator-app" target="_blank">Microsoft Authenticator</ListLink></ListLine>
                    <ListLine><ListLink href="https://pt.wikipedia.org/wiki/Senha_descart%C3%A1vel" target="_blank">{props.lang.modOTPLinkApp}</ListLink></ListLine>
                </ListApps>
                <InstLinePq>{props.lang.modOTPCannRQr}</InstLinePq>
                <BtnModalOTP onClick={() => {setSensitiveInfo(!sensitiveInfo)}}>
                    <BiShow size={25} color="#fff" />
                    <BtnMOText>{ sensitiveInfo ? props.lang.modOTPHideQrCo : props.lang.modOTPShowQrCo }</BtnMOText>
                </BtnModalOTP>
                { sensitiveInfo ?
                <SensitiveInfo>
                    <QRCodeImg src={qrcode} title="OTP" />
                    <OTPCode>{props.lang.modOTPPrefCode}: {otpActCode}</OTPCode>
                </SensitiveInfo>
                : null }
                <InstLineTwo>{props.lang.modOTPSecondEnStep}</InstLineTwo>
                <OTPInput type="text" autoComplete="off" autoCapitalize="off" value={otpCode} onKeyUp={(e) => {submitActOTP(e.code)}} placeholder={props.lang.modOTPInputPH?.toString()} onChange={(e) => { hideTypingOTP(e.target.value.toString()) }} />
                { showError ? <ErrorText>{props.lang.modOTPInvalidCode}</ErrorText> : null }
                <BtnModalOTP onClick={() => {activeOTP()}}>
                    <AiOutlineCheck size={25} color="#fff" />
                    <BtnMOText>{props.lang.modOTPEnable}</BtnMOText>
                </BtnModalOTP>
                </>
                : activeWindow === "sucessActivate" ?
                <SucessBox>
                    <ImgSucBox>
                        <AiOutlineCheckCircle size={250} color="#32a852" />
                    </ImgSucBox>
                    <SucessText>{props.lang.modOTPEnSuc}</SucessText>
                    <SucessTextInstOne>{props.lang.modOTPEnInst}</SucessTextInstOne>
                    <BtnModalOTP onClick={() => {props.modalAtive('')}}>
                        <AiOutlineClose size={25} color="#fff" />
                        <BtnMOText>{props.lang.modOTPCloseWindow}</BtnMOText>
                    </BtnModalOTP>
                </SucessBox>
                : activeWindow === "desactivate" ?
                <DesactivateBox>
                    <TextQuestions>{props.lang.modOTPDisQuest}</TextQuestions>
                    <TextQuestions>{props.lang.modOTPDisInst}</TextQuestions>
                    <OTPInput type="text" autoComplete="off" autoCapitalize="off" placeholder={props.lang.modOTPInputPH?.toString()} onKeyUp={(e) => {submitDesOTP(e.code)}} value={otpCode} onChange={(e) => { hideTypingOTP(e.target.value.toString()) }} />
                    { showError ? <ErrorText>{props.lang.modOTPInvalidCode}</ErrorText> : null }
                    <BtnModalOTP onClick={() => {desactivateOTP()}}>
                        <GiShieldDisabled size={25} color="#fff" />
                        <BtnMOText>{props.lang.modOTPDisBtn}</BtnMOText>
                    </BtnModalOTP>
                </DesactivateBox>
                :
                <SucessBox>
                    <ImgSucBox>
                        <GiShieldDisabled size={250} color="#32a852" />
                    </ImgSucBox>
                    <SucessText>{props.lang.modOTPDisSucTit}</SucessText>
                    <SucessTextInstOne>{props.lang.modOTPDisAuthIns}</SucessTextInstOne>
                    <SucessTextInstTwo>{props.lang.modOTPDisAppIns}</SucessTextInstTwo>
                    <BtnModalOTP onClick={() => {props.modalAtive('')}}>
                        <AiOutlineClose size={25} color="#fff" />
                        <BtnMOText>{props.lang.modOTPCloseWindow}</BtnMOText>
                    </BtnModalOTP>
                </SucessBox>
                }
            </ModalBody>
        </Container>
    );
}