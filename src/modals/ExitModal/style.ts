import styled from "styled-components";

export const Container = styled.div``;

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

export const QuestionLine = styled.p`
    font-size: 14px;
`;

export const BtnModalExit = styled.div`
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
`;

export const BtnMOText = styled.p`
    margin-left: 10px;
    color: #fff;
`;

export const QLError = styled.p`
    font-size: 14px;
    margin-bottom: 5px;
    color: red;
`;

export const QLSuccess = styled.p`
    font-size: 14px;
    margin-bottom: 5px;
    color: #387537;
`;