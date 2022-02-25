import styled from 'styled-components';

export const TitleContent = styled.h1`
    font-size: 25px;
`;

export const BoxLinks = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;

export const TitleZone = styled.h1`
    font-size: 25px;
    margin-top: 15px;
`;

export const AuthorizationList = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;

export const AuthorizationBox = styled.div`
    display: flex;
    flex-direction: column;
    &:not(:first-child){
        margin-top: 10px;
    }
`;

export const AuthorizationHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #e5e5e5;
    padding: 5px;
`;

export const AuthHeadText = styled.p`
    color: #000;
`;

export const AuthorizationBody = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #e5e5e5;
    background: #fcfcfc;
    padding: 5px;
`;

export const AuthBodyLine = styled.div`
    display: flex;
    flex-direction: row;
    &:not(:first-child){
        margin-top: 3px;
    }
`;

export const AuthBodyTopic = styled.p``;

export const AuthBodyTopCont = styled.p`
    margin-left: 5px;
    font-weight: bold;
`;

export const SecState = styled.div`
    display: flex;
    flex-direction: row;
    &:not(:first-child){
        margin-top: 3px;
    }
`;

export const StateTopic = styled.p`

`;

export const StateMiniWin = styled.div`
    background: #0162af;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2px 10px 2px 10px;
    margin-left: 5px;
`;

export const MiniWinText = styled.label`
    color: #fff;
    font-size: 12px;
`;

export const BoxChange = styled.div`
    cursor: pointer;
    margin-left: 5px;
`;