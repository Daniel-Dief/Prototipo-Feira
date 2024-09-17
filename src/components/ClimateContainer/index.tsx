import { WhiteSmallText, WhiteSpanText } from "../../common/styles/Text"

export default function ClimateContainer() {
    return (
        <div
            style={{
                background: "linear-gradient(90deg, #70B9FC 0%, #2D76DE 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px",
                borderRadius: "24px",
                width: "90%",
            }}
        >
            <div>
                <WhiteSpanText>Gramado</WhiteSpanText>
                <WhiteSmallText>Ensolarado</WhiteSmallText>
                <WhiteSpanText>20°</WhiteSpanText>
            </div>
            <img src={require('../../common/images/sun.png')}
                style={{
                    borderRadius: "50%",
                    boxShadow: "0 0 20px #FF0"
                }}
            />
        </div>
    )
}