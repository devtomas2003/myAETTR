import { useState } from "react";
import FiliationEdit from "../FiliationEdit";
import {
    Profiler,
    HeaderFiliations,
    HeaderItem,
    HIText
} from "./style";

export default function Filiation(){
    const [activeFiliation, setActFili] = useState<Number>(0);
    return (
        <Profiler>
            <HeaderFiliations>
                <HeaderItem isAtive={activeFiliation === 0 ? true : false} onClick={() => { setActFili(0) }}>
                    <HIText>Dados do Pai</HIText>
                </HeaderItem>
                <HeaderItem isAtive={activeFiliation === 1 ? true : false} onClick={() => { setActFili(1) }}>
                    <HIText>Dados da Mãe</HIText>
                </HeaderItem>
            </HeaderFiliations>
            { activeFiliation === 0 ?
            <FiliationEdit />
            :
            <FiliationEdit />
            }
        </Profiler>
    );
}