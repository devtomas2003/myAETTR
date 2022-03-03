import styled from "styled-components";

export const ZoneProfile = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ImageZone = styled.div`
    margin-right: 10px;
    border: 1px solid #e5e5e5;
    padding: 3px;
`;

export const IMGPic = styled.img`
    width: 124px;
`;

export const ProfileZone = styled.div`
    display: flex;
    flex-direction: column;
    width: 89%;
`;

export const ProfileSubBox = styled.div`
    display: flex;
    flex-direction: row;
`;

export const InputData = styled.input`
    width: 98%;
    padding: 7px;
    border: 1px solid #ccc;
    outline: none;
`;

export const InputDataSec = styled.input`
    width: 96%;
    padding: 7px;
    border: 1px solid #ccc;
    outline: none;
`;

export const ProfileInputZone = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    &:nth-child(1){
        margin-right: 20px;
    }
`;

export const ProInpZoneText = styled.p``;

export const BtnChaPh = styled.div`
    display: flex;
    flex-direction: row;
    background: #fafafa;
    padding: 3px;
    border: 1px solid #e5e5e5;
    align-items: center;
    justify-content: center;
    &:hover{
        cursor: pointer;
    }
`;

export const BCPText = styled.p`
    margin-left: 2px;
    font-size: 15px;
`;

export const NameBox = styled.div`
    margin-top: 2px;
    width: 100%;
`;

export const BoxMoreInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LineInfo = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 5px;
    width: 100%;
`;

export const BoxInput = styled.div`
    width: 34%;
    &:nth-child(2){
        margin-left: 10px;
    }
    &:nth-child(3){
        margin-left: 10px;
    }
`;

export const InputTitle = styled.p`
    font-size: 15px;
`;

export const InputMore = styled.input`
    padding: 7px;
    border: 1px solid #ccc;
    outline: none;
    width: 100%;
    box-sizing:border-box;
`;

export const InputMoreDate = styled.input`
    padding: 5px 7px 5px 7px;
    border: 1px solid #ccc;
    outline: none;
    width: 100%;
    box-sizing:border-box;
`;

export const InputSelect = styled.select`
    padding: 6px;
    border: 1px solid #ccc;
    outline: none;
    box-sizing:border-box;
    width: 100%;
`;

export const BoxMurada = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TitleMurada = styled.p`
    font-size: 15px;
`;

export const InputFull = styled.input`
    padding: 7px;
    border: 1px solid #ccc;
    margin-top: 10px;
    outline: none;
`;

export const MoreMurada = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const CodPostalBox = styled.div`
    &:not(:first-child){
        margin-left: 10px;
    }
`;

export const TitleBox = styled.p`
    font-size: 15px;
    margin-top: 5px;
`;

export const BoxInputsMurada = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const InputCodPost = styled.input`
    padding: 7px;
    border: 1px solid #ccc;
    margin-top: 5px;
    width: 2vw;
    outline: none;
`;

export const InputLocali = styled.input`
    padding: 7px;
    border: 1px solid #ccc;
    margin-top: 5px;
    width: 37vw;
    outline: none;
`;

export const InputDoor = styled.input`
    padding: 7px;
    border: 1px solid #ccc;
    margin-top: 5px;
    width: 4vw;
    outline: none;
`;

export const SeparatorCodPos = styled.p`
    margin-left: 5px;
    margin-right: 5px;
    font-size: 18px;
`;

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

export const OptionSelect = styled.option``;