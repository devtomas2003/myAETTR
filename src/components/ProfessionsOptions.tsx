import { OptionSelect, OptionGrp } from "./style";

export default function Professions(){
    return (
    <>
        <OptionSelect value="0">Profissão Desconhecida</OptionSelect>
        <OptionGrp label="Oficiais das Forças Armadas">
            <OptionSelect value="1">Oficiais da Marinha (NE)</OptionSelect>
            <OptionSelect value="2">Oficiais do Exército (NE)</OptionSelect>
            <OptionSelect value="3">Oficiais da Força Aérea (NE)</OptionSelect>
        </OptionGrp>
        <OptionGrp label="Técnicos e profissões das ciências e engenharia, de nível intermédio">
            <OptionSelect value="4">Técnicos das ciências físicas e químicas</OptionSelect>
            <OptionSelect value="5">Técnico de engenharia civil</OptionSelect>
            <OptionSelect value="6">Técnico de electricidade</OptionSelect>
            <OptionSelect value="7">Técnico de electrónica</OptionSelect>
            <OptionSelect value="8">Técnicos e inspectores de mecânica</OptionSelect>
            <OptionSelect value="9">Técnico de química industrial</OptionSelect>
            <OptionSelect value="10">Técnico da metalurgia de base e da indústria extractiva</OptionSelect>
            <OptionSelect value="11">Desenhadores e técnicos afins</OptionSelect>
            <OptionSelect value="12">Outros técnicos das ciências físicas e de engenharia</OptionSelect>
            <OptionSelect value="13">Encarregado da indústria extractiva</OptionSelect>
            <OptionSelect value="14">Encarregado da indústria transformadora</OptionSelect>
            <OptionSelect value="15">Encarregado da construção</OptionSelect>
            <OptionSelect value="16">Técnico de operação de instalações de produção de energia</OptionSelect>
            <OptionSelect value="17">Técnicos de operação de incineradores e de instalações de tratamento de água</OptionSelect>
            <OptionSelect value="18">Técnico de controlo de instalações da indústria química</OptionSelect>
            <OptionSelect value="19">Técnico de operação de instalações de refinação de petróleo e gás natural</OptionSelect>
            <OptionSelect value="20">Técnico de controlo de instalações de produção de metais</OptionSelect>
            <OptionSelect value="21">Outros técnicos de controlo de processos industriais</OptionSelect>
            <OptionSelect value="22">Técnico das ciências da vida (excepto ciências médicas)</OptionSelect>
            <OptionSelect value="23">Técnicos da agricultura e da produção animal</OptionSelect>
            <OptionSelect value="24">Técnico florestal (inclui cinegético)</OptionSelect>
            <OptionSelect value="25">Oficial maquinista de navios</OptionSelect>
            <OptionSelect value="26">Oficial de convés e piloto de navios</OptionSelect>
            <OptionSelect value="27">Piloto de aeronaves</OptionSelect>
            <OptionSelect value="28">Controlador de tráfego aéreo</OptionSelect>
            <OptionSelect value="29">Técnico de segurança de sistemas electrónicos aeronáuticos</OptionSelect>
        </OptionGrp>
        <OptionGrp label="Técnicos e profissionais, de nível intermédio da saúde">
            <OptionSelect value="30">Técnico de equipamento de diagnóstico e terapêutico</OptionSelect>
            <OptionSelect value="31">Técnicos de laboratório de anatomia patológica e medicina</OptionSelect>
            <OptionSelect value="32">Técnicos e assistentes farmacêuticos</OptionSelect>
            <OptionSelect value="33">Técnico de próteses médicas e dentárias</OptionSelect>
            <OptionSelect value="34">Auxiliar de enfermagem</OptionSelect>
            <OptionSelect value="35">Parteira</OptionSelect>
            <OptionSelect value="36">Profissionais de nível intermédio da medicina tradicional e complementar</OptionSelect>
            <OptionSelect value="37">Técnico e assistente de veterinários</OptionSelect>
            <OptionSelect value="38">Terapeuta e assistente dentário</OptionSelect>
            <OptionSelect value="39">Técnico de registos médicos e de informação sobre saúde</OptionSelect>
            <OptionSelect value="40">Técnico dos serviços de saúde comunitária</OptionSelect>
            <OptionSelect value="41">Técnicos de óptica ocular e de contactologia</OptionSelect>
            <OptionSelect value="42">Técnico e assistente, de fisioterapia e similares</OptionSelect>
            <OptionSelect value="43">Assistente de médicos</OptionSelect>
            <OptionSelect value="44">Inspectores e técnicos, da saúde, do trabalho e ambiente</OptionSelect>
            <OptionSelect value="45">Pessoal de ambulâncias</OptionSelect>
            <OptionSelect value="46">Outros profissionais de nível intermédio da saúde, n.e.</OptionSelect>
        </OptionGrp>
    </>
    );
}