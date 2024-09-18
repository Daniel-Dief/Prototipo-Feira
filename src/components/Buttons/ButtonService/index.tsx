import { DivServices, ImageServices, TextServices } from "./style";

interface ButtonServicesProps{
    title: string;
    icon: string;
    width: string;
    height: string;
    handleClick: () => void;
}

export default function ButtonServices({ title, icon, width, height, handleClick } : ButtonServicesProps ){
    
    return (
        <DivServices onClick={handleClick} width={width} height={height}>
            <ImageServices src={icon} />
            <TextServices>
                {title}
            </TextServices>
        </DivServices>
    )
}
