import styled from "styled-components"

const Container = styled.main`
    display: flex;
    height: 100vh;

    @media (max-width: 700px){
        flex-direction: column;
    }
`

const BannerContainer = styled.div`
    width: 65%;
    height: 100%;
    padding-left: 70px;
    padding-right: 370px;
    background: #151515;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 700px){
        width: 100%;
        height: 175px;
        align-items: center;
        justify-content: flex-start;
        padding: 0;
       
    }
`

const AuthContainer = styled.div`
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 13px;

    background:#333333;
`

const FormContainer = styled.form`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 13px;
`

const InputBox = styled.input`
    width: 429px;
    height: 65px;
    padding: 15px;
    
    font-family: 'Oswald', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    color: #272525;
    
    background: #FFFFFF;
    border-radius: 7px;
    border: none;

    ::placeholder{
        font-family: 'Oswald', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 27px;
        color: #9F9F9F;
    }
`

const ButtonBox = styled.button`
    width: 429px;
    height: 65px;
    font-family: 'Oswald', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    color: #FFFFFF;

    background:${props => props.status === true ? "#1877F2" : "gray"};
    border-radius: 7px;
    border: none;
`

const InfoLink = styled.h3`
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #FFFFFF;
`

export { Container, BannerContainer, AuthContainer, InputBox, FormContainer, ButtonBox, InfoLink };