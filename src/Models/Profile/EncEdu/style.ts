import styled from "styled-components";

export const Profiler = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    &:last-child{
        margin-top: 10px;
    }
    padding: 20px;
    border: 1px solid #ccc;
`;

export const EncEduBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const LineEE = styled.div`

`;

export const LineEEText = styled.p`
    margin-bottom: 3px;
    font-size: 14px;
`;

export const LineEEInput = styled.input`
    padding: 7px;
    outline: none;
    border: 1px solid #ccc;
    width: 100%;
`;

export const SelectLineEE = styled.select`
    padding: 6px;
    outline: none;
    border: 1px solid #ccc;
    width: 100%;
    color: #444;
`;

export const BoxEEMulti = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 5px;
`;

export const LineEEMulti = styled.div`
    width: 100%;
    &:last-child{
        margin-right: 16px;
        margin-left: 10px;
    }
`;