import styled from "styled-components";

export const PageContainer = styled.div``;

export const TitleZone = styled.h1`
    font-size: 15px;
    &:nth-child(4){
        margin-top: 5px;
    }
`;

export const AppDescription = styled.p`
    margin-top: 5px;
    font-size: 15px;
`;

export const LineSeparator = styled.div`
    background: #e5e5e5;
    width: 100%;
    margin-top: 10px;
    height: 1px;
`;

export const Notifications = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5px;
`;

export const NotificationLine = styled.div`
    display: flex;
    flex-direction: column;
    border-left: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    background: #fff;
    padding: 5px;
`;

export const NBContent = styled.p`
    color: #666;
    font-size: 15px;
`;

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45%;
    border: 1px solid #ddd;
    padding: 5px;
    margin-top: 10px;
    background: #fafafa;
`;

export const ACTitle = styled.h1`
    font-size: 20px;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 10px;
`;

export const IMGQr = styled.img`
    width: 200px;
`;

export const BoxQr = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const AppDesc = styled.p``;

export const LinkDown = styled.a`
    margin-top: 5px;
    color: #444;
    &:hover{
        text-decoration: underline;
    }
`;

export const APPTAndL = styled.div`
    display: flex;
    margin-left: 15px;
    flex-direction: column;
`;

export const NotificationHeader = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3px;
    border: 1px solid #e5e5e5;
    background: #fafafa;
`;