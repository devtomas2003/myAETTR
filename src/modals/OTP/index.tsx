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
import { api } from '../../services/api';
import QRCode from 'qrcode';

type OTPProps = {
    modalAtive: React.Dispatch<React.SetStateAction<string>>;
    setHaveOTP: React.Dispatch<React.SetStateAction<Boolean>>;
    haveOPT: Boolean;
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
                api.get('/getOtpQrCode', {
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
            api.post('/activateOTP', {
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
                }else{
                    setActiveWindow('sucessActivate');
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
            api.post('/desactivateOTP', {
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
                }else{
                    setActiveWindow('sucessDesactivate');
                    props.setHaveOTP(false);
                }
            }).catch(() => {
                location.reload();
            });
        }
    }
    return (
        <Container>
            <HeaderModal>
                <ModalTitle>Configurar OTP (One-Time Password)</ModalTitle>
                <ModalClose onClick={() => { props.modalAtive('') }}>
                    <AiOutlineClose size={22} color="#444" />
                </ModalClose>
            </HeaderModal>
            <ModalBody>
                { activeWindow === "normal" ?
                <>
                <InstLineOne>1. Leia este QrCode através de uma das seguintes apps:</InstLineOne>
                <ListApps>
                    <ListLine><ListLink href="https://support.google.com/accounts/answer/1066447?hl=en&co=GENIE.Platform%3DAndroid" target="_blank">Google Authenticator</ListLink></ListLine>
                    <ListLine><ListLink href="https://www.microsoft.com/pt-pt/security/mobile-authenticator-app" target="_blank">Microsoft Authenticator</ListLink></ListLine>
                    <ListLine><ListLink href="https://pt.wikipedia.org/wiki/Senha_descart%C3%A1vel" target="_blank">Outra app que reconheça códigos OTP</ListLink></ListLine>
                </ListApps>
                <InstLinePq>Caso não consiga ler o QrCode poderá introduzir o código abaixo</InstLinePq>
                <BtnModalOTP onClick={() => {setSensitiveInfo(!sensitiveInfo)}}>
                    <BiShow size={25} color="#fff" />
                    <BtnMOText>{ sensitiveInfo ? 'Esconder QrCode e código' : 'Mostrar QrCode e código' }</BtnMOText>
                </BtnModalOTP>
                { sensitiveInfo ?
                <SensitiveInfo>
                    <QRCodeImg src={qrcode} title="OTP" />
                    <OTPCode>Código: {otpActCode}</OTPCode>
                </SensitiveInfo>
                : null }
                <InstLineTwo>2. Vamos testar? Introduza abaixo o código que está a visualizar na app, e clique em "Ativar".</InstLineTwo>
                <OTPInput type="text" autoComplete="off" autoCapitalize="off" value={otpCode} onChange={(e) => { hideTypingOTP(e.target.value.toString()) }} />
                { showError ? <ErrorText>O código OTP é invalido, tente novamente!</ErrorText> : null }
                <BtnModalOTP onClick={() => {activeOTP()}}>
                    <AiOutlineCheck size={25} color="#fff" />
                    <BtnMOText>Ativar</BtnMOText>
                </BtnModalOTP>
                </>
                : activeWindow === "sucessActivate" ?
                <SucessBox>
                    <ImgSucBox>
                        <AiOutlineCheckCircle size={250} color="#32a852" />
                    </ImgSucBox>
                    <SucessText>Código OTP ativado com sucesso! :)</SucessText>
                    <SucessTextInstOne>A partir de agora em todas as autenticações será pedido o código OTP.</SucessTextInstOne>
                    <BtnModalOTP onClick={() => {props.modalAtive('')}}>
                        <AiOutlineClose size={25} color="#fff" />
                        <BtnMOText>Fechar janela</BtnMOText>
                    </BtnModalOTP>
                </SucessBox>
                : activeWindow === "desactivate" ?
                <DesactivateBox>
                    <TextQuestions>Pretende desativar o OTP?</TextQuestions>
                    <TextQuestions>Se sim, coloque na caixa abaixo o código OTP atual e a seguir clique em "Desativar".</TextQuestions>
                    <OTPInput type="text" autoComplete="off" autoCapitalize="off" value={otpCode} onChange={(e) => { hideTypingOTP(e.target.value.toString()) }} />
                    { showError ? <ErrorText>O código OTP é invalido, tente novamente!</ErrorText> : null }
                    <BtnModalOTP onClick={() => {desactivateOTP()}}>
                        <GiShieldDisabled size={25} color="#fff" />
                        <BtnMOText>Desativar OTP</BtnMOText>
                    </BtnModalOTP>
                </DesactivateBox>
                :
                <SucessBox>
                    <ImgSucBox>
                        <GiShieldDisabled size={250} color="#32a852" />
                    </ImgSucBox>
                    <SucessText>Código OTP desativado com sucesso! :)</SucessText>
                    <SucessTextInstOne>Agora em todas as autenticações não será mais pedido o código OTP.</SucessTextInstOne>
                    <SucessTextInstTwo>Poderá também remover a geração do mesmo na sua app de códigos.</SucessTextInstTwo>
                    <BtnModalOTP onClick={() => {props.modalAtive('')}}>
                        <AiOutlineClose size={25} color="#fff" />
                        <BtnMOText>Fechar janela</BtnMOText>
                    </BtnModalOTP>
                </SucessBox>
                }
            </ModalBody>
        </Container>
    );
}