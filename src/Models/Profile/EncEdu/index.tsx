import Countrys from "../../../components/CountrysOptions";
import Kinships from "../../../components/KinshipsOptions";
import {
    Profiler,
    EncEduBox,
    LineEE,
    LineEEText,
    LineEEInput,
    SelectLineEE,
    BoxEEMulti,
    LineEEMulti
} from "./style";

export default function EncEdu(){
    return (
        <Profiler>
            <EncEduBox>
                <LineEE>
                    <LineEEText>Parentesco:</LineEEText>
                    <SelectLineEE>
                        <Kinships />
                    </SelectLineEE>
                </LineEE>
                <BoxEEMulti>
                    <LineEEMulti>
                        <LineEEText>País Físcal:</LineEEText>
                        <SelectLineEE>
                            <Countrys />
                        </SelectLineEE>
                    </LineEEMulti>
                    <LineEEMulti>
                        <LineEEText>Correio Electrónico:</LineEEText>
                        <LineEEInput type="text" />
                    </LineEEMulti>
                </BoxEEMulti>
            </EncEduBox>
        </Profiler>
    );
}