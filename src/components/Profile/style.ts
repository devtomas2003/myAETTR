import styled from "styled-components";

type propsStatus = {
    isAtive: Boolean;
};

export const Container = styled.div``;

export const ProcessBody = styled.div`
    background: #f2f7f9;
    padding: 20px;
    border-left: 3px solid #1992c2;
    margin-top: 10px;
`;

export const TitleZone = styled.h1`
    font-size: 26px;
`;

export const DescZone = styled.p`
    font-size: 12px;
    color: #999;
`;

export const ProcessZone = styled.div`
    margin-top: 20px;
`;

export const HeaderProcess = styled.div`
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
        border-right: 1px solid #ccc;
        border-top: ${(props: propsStatus) => props.isAtive ? '1px solid red' : '1px solid #ccc'};
        border-left: 1px solid #ccc;
    }
`;

export const HIText = styled.p`
    margin-left: 5px;
    font-size: 15px;
`;