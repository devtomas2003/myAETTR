import { langProps } from "../../types/Lang";
import { ContainerLoad, IMGLoad, LoadText } from "./style";
import LoadGIF from '../../assets/loading.gif';

type LoadingProps = {
    lang: langProps;
}

export default function Loading(props: LoadingProps){
    return (
        <ContainerLoad>
            <IMGLoad src={LoadGIF} title={props.lang.loading?.toString()} />
            <LoadText>{props.lang.loading}...</LoadText>
        </ContainerLoad>
    );
}