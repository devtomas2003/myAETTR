import { useState } from 'react';
import Countrys from '../../../components/CountrysOptions';
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
    OptionSelect,
    HeaderMuradas,
    HeaderItem,
    HIText,
    MuradasBox,
    MurBoxLine,
    MurBoxZone,
    MurBoxSelect,
    MurBoxText
} from './style';

export default function DataComp(){
    const [activeMuradaPag, setActMurPag] = useState<Number>(0);
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
                            <SASEInput inactive={true} disabled type="text" />
                        </SASELine>
                        <SASELine>
                            <SASEText>Refeição:</SASEText>
                            <SASEInput inactive={true} disabled type="text" />
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
                        <InputCheck type="checkbox" id="pca" disabled />
                        <CheckLabel inactive={true} htmlFor="pca">Percurso Curricular Alternativo (PCA)</CheckLabel>
                    </LineCheck>
                    <LineCheck>
                        <InputCheck type="checkbox" id="ne" disabled />
                        <CheckLabel inactive={true} htmlFor="ne">Necessidades Educativas</CheckLabel>
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
                <HeaderMuradas>
                    <HeaderItem isAtive={activeMuradaPag === 0 ? true : false} onClick={() => { setActMurPag(0) }}>
                        <HIText>Naturalidade</HIText>
                    </HeaderItem>
                    <HeaderItem isAtive={activeMuradaPag === 1 ? true : false} onClick={() => { setActMurPag(1) }}>
                        <HIText>Residência</HIText>
                    </HeaderItem>
                </HeaderMuradas>
                { activeMuradaPag === 0 ?
                <MuradasBox>
                    <MurBoxLine>
                        <MurBoxZone>
                            <MurBoxText>País:</MurBoxText>
                            <MurBoxSelect>
                                <Countrys />
                            </MurBoxSelect>
                        </MurBoxZone>
                        <MurBoxZone>
                            <MurBoxText>Destrito:</MurBoxText>
                            <MurBoxSelect>
                                <OptionSelect>Viseu</OptionSelect>
                                <OptionSelect>Aveiro</OptionSelect>
                                <OptionSelect>Lisboa</OptionSelect>
                            </MurBoxSelect>
                        </MurBoxZone>
                        <MurBoxZone>
                            <MurBoxText>Concelho:</MurBoxText>
                            <MurBoxSelect>
                                <OptionSelect>Tondela</OptionSelect>
                                <OptionSelect>Lamego</OptionSelect>
                                <OptionSelect>Viseu</OptionSelect>
                                <OptionSelect>Vouzela</OptionSelect>
                            </MurBoxSelect>
                        </MurBoxZone>
                    </MurBoxLine>
                    <MurBoxLine>
                        <MurBoxZone>
                            <MurBoxText>Freguesia:</MurBoxText>
                            <MurBoxSelect>
                                <OptionSelect>União das freguesias de Tondela e Nandufe</OptionSelect>
                                <OptionSelect>Dardavaz</OptionSelect>
                                <OptionSelect>Molelos</OptionSelect>
                                <OptionSelect>Tonda</OptionSelect>
                            </MurBoxSelect>
                        </MurBoxZone>
                    </MurBoxLine>
                </MuradasBox>
                :
                <MuradasBox>
                    <MurBoxLine>
                        <MurBoxZone>
                            <MurBoxText>Destrito:</MurBoxText>
                            <MurBoxSelect>
                                <OptionSelect>Viseu</OptionSelect>
                                <OptionSelect>Aveiro</OptionSelect>
                                <OptionSelect>Lisboa</OptionSelect>
                            </MurBoxSelect>
                        </MurBoxZone>
                        <MurBoxZone>
                            <MurBoxText>Concelho:</MurBoxText>
                            <MurBoxSelect>
                                <OptionSelect>Tondela</OptionSelect>
                                <OptionSelect>Lamego</OptionSelect>
                                <OptionSelect>Viseu</OptionSelect>
                                <OptionSelect>Vouzela</OptionSelect>
                            </MurBoxSelect>
                        </MurBoxZone>
                        <MurBoxZone>
                            <MurBoxText>Freguesia:</MurBoxText>
                            <MurBoxSelect>
                                <OptionSelect>União das freguesias de Tondela e Nandufe</OptionSelect>
                                <OptionSelect>Dardavaz</OptionSelect>
                                <OptionSelect>Molelos</OptionSelect>
                                <OptionSelect>Tonda</OptionSelect>
                            </MurBoxSelect>
                        </MurBoxZone>
                    </MurBoxLine>
                </MuradasBox>
            }
            </Profiler>
        </>
    );
}