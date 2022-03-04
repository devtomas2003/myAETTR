import styled from "styled-components";

export const FiliationsBox = styled.div`
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    padding: 15px;
`;

export const LineInfoMT = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 16px;
`;

export const InfoName = styled.div`
    display: flex;
    flex-direction: column;
    &:first-child{
        width: 100%;
    }
    &:last-child{
        margin-left: 30px;
    }
`;

export const InfoText = styled.p`
    margin-bottom: 3px;
    font-size: 14px;
`;

export const InputInfo = styled.input`
    padding: 7px;
    outline: none;
    border: 1px solid #ccc;
    width: 100%;
`;

export const InputsFiliations = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

export const InputBig = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5px;
`;

export const SelectInput = styled.select`
    padding: 7px;
    outline: none;
    border: 1px solid #ccc;
    width: 100%;
    color: #444;
`;

export const OptionInput = styled.option`
    font-size: 14px;
    color: #444;
`;

export const HabBoxInp = styled.div`
    margin-top: 5px;
    display: flex;
    width: 100%;
    &:last-child{
        margin-left: 10px;
    }
    flex-direction: column;
`;

export const HabBoxInps = styled.div`
    margin-top: 5px;
    display: flex;
    &:last-child{
        margin-left: 25px;
    }
    flex-direction: column;
    width: 100%;
`;

export const HabLine = styled.div`
    display: flex;
    flex-direction: row;
    &:last-child{
        margin-right: 16px;
    }
`;

export const HabZone = styled.div`
    display: flex;
    flex-direction: column;
`;