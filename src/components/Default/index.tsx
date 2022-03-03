import { useEffect, useState } from 'react';
import { appName } from '../../configs';
import { apiSAU } from '../../services/api';
import { langProps } from '../../types/Lang';
import { 
    PageContainer,
    TitleZone,
    AppDescription,
    LineSeparator,
    Notifications,
    NotificationLine,
    NBTitle,
    NBContent,
    AppContainer,
    ACTitle,
    IMGQr,
    BoxQr,
    AppDesc,
    LinkDown,
    APPTAndL,
    NotificationHeader
} from './style';

import QRCodeAPP from '../../assets/app.png';

type SecurityProps = {
    lang: langProps;
    setShowUnauth: React.Dispatch<React.SetStateAction<Boolean>>;
    setLoginErrSys: React.Dispatch<React.SetStateAction<Boolean>>;
    setModalAtive: React.Dispatch<React.SetStateAction<string>>;
}
type basicResProps = {
    proc: String;
    nome: String;
    amigavel: String;
    sexo: Number;
};

export default function Default(props: SecurityProps){
    const [basicInfo, setBasicInfo] = useState<basicResProps>();

    useEffect(function(){
        function populateHome(){
            props.setModalAtive('loading');
            apiSAU.get('/getBasicInfo', {
                headers: {
                    "Authorization": "Bearer " + sessionStorage.getItem("authToken")
                }
            }).then(function(res){
                if(res.data.status !== "error"){
                    setBasicInfo(res.data);
                    props.setModalAtive('');
                }else{
                    sessionStorage.removeItem("authToken");
                    props.setShowUnauth(true);
                    props.setModalAtive('');
                }
            }).catch(() => {
                sessionStorage.removeItem("authToken");
                props.setShowUnauth(true);
                props.setModalAtive('');
                props.setLoginErrSys(true);
            });
        }
        populateHome();
    }, []);
    function getTimeSaudation(){
        const hour = new Date().getHours();
        if(hour < 12 && hour >= 7){
            return props.lang.godMorn?.toString();
        }else if(hour >= 12 && hour < 19){
            return props.lang.godAft?.toString();
        }else{
            return props.lang.godNig?.toString();
        }
    }
    return (
        <PageContainer>
            <TitleZone>{props.lang.menuStart}</TitleZone>
            <AppDescription>{props.lang.wellcomePgDesc?.replace("_APPNAME_", appName).replace("_USERSMALLNAME_", basicInfo?.amigavel.toString() || '').replace("_SAUDATION_", getTimeSaudation() || '').replace("_NAMEPREFIX_", basicInfo?.sexo === 0 ? props.lang.menSaud?.toString() || '' : props.lang.womSaud?.toString() || '')}</AppDescription>
            <LineSeparator />
            <Notifications>
                <NotificationHeader>
                    <TitleZone>{props.lang.notificationTitle}</TitleZone>
                </NotificationHeader>
                    <NotificationLine>
                        {/* <NBTitle>Notificação Teste</NBTitle> */}
                        <NBContent>Não existem notificações</NBContent>
                    </NotificationLine>
            </Notifications>
            <LineSeparator />
            <AppContainer>
                <ACTitle>APP</ACTitle>
                <BoxQr>
                    <IMGQr src={QRCodeAPP} title="QRCode - APP" />
                    <APPTAndL>
                        <AppDesc>{props.lang.appDescription}</AppDesc>
                        <LinkDown href="https://schools.imm.pt/app/" target="_blank">{props.lang.appDownloadLink}</LinkDown>
                    </APPTAndL>
                </BoxQr>
            </AppContainer>
        </PageContainer>
    );
}