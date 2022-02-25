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
    BoxChange
} from './style';

import { AiOutlineMinus } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';

export default function Security(){
    return(
        <>
            <TitleContent>Segurança</TitleContent>
            <BoxLinks>
                <SecState>
                    <StateTopic>Autenticação de 2 fatores</StateTopic>
                    <StateMiniWin>
                        <MiniWinText>Ativa</MiniWinText>
                    </StateMiniWin>
                    <BoxChange>
                        <BsFillPencilFill size={15} color="#444" />
                    </BoxChange>
                </SecState>
                <SecState>
                    <StateTopic>Password</StateTopic>
                    <StateMiniWin>
                        <MiniWinText>********</MiniWinText>
                    </StateMiniWin>
                    <BoxChange>
                        <BsFillPencilFill size={15} color="#444" />
                    </BoxChange>
                </SecState>
            </BoxLinks>
            <TitleZone>Lista de autorizações</TitleZone>
            <AuthorizationList>
                <AuthorizationBox>
                    <AuthorizationHeader>
                        <AuthHeadText>PGE - Autorizado</AuthHeadText>
                        <AiOutlineMinus title="Revogar autorização" size={15} color="#444" />
                    </AuthorizationHeader>
                    <AuthorizationBody>
                        <AuthBodyLine>
                            <AuthBodyTopic>Aplicação:</AuthBodyTopic>
                            <AuthBodyTopCont>PGE</AuthBodyTopCont>
                        </AuthBodyLine>
                        <AuthBodyLine>
                            <AuthBodyTopic>Estado:</AuthBodyTopic>
                            <AuthBodyTopCont>Autorizado</AuthBodyTopCont>
                        </AuthBodyLine>
                        <AuthBodyLine>
                            <AuthBodyTopic>Hora do pedido:</AuthBodyTopic>
                            <AuthBodyTopCont>13:43:15</AuthBodyTopCont>
                        </AuthBodyLine>
                        <AuthBodyLine>
                            <AuthBodyTopic>Hora de revogação:</AuthBodyTopic>
                            <AuthBodyTopCont>14:43:15</AuthBodyTopCont>
                        </AuthBodyLine>
                    </AuthorizationBody>
                </AuthorizationBox>
            </AuthorizationList>
        </>
    );
}