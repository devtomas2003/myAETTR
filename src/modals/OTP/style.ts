import styled from 'styled-components';

export const Container = styled.div`

`;

export const ModalTitle = styled.h1`
    font-size: 18px;
`;

export const HeaderModal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    user-select: none;
`;

export const ModalClose = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    &:hover{
        cursor: pointer;
    }
`;

export const ModalBody = styled.div`
    background: #f2f7f9;
    padding: 10px;
    border-left: 3px solid #1992c2;
    margin-top: 5px;
`;

export const QRCodeImg = styled.img`
    width: 250px;
`;

export const InstLineOne = styled.p`
    display: flex;
    flex-direction: row;
    margin-top: 5px;
`;

export const InstLineTwo = styled.p`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
`;

export const ListApps = styled.ul`
    list-style: none;
    margin-top: 5px;
`;

export const ListLine = styled.li`

`;

export const ListLink = styled.a`
    color: #333;
    text-decoration: none;
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
`;

export const InstLinePq = styled.p`
    margin-top: 10px;
    color: #999;
    font-size: 14px;
`;

export const BtnModalOTP = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: fit-content;
    margin-top: 10px;
    user-select: none;
    background: #0162af;
    &:hover{
        cursor: pointer;
    }
    &:nth-child(2){
        margin-bottom: 8px;
    }
`;

export const BtnMOText = styled.p`
    margin-left: 10px;
    color: #fff;
`;

export const OTPCode = styled.p``;

export const SensitiveInfo = styled.div``;

export const OTPInput = styled.input`
    margin-top: 10px;
    outline: none;
    padding: 5px;
    border: 1px solid #999;
    border-radius: 3px;
    width: 35%;
`;

export const ErrorText = styled.p`
    margin-top: 10px;
    color: red;
`;

export const SucessBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ImgSucBox = styled.div`
    margin-top: 20px;
`;

export const SucessText = styled.p`
    font-size: 25px;
    color: #32a852;
`;

export const SucessTextInstOne = styled.p`
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 5px;
`;

export const SucessTextInstTwo = styled.p`
    font-size: 18px;
    margin-bottom: 10px;
`;

export const DesactivateBox = styled.div``;

export const TextQuestions = styled.p``;