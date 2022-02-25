import {
    ZoneWindow,
    HeaderBackground,
    UserAuthInfo,
    DataAuthInfo,
    UserName,
    BtnExit,
    ContentPage,
    MenuBox,
    MenuItem,
    ContainerBox,
    MainContainer,
    EntityTitle,
    BoxSideTopInfo,
    LangChange,
    UnauthBox,
    UnauthText,
    BtnLogin,
    LoginText,
    ErrorLine,
    ErrorText,
    BtnCloseError
} from './style';

import { ImExit } from 'react-icons/im';
import { FaUserShield } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Security from '../../components/Security';
import { useState } from 'react';
import { api } from '../../services/api';

export default function Home(){
    const [showUnauth, setShowUnauth] = useState<Boolean>(true);
    const [loginError, setLoginError] = useState<String>('');
    const [background] = useState<Number>(Math.floor(Math.random() * (2 - 1 + 1) + 1));

    function startAuth(){
        api.get('/getExternalAuthToken').then(function(res){
            if(res.data.status === "ok"){
                location.href = "http://127.0.0.1:3000/login?authSession=" + res.data.token;
                // const expires = new Date(Date.now() + (2 * 60 * 60 * 1000)).toUTCString()
                // document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires;
            }else{
                setLoginError("Ocorreu um erro interno no serviço de autenticação!");
            }
        }).catch(() => {
            setLoginError("Ocorreu um erro interno no serviço de autenticação!");
        });
    }
    return(
        <ZoneWindow>
            <MainContainer>
                <HeaderBackground bgID={background}>
                    <EntityTitle>AETTR</EntityTitle>
                </HeaderBackground>
                <UserAuthInfo>
                    <DataAuthInfo>
                        { !showUnauth ?
                        <>
                            <UserName>Tomás Figueiredo</UserName>
                            <BoxSideTopInfo>
                                <LangChange>en</LangChange>
                                <BtnExit>
                                    <ImExit size={18} color="#fff" />
                                </BtnExit>
                            </BoxSideTopInfo>
                        </>
                        :
                        <>
                        <UserName>Utilizador não autenticado</UserName>
                        <BoxSideTopInfo>
                            <LangChange>en</LangChange>
                        </BoxSideTopInfo>
                        </>
                        }
                    </DataAuthInfo>
                </UserAuthInfo>
                { loginError !== "" ?
                <ErrorLine>
                    <ErrorText>ASD</ErrorText>
                    <BtnCloseError onClick={() => {setLoginError('')}}>
                        <AiOutlineClose size={18} color="#721c24" />
                    </BtnCloseError>
                </ErrorLine>
                : null }
                { !showUnauth ?
                <ContentPage>
                    <MenuBox>
                        <MenuItem>O meu processo</MenuItem>
                        <MenuItem>Os meus cartões de identificação</MenuItem>
                        <MenuItem>Segurança</MenuItem>
                        <MenuItem>Lista de e-mails</MenuItem>
                    </MenuBox>
                    <ContainerBox>
                        <Security />
                    </ContainerBox>
                </ContentPage>
                :
                <ContentPage>
                    <UnauthBox>
                        <FaUserShield size={200} color="#444" />
                        <UnauthText>Inicie sessão para aceder ao myAETTR</UnauthText>
                        <BtnLogin onClick={() => {startAuth()}}>
                            <LoginText>Iniciar Sessão</LoginText>
                        </BtnLogin>
                    </UnauthBox>
                </ContentPage>
                }
            </MainContainer>
        </ZoneWindow>
    );
}