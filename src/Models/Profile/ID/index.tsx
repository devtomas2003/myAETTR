import {
    ZoneProfile,
    ImageZone,
    IMGPic,
    ProfileZone,
    ProfileSubBox,
    InputData,
    ProfileInputZone,
    ProInpZoneText,
    BtnChaPh,
    BCPText,
    NameBox,
    BoxMoreInfo,
    LineInfo,
    BoxInput,
    InputTitle,
    InputMore,
    InputSelect,
    InputMoreDate,
    BoxMurada,
    TitleMurada,
    InputFull,
    MoreMurada,
    CodPostalBox,
    TitleBox,
    BoxInputsMurada,
    InputCodPost,
    SeparatorCodPos,
    InputLocali,
    InputDoor,
    InputDataSec,
    Profiler,
    OptionSelect
} from './style';

import { MdOutlinePhotoCamera } from 'react-icons/md';
import ProfileDefault from '../../../assets/profile_default.jpg';
import Countrys from '../../../components/CountrysOptions';

export default function ID(){
    return (
        <>
            <Profiler>
                <ZoneProfile>
                    <ImageZone>
                        <IMGPic src={ProfileDefault} title="Pessoa XYZ" />
                        <BtnChaPh>
                            <MdOutlinePhotoCamera size={18} color="#444" />
                            <BCPText>Alterar Foto</BCPText>
                        </BtnChaPh>
                    </ImageZone>
                    <ProfileZone>
                        <ProfileSubBox>
                            <ProfileInputZone>
                                <ProInpZoneText>N.º Processo:</ProInpZoneText>
                                <InputData type="text" />
                            </ProfileInputZone>
                            <ProfileInputZone>
                                <ProInpZoneText>N.º Identificação Fiscal:</ProInpZoneText>
                                <InputDataSec type="text" />
                            </ProfileInputZone>
                        </ProfileSubBox>
                        <NameBox>
                            <ProfileInputZone>
                                <ProInpZoneText>Nome:</ProInpZoneText>
                                <InputData type="text" />
                            </ProfileInputZone>
                        <ProfileInputZone>
                            <ProInpZoneText>Nome abreviado:</ProInpZoneText>
                            <InputData type="text" />
                        </ProfileInputZone>
                        </NameBox>
                    </ProfileZone>
                    </ZoneProfile>
                    <BoxMoreInfo>
                        <LineInfo>
                            <BoxInput>
                                <InputTitle>Data de nascimento:</InputTitle>
                                <InputMoreDate type="date" />
                            </BoxInput>
                            <BoxInput>
                                <InputTitle>Sexo:</InputTitle>
                                <InputSelect>
                                    <OptionSelect value="0">Masculino</OptionSelect>
                                    <OptionSelect value="1">Femenino</OptionSelect>
                                </InputSelect>
                            </BoxInput>
                            <BoxInput>
                                <InputTitle>Telemóvel:</InputTitle>
                                <InputMore type="text" />
                            </BoxInput>
                        </LineInfo>
                        <LineInfo>
                            <BoxInput>
                                <InputTitle>E-Mail AETTR:</InputTitle>
                                <InputMore type="text" />
                            </BoxInput>
                            <BoxInput>
                                <InputTitle>E-Mail Externo:</InputTitle>
                                <InputMore type="text" />
                            </BoxInput>
                            <BoxInput>
                                <InputTitle>Nacionalidade:</InputTitle>
                                <InputSelect>
                                    <Countrys />
                                </InputSelect>
                            </BoxInput>
                        </LineInfo>
                    </BoxMoreInfo>
            </Profiler>
            <Profiler>
                <BoxMurada>
                    <TitleMurada>Murada:</TitleMurada>
                    <InputFull type="text" />
                    <InputFull type="text" />
                </BoxMurada>
                <MoreMurada>
                    <CodPostalBox>
                        <TitleBox>Codigo Postal:</TitleBox>
                        <BoxInputsMurada>
                            <InputCodPost type="text" />
                            <SeparatorCodPos>-</SeparatorCodPos>
                            <InputCodPost type="text" />
                        </BoxInputsMurada>
                    </CodPostalBox>
                    <CodPostalBox>
                        <TitleBox>Localidade:</TitleBox>
                        <InputLocali type="text" />
                    </CodPostalBox>
                    <CodPostalBox>
                        <TitleBox>N.º Porta:</TitleBox>
                        <InputDoor type="text" />
                    </CodPostalBox>
                </MoreMurada>
            </Profiler>
        </>
    );
}