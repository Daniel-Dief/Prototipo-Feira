import { DivAmountProduct, IconAmountProduct, TextAmountProduct } from "../FloatContainerShop/style";
import { DivTotalProduct, ImageProduct, DivInformations, TextTimer, TextValue, NameProduct, DivTimer, TimerIcon } from "./style";

interface ShopComponentProps {
    Name: string;
    Time: string;
    Value: number;
    Amount: number;
    Image: string;
}

export default function ShopComponent( { Name, Time, Value, Amount, Image }: ShopComponentProps ) {
    return (
        <DivTotalProduct>
            <ImageProduct src={Image} />
            <DivInformations>
                <NameProduct>
                    {Name}
                </NameProduct>
                <DivTimer>
                    <TimerIcon src={require("../../common/images/timer.png")} />
                    <TextTimer>
                        {Time}
                    </TextTimer>
                </DivTimer>
                <TextValue>
                    R${Value},00
                </TextValue>                
            </DivInformations>
            <DivAmountProduct>
                <IconAmountProduct src={require("../../common/images/minus.png")} />
                <TextAmountProduct>{Amount}</TextAmountProduct>
                <IconAmountProduct src={require("../../common/images/plus.png")} />
            </DivAmountProduct>
        </DivTotalProduct>
    )
}
