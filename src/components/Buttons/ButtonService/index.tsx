import { DivServices, ImageServices, TextServices } from "./style";

interface ButtonServicesProps{
    title: string;
    icon: string;
    width: string;
    height: string;
}

export default function ButtonServices({ title, icon, width, height } : ButtonServicesProps ){
    
    return (
        <DivServices width={width} height={height}>
            <ImageServices src={icon} />
            <TextServices>
                {title}
            </TextServices>
        </DivServices>
    )
}
