import styled from "styled-components";

type propsList = {
    inactive?: Boolean
};

type propsStatus = {
    isAtive: Boolean;
};

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
    margin-bottom: 3px;
    font-size: 14px;
`;

export const SASEInput = styled.input`
    padding: 7px;
    outline: none;
    border: 1px solid #ccc;
    width: 100%;
    cursor: ${(props: propsList) => props.inactive ? 'not-allowed' : 'auto' };
`;

export const SASESelect = styled.select`
    padding: 7px;
    outline: none;
    border: 1px solid #ccc;
    width: 100%;
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
    font-size: 14px;
    cursor: ${(props: propsList) => props.inactive ? 'not-allowed' : 'pointer' };
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

export const OptionSelect = styled.option`
    font-size: 14px;
    color: #444;
`;

export const HeaderMuradas = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #ccc;
`;

export const HeaderItem = styled.div`
    display: flex;
    flex-direction: row;
    user-select: none;
    align-items: center;
    color: ${(props: propsStatus) => props.isAtive ? '#428bca' : '#444'};
    padding: 10px;
    border-right: ${(props: propsStatus) => props.isAtive ? '1px solid #ccc' : '1px solid #fff'};
    border-left: ${(props: propsStatus) => props.isAtive ? '1px solid #ccc' : '1px solid #fff'};
    border-top: ${(props: propsStatus) => props.isAtive ? '1px solid red' : '1px solid #fff'};
    border-bottom: 1px solid #fff;
    margin-bottom: ${(props: propsStatus) => props.isAtive ? '-1px' : null};
    &:hover{
        cursor: pointer;
        &:not(:nth-child(2)){
            border-left: 1px solid #ccc;
        }
        &:not(:nth-child(1)){
            border-right: 1px solid #ccc;
        }
        border-top: ${(props: propsStatus) => props.isAtive ? '1px solid red' : '1px solid #ccc'};
    }
`;

export const HIText = styled.p`
    font-size: 15px;
`;

export const MuradasBox = styled.div`
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    padding: 15px;
`;

export const MurBoxLine = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    &:last-child{
        margin-top: 10px;
    }
`;

export const MurBoxZone = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;
`;

export const MurBoxSelect = styled.select`
    padding: 7px;
    outline: none;
    border: 1px solid #ccc;
    width: 100%;
    color: #444;
`;

export const MurBoxText = styled.p`
    margin-bottom: 3px;
    font-size: 14px;
`;