import styled from "styled-components";

export const BoxInputsDC = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SASEInfoLine = styled.div`
    display: flex;
    width: 100%;
    &:nth-child(2){
        margin-top: 5px;
    }
    flex-direction: row;
`;

export const SASELine = styled.div`
    width: 33%;
    margin-right: 23px;
`;

export const SASEText = styled.p`

`;

export const SASEInput = styled.input`
    padding: 7px;
    outline: none;
    border: 1px solid #ccc;
    width: 100%;
`;

export const SASESelect = styled.select`
    padding: 7px;
    outline: none;
    border: 1px solid #ccc;
    width: 98%;
`;

export const BoxChecks = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InputCheck = styled.input`
    width: 15px;
    height: 15px;
    border: 1px solid #ccc;
`;

export const CheckLabel = styled.label`
    user-select: none;
    font-size: 15px;
    margin-left: 5px;
`;

export const LineCheck = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    &:not(:first-child){
        margin-top: 5px;
    }
`;

export const Profiler = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    &:not(:first-child){
        margin-top: 10px;
    }
    padding: 20px;
    border: 1px solid #ccc;
`;

export const OptionSelect = styled.option``;