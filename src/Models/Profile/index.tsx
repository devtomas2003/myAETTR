import {
    Container,
    TitleZone,
    DescZone,
    ProcessZone,
    HeaderProcess,
    HeaderItem,
    HIText,
    ProcessBody
} from './style';

import { CgProfile, CgFileDocument } from 'react-icons/cg';
import { RiStackLine } from 'react-icons/ri';
import { ImUsers } from 'react-icons/im';
import { FaUserTie } from 'react-icons/fa';
import { useState } from 'react';
import ID from './ID';
import DataComp from './DataComp';
import Filiation from './Filiation';
import EncEdu from './EncEdu';

export default function Profile(){
    const [activeZone, setActiveZone] = useState<Number>(0);
    return (
        <Container>
            <TitleZone>Processo Individual</TitleZone>
            <DescZone>Consulta/edição do processo individual.</DescZone>
            <ProcessZone>
                <HeaderProcess>
                    <HeaderItem isAtive={activeZone === 0 ? true : false} onClick={() => { setActiveZone(0) }}>
                        <CgProfile size={18} color={activeZone === 0 ? '#428bca' : '#444'} />
                        <HIText>Dados Principais</HIText>
                    </HeaderItem>
                    <HeaderItem isAtive={activeZone === 1 ? true : false} onClick={() => { setActiveZone(1) }}>
                        <RiStackLine size={18} color={activeZone === 1 ? '#428bca' : '#444'} />
                        <HIText>Dados Complementares</HIText>
                    </HeaderItem>
                    <HeaderItem isAtive={activeZone === 2 ? true : false} onClick={() => { setActiveZone(2) }}>
                        <ImUsers size={18} color={activeZone === 2 ? '#428bca' : '#444'} />
                        <HIText>Filiação</HIText>
                    </HeaderItem>
                    <HeaderItem isAtive={activeZone === 3 ? true : false} onClick={() => { setActiveZone(3) }}>
                        <FaUserTie size={18} color={activeZone === 3 ? '#428bca' : '#444'} />
                        <HIText>Enc. Educação</HIText>
                    </HeaderItem>
                    <HeaderItem isAtive={activeZone === 4 ? true : false} onClick={() => { setActiveZone(4) }}>
                        <CgFileDocument size={18} color={activeZone === 4 ? '#428bca' : '#444'} />
                        <HIText>Documentos</HIText>
                    </HeaderItem>
                </HeaderProcess>
                <ProcessBody>
                    { activeZone === 0 ?
                    <ID />
                    : activeZone === 1 ?
                    <DataComp />
                    : activeZone === 2 ?
                    <Filiation />
                    : activeZone === 3 ?
                    <EncEdu />
                    : null  }
                </ProcessBody>
            </ProcessZone>
        </Container>
    );
}