import {
    BoxInputsDC,
    SASEInfoLine,
    SASELine, 
    SASEText,
    SASEInput,
    SASESelect,
    BoxChecks,
    InputCheck,
    CheckLabel,
    LineCheck,
    Profiler,
    OptionSelect
} from './style';

export default function DataComp(){
    return (
        <>
            <Profiler>
                <BoxInputsDC>
                    <SASEInfoLine>
                        <SASELine>
                            <SASEText>N.º Elementos Agregado Familiar:</SASEText>
                            <SASEInput type="number" />
                        </SASELine>
                        <SASELine>
                            <SASEText>Subsídio ASE:</SASEText>
                            <SASEInput type="text" />
                        </SASELine>
                        <SASELine>
                            <SASEText>Refeição:</SASEText>
                            <SASEInput type="text" />
                        </SASELine>
                    </SASEInfoLine>
                    <SASEInfoLine>
                        <SASELine>
                            <SASEText>Tipo Cartão:</SASEText>
                            <SASESelect>
                            <OptionSelect>Livre</OptionSelect>
                            <OptionSelect>Restrito</OptionSelect>
                            <OptionSelect>Impedido</OptionSelect>
                            </SASESelect>
                        </SASELine>
                    </SASEInfoLine>
                </BoxInputsDC>
            </Profiler>
            <Profiler>
                <BoxChecks>
                    <LineCheck>
                        <InputCheck type="checkbox" id="pca" />
                        <CheckLabel htmlFor="pca">Percurso Curricular Alternativo (PCA)</CheckLabel>
                    </LineCheck>
                    <LineCheck>
                        <InputCheck type="checkbox" id="ne" />
                        <CheckLabel htmlFor="ne">Necessidades Educativas</CheckLabel>
                    </LineCheck>
                    <LineCheck>
                        <InputCheck type="checkbox" id="pc" />
                        <CheckLabel htmlFor="pc">Tem Computador em Casa</CheckLabel>
                    </LineCheck>
                    <LineCheck>
                        <InputCheck type="checkbox" id="net" />
                        <CheckLabel htmlFor="net">Tem Acesso à Internet em Casa</CheckLabel>
                    </LineCheck>
                    <LineCheck>
                        <InputCheck type="checkbox" id="te" />
                        <CheckLabel htmlFor="te">Trabalhador Estudante</CheckLabel>
                    </LineCheck>
                </BoxChecks>
            </Profiler>
            <Profiler>
                
            </Profiler>
        </>
    );
}