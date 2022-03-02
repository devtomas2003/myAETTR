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
    BtnCloseError,
    ModalBox,
    ModalContent
} from './style';

import { ImExit } from 'react-icons/im';
import { FaUserShield } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Security from '../../components/Security';
import { useEffect, useState } from 'react';
import { api, apiSAU } from '../../services/api';
import { sha256 } from 'js-sha256';
import OTP from '../../modals/OTP';
import ExitModal from '../../modals/ExitModal';
import { langProps } from '../../types/Lang';
import { appName } from '../../configs';

export default function Home(){
    document.title = appName;
    const [showUnauth, setShowUnauth] = useState<Boolean>(true);
    const [loginErrorSys, setLoginErrorSys] = useState<Boolean>(false);
    const [loginErrorUsr, setLoginErrorUsr] = useState<Boolean>(false);

    const [background] = useState<Number>(Math.floor(Math.random() * (2 - 1 + 1) + 1));
    const [nome, setNome] = useState<String>('');
    const [modalAtive, setModalAtive] = useState<string>('');
    const [activePage, setActivePage] = useState<string>('default');
    const [haveOTP, setHaveOTP] = useState<Boolean>(false);

    const [langList, setLangList] = useState<langProps>();
    const [lang, setLang] = useState<String>('en');

    async function changeLang(){
        if(lang === "pt"){
            const langRes = await api.get('/getLang/pt');
            setLangList(langRes.data);
            setLang(langRes.data.linkLang);
        }else{
            const langRes = await api.get('/getLang/en');
            setLangList(langRes.data);
            setLang(langRes.data.linkLang);
        }
    }
    function getParam(q: string) {
        return (window.location.search.match(new RegExp('[?&]' + q + '=([^&]+)')) || [, null])[1];
    }
    useEffect(function(){
        async function testAuth(){
            if(getParam("lang") !== null){
                if(getParam("lang") === "en"){
                    const langRes = await api.get('/getLang/en');
                    setLangList(langRes.data);
                    setLang(langRes.data.linkLang);
                }else{
                    const langRes = await api.get('/getLang/pt');
                    setLangList(langRes.data);
                }
            }else{
                const langRes = await api.get('/getLang/pt');
                setLangList(langRes.data);
            }
            if(sessionStorage.getItem("authToken") === null && sessionStorage.getItem("authSession") !== null){
                api.post('/checkOAuth', {
                    "authSession": sessionStorage.getItem("authSession"),
                    "navigatorFinPrt": sha256(window.screen.availHeight + window.screen.availWidth + window.screen.colorDepth + window.screen.pixelDepth + navigator.appVersion + navigator.appCodeName + navigator.appName + navigator.language + navigator.platform + navigator.product + navigator.productSub + navigator.vendor)
                }).then(function(res){
                    if(res.data.status === "ok"){
                        sessionStorage.setItem("authToken", res.data.token);
                        sessionStorage.removeItem("authSession");
                        getBasicInfo();
                        setShowUnauth(false);
                    }else{
                        sessionStorage.removeItem("authSession");        
                        setLoginErrorUsr(true);
                    }
                }).catch(() => {
                    sessionStorage.removeItem("authSession");
                    setLoginErrorSys(true);
                });
            }else if(sessionStorage.getItem("authToken") !== null && sessionStorage.getItem("authSession") === null){
                apiSAU.get('/validateJwt/', {
                    headers: {
                        "Authorization": "Bearer " + sessionStorage.getItem("authToken")
                    }
                }).then(function(res){
                    if(res.data.status === "ok"){
                        getBasicInfo();
                        setShowUnauth(false);
                    }else{
                        sessionStorage.removeItem("authToken");
                    }
                }).catch(() => {
                    sessionStorage.removeItem("authToken");
                    setLoginErrorSys(true);
                });
            }
        }
        testAuth();
    }, []);

    function getBasicInfo(){
        apiSAU.get('/getBasicInfo', {
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem("authToken")
            }
        }).then(function(res){
            if(res.data.status !== "error"){
                setNome(res.data.amigavel);
            }else{
                sessionStorage.removeItem("authToken");
                setShowUnauth(true);
                setLoginErrorSys(true);
            }
        }).catch(() => {
            sessionStorage.removeItem("authToken");
            setShowUnauth(true);
            setLoginErrorSys(true);
        });
    }

    function startAuth(){
        api.post('/getExternalAuthToken', {
            "navigatorFinger": sha256(window.screen.availHeight + window.screen.availWidth + window.screen.colorDepth + window.screen.pixelDepth + navigator.appVersion + navigator.appCodeName + navigator.appName + navigator.language + navigator.platform + navigator.product + navigator.productSub + navigator.vendor)
        }).then(function(res){
            if(res.data.status === "ok"){
                if(lang === "en"){
                    location.href = "http://192.168.1.10:3000/login?authSession=" + res.data.token + "&lang=pt";
                }else{
                    location.href = "http://192.168.1.10:3000/login?authSession=" + res.data.token + "&lang=en";
                }
                sessionStorage.setItem("authSession", res.data.token);
            }else{
                setLoginErrorSys(true);
            }
        }).catch(() => {
            setLoginErrorSys(true);
        });
    }

    function closeSession(){
        setModalAtive('exit');
    }

    return(
        <ZoneWindow>
            <MainContainer>
                <HeaderBackground bgID={background}>
                    <EntityTitle>{appName}</EntityTitle>
                </HeaderBackground>
                <UserAuthInfo>
                    <DataAuthInfo>
                        { !showUnauth ?
                        <>
                            <UserName>{nome}</UserName>
                            <BoxSideTopInfo>
                                <LangChange onClick={() => {changeLang()}}>{langList?.linkLang}</LangChange>
                                <BtnExit onClick={() => {closeSession()}} title={langList?.logoutBtn?.toString()}>
                                    <ImExit size={18} color="#fff" />
                                </BtnExit>
                            </BoxSideTopInfo>
                        </>
                        :
                        <>
                        <UserName>{langList?.userUnauth}</UserName>
                        <BoxSideTopInfo>
                            <LangChange onClick={() => {changeLang()}}>{langList?.linkLang}</LangChange>
                        </BoxSideTopInfo>
                        </>
                        }
                    </DataAuthInfo>
                </UserAuthInfo>
                { loginErrorSys ?
                <ErrorLine>
                    <ErrorText>{langList?.authSysError}</ErrorText>
                    <BtnCloseError onClick={() => {setLoginErrorSys(false)}}>
                        <AiOutlineClose size={18} color="#721c24" />
                    </BtnCloseError>
                </ErrorLine>
                : null }
                { loginErrorUsr ?
                <ErrorLine>
                    <ErrorText>{langList?.authCanUser}</ErrorText>
                    <BtnCloseError onClick={() => {setLoginErrorUsr(false)}}>
                        <AiOutlineClose size={18} color="#721c24" />
                    </BtnCloseError>
                </ErrorLine>
                : null }
                { !showUnauth ?
                <ContentPage>
                    <MenuBox>
                        <MenuItem isActive={activePage === "default" ? true : false} onClick={() => {setActivePage('default')}}>{langList?.menuStart}</MenuItem>
                        <MenuItem isActive={false}>{langList?.menuProc}</MenuItem>
                        <MenuItem isActive={false}>{langList?.menuCards}</MenuItem>
                        <MenuItem isActive={activePage === "security" ? true : false} onClick={() => {setActivePage('security')}}>{langList?.menuSec}</MenuItem>
                        <MenuItem isActive={false}>{langList?.menuMails}</MenuItem>
                    </MenuBox>
                    <ContainerBox>
                        { activePage === "default" ?
                        <h1>Default</h1>
                        : activePage === "security" ?
                        <Security modalAtive={setModalAtive} setHaveOTP={setHaveOTP} haveOPT={haveOTP} lang={langList || {}} setUnauth={setShowUnauth} setLoginErrSys={setLoginErrorSys} />
                        : <h1>Not found</h1> }
                    </ContainerBox>
                </ContentPage>
                :
                <ContentPage>
                    <UnauthBox>
                        <FaUserShield size={200} color="#444" />
                        <UnauthText>{langList?.unauthMessage?.replace("_APPNAME_", appName)}</UnauthText>
                        <BtnLogin onClick={() => {startAuth()}}>
                            <LoginText>{langList?.unauthBtn}</LoginText>
                        </BtnLogin>
                    </UnauthBox>
                </ContentPage>
                }
            </MainContainer>
            { modalAtive === 'otp' ?
            <ModalBox>
                <ModalContent>
                    <OTP modalAtive={setModalAtive} setHaveOTP={setHaveOTP} haveOPT={haveOTP} lang={langList || {}} setLoginErrSys={setLoginErrorSys} setUnauth={setShowUnauth} />
                </ModalContent>
            </ModalBox>
            : modalAtive === 'exit' ?
            <ModalBox>
                <ModalContent>
                    <ExitModal modalAtive={setModalAtive} lang={langList || {}} changeUnauth={setShowUnauth} />
                </ModalContent>
            </ModalBox>
            : null
        }
        </ZoneWindow>
    );
}