import styled from "styled-components";

type propsStatus = {
    isAtive: Boolean;
};

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

export const HeaderFiliations = styled.div`
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
`