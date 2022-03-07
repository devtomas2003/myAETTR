import { OptionSelect } from "./style";

export default function Kinships(){
    return (
    <>
        <OptionSelect value="0"></OptionSelect>
        <OptionSelect value="1">Mãe</OptionSelect>
        <OptionSelect value="2">Pai</OptionSelect>
        <OptionSelect value="3">Próprio</OptionSelect>
        <OptionSelect value="4">Avô</OptionSelect>
        <OptionSelect value="5">Avó</OptionSelect>
        <OptionSelect value="6">Irmão</OptionSelect>
        <OptionSelect value="7">Irmã</OptionSelect>
        <OptionSelect value="8">Tutor</OptionSelect>
        <OptionSelect value="9">Outro</OptionSelect>
    </>
    );
}