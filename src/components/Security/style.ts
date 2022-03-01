import styled from 'styled-components';

type propsStatus = {
    isAtive: Boolean;
};

export const TitleContent = styled.h1`
    font-size: 14px;
`;

export const BoxLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
`;

export const TitleZone = styled.h1`
    font-size: 14px;
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
    border: 1px solid #e5e5e5;
    background: #fafafa;
    padding: 5px 5px 5px 15px;
`;

export const AuthHeadText = styled.p`
    color: #000;
    font-size: 14px;
`;

export const AuthorizationBody = styled.div`
    display: flex;
    flex-direction: column;
    border-left: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    background: #fff;
    padding: 15px;
`;

export const AuthBodyLine = styled.div`
    display: flex;
    flex-direction: row;
    &:not(:first-child){
        margin-top: 3px;
    }
`;

export const AuthBodyTopic = styled.p`
    font-weight: bold;
    font-size: 14px;
`;

export const AuthBodyTopCont = styled.p`
    margin-left: 5px;
    font-size: 14px;
`;

export const SecState = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    width: 32%;
`;

export const StateTopic = styled.p`
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: bold;
`;

export const StateMiniWin = styled.div`
    background: ${(props: propsStatus) => props.isAtive ? '#0162af' : '#444'};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2px 10px 2px 10px;
    margin-top: 5px;
`;

export const MiniWinText = styled.label`
    color: #fff;
    font-size: 15px;
`;

export const BoxChange = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
`;

export const BoxCnt = styled.div`
    background: #f2f7f9;
    padding: 10px;
    border-left: 3px solid #1992c2;
    &:not(:first-child){
        margin-top: 10px;
    }
`;

export const LineSeparator = styled.div`
    background: #e5e5e5;
    width: 100%;
    margin-top: 10px;
    height: 1px;
`;

export const LineSeparatorLA = styled.div`
    background: #e5e5e5;
    width: 100%;
    margin-top: 5px;
    height: 1px;
`;

export const BtnHeaderAL = styled.div`
    background: #444;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2px;
    justify-content: center;
    &:hover{
        cursor: pointer;
    }
`;