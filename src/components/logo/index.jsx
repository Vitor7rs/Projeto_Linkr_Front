import styled from "styled-components"

export default function Logo({ fontSize }) {
    //logo paginal inicial
    return (
        <>
            <LogoStyle fontSize={fontSize}>linkr</LogoStyle>
        </>
    )
}

export const LogoStyle = styled.h1`
        color: #FFFFFF;
        font-family: 'Passion One', cursive;
        font-style: normal;
        font-weight: 700;
        font-size: ${props => props.fontSize ? props.fontSize : "107px"}
`