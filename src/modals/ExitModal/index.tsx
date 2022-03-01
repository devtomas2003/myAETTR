import { langProps } from '../../types/Lang';
import { Container, HeaderModal, ModalTitle, ModalClose, ModalBody, QuestionLine, BtnModalExit, BtnMOText, QLError, QLSuccess } from './style';
import { apiSAU } from '../../services/api';

import { IoMdExit } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { appName } from '../../configs';

type ExitModalProps = {
    modalAtive: React.Dispatch<React.SetStateAction<string>>;
    changeUnauth: React.Dispatch<React.SetStateAction<Boolean>>;
    lang: langProps;
}

export default function ExitModal(props: ExitModalProps){
    const [errorConn, setErrorConn] = useState<Boolean>(false);
    const [sucessExit, setSucessExit] = useState<Boolean>(false);
    const [countdown, setCountdown] = useState<number>(5);

    function endSession(){
        apiSAU.get('/logout', {
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem("authToken")
            }
        }).then(function(res){
            if(res.data.status !== "error"){
                setErrorConn(false);
                setSucessExit(true);
                startTimeoutExit();
            }else{
                setErrorConn(true);
            }
        }).catch(() => {
            setErrorConn(true);
        });
    }
    function startTimeoutExit(){
        setInterval(function(){
            setCountdown(currentState=>{
                if(currentState === 0){
                    sessionStorage.removeItem("authToken");
                    props.modalAtive('');
                    props.changeUnauth(true);
                    return 0;
                }else{
                    return currentState-1;
                }
            });
        }, 1000);
    }
    return (
        <Container>
            <HeaderModal>
                <ModalTitle>{props.lang.modalExitTitle?.replace("_APPNAME_", appName)}</ModalTitle>
                <ModalClose onClick={() => { props.modalAtive('') }}>
                    <AiOutlineClose size={22} color="#444" />
                </ModalClose>
            </HeaderModal>
            <ModalBody>
                { sucessExit ? <QLSuccess>{props.lang.modalExitSuccess?.replace("_TIME_", countdown.toString())}</QLSuccess> : null }
                { errorConn ? <QLError>{props.lang.modalExitError}</QLError> : null }
                <QuestionLine>{props.lang.modalExitQuestion?.replace("_APPNAME_", appName)}</QuestionLine>
                <BtnModalExit title={props.lang.modalExitBtn?.toString()} onClick={() => {endSession()}}>
                    <IoMdExit size={25} color="#fff" />
                    <BtnMOText>{props.lang.modalExitBtn}</BtnMOText>
                </BtnModalExit>
            </ModalBody>
        </Container>
    );
}