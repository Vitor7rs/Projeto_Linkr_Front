import styled from "styled-components"

export default function BannerDesc({ message }) {
    return (
        <>
            <BanncerDescBox>{message}</BanncerDescBox>
        </>
    )
}

const BanncerDescBox = styled.h3`
    font-family: 'Oswald', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    color: #FFFFFF;

    @media (max-width: 700px){
        font-style: normal;
        font-weight: 700;
        font-size: 23px;
        line-height: 34px;
        text-align: center;
        width: 249px;
    }
`