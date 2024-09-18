import { Icon } from '../../common/styles/Imgs';
import { SmallText } from '../../common/styles/Text';

import { Container } from './style';

interface ShortInfoProps {
    icon?: string;
    text: string;
    color?: string;
}

export default function ShortInfo({ icon, text, color }: ShortInfoProps) {
    return (
        <Container>
            {
                icon
                ?
                <Icon src={icon} />
                :
                <></>
            }
            <SmallText
                color={color ?? "#C2AE8F"}
            >
                {text}
            </SmallText>
        </Container>
    )
}