import Countrys from '../../../components/CountrysOptions';
import Professions from '../../../components/ProfessionsOptions';
import { 
    FiliationsBox,
    LineInfoMT,
    InfoName,
    InfoText,
    InputInfo,
    InputsFiliations,
    InputBig,
    SelectInput,
    OptionInput,
    HabBoxInp,
    HabBoxInps,
    HabLine,
    HabZone
} from './style';

export default function FiliationEdit(){
    return (
        <FiliationsBox>
            <InputsFiliations>
                <LineInfoMT>
                    <InfoName>
                        <InfoText>Nome:</InfoText>
                        <InputInfo type="text" />
                    </InfoName>
                    <InfoName>
                        <InfoText>Contato:</InfoText>
                        <InputInfo type="text" />
                    </InfoName>
                </LineInfoMT>
                <HabZone>
                    <HabLine>
                        <HabBoxInp>
                            <InfoText>Situação Emprego:</InfoText>
                            <SelectInput>
                                <OptionInput value="2">Selecione...</OptionInput>
                            </SelectInput>
                        </HabBoxInp>
                        <HabBoxInp>
                            <InfoText>Formação Académica:</InfoText>
                            <SelectInput>
                                <OptionInput value="2">Selecione...</OptionInput>
                            </SelectInput>
                        </HabBoxInp>
                    </HabLine>
                    <HabLine>
                        <HabBoxInp>
                            <InfoText>Naturalidade:</InfoText>
                            <SelectInput>
                                <Countrys />
                            </SelectInput>
                        </HabBoxInp>
                        <HabBoxInp>
                            <InfoText>Nacionalidade:</InfoText>
                            <SelectInput>
                                <Countrys />
                            </SelectInput>
                        </HabBoxInp>
                    </HabLine>
                    <HabLine>
                        <HabBoxInps>
                            <InfoText>N.º Identificação Fiscal:</InfoText>
                            <InputInfo type="text" />
                        </HabBoxInps>
                        <HabBoxInps>
                            <InfoText>Correio Electrónico:</InfoText>
                            <InputInfo type="text" />
                        </HabBoxInps>
                    </HabLine>
                </HabZone>
                <InputBig>
                    <InfoText>Profissão:</InfoText>
                    <SelectInput>
                        <Professions />
                    </SelectInput>
                </InputBig>
            </InputsFiliations>
        </FiliationsBox>
    );
}