import styled from "styled-components";

type propsBG = {
    bgID: Number;
};

export const ZoneWindow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MainContainer = styled.div`
    width: 75%;
`;

export const HeaderBackground = styled.div`
    width: 100%;
    height: 150px;
    background: ${(props: propsBG) => `url("src/assets/bg${props.bgID}.jpg") no-repeat rgba(0, 0, 0, 0.3);` };
    background-blend-mode: multiply;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const UserAuthInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: #444;
`;

export const DataAuthInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    padding: 5px;
`;

export const UserName = styled.p`
    color: #fff;
    font-weight: bold;
`;

export const BtnExit = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 3px;
    &:hover{
        cursor: pointer;
        background: #0162af;
    }
`;

export const ContentPage = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
`;

export const MenuBox = styled.div`
    background: #3a4b55;
    width: 350px;
`;

export const MenuItem = styled.p`
    user-select: none;
    color: #fff;
    &:not(:first-child){
        border-top: 1px solid #49565d;
    }
    &:last-child{
        border-bottom: 1px solid #49565d;
    }
    padding: 13px;
    border-left: 3px solid #3a4b55;
    &:hover{
        background: #2C3A42;
        border-left: 3px solid #0162af;
        cursor: pointer;
    }
`;

export const ContainerBox = styled.div`
    padding: 10px;
    width: 100%;
`;

export const EntityTitle = styled.p`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
`;

export const BoxSideTopInfo = styled.div`
    display: flex;
    flex-direction: row;
`;

export const LangChange = styled.p`
    color: #fff;
    margin-right: 15px;
    user-select: none;
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
`;

export const UnauthBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 30px;
`;

export const UnauthText = styled.p`
    font-size: 35px;
    color: #444;
`;

export const BtnLogin = styled.div`
    background: #0162af;
    padding: 10px;
    margin-top: 15px;
    user-select: none;
    &:hover{
        cursor: pointer;
    }
`;

export const LoginText = styled.p`
    color: #fff;
    font-size: 20px;
`;

export const ErrorLine = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #f8d7da;
    padding: 5px;
    border: 1px solid #f5c6cb;
`;

export const ErrorText = styled.p`
    color: #721c24;
`;

export const BtnCloseError = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    &:hover{
        cursor: pointer;
    }
`;

export const ModalBox = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
    background: #fff;
    margin: 200px auto;
    padding: 15px;
    width: 35%;
    box-shadow: 0 2px 3px rgb(0 0 0 / 55%);
    border: 1px solid rgba(0,0,0,0.4);
`;