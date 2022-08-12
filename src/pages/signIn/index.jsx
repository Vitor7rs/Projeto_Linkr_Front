import { useContext, useState } from "react";
import Logo from "../../components/Logo";
import BannerDesc from "../../components/BannerDesc"
import { useNavigate } from "react-router-dom";
import { Container, BannerContainer, AuthContainer, FormContainer, InputBox, ButtonBox, InfoLink } from "./style";
import UserContext from "../../contexts/userContext";
import { login } from "../../services/authService";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { user, setUser } = useContext(UserContext);
    const [button, setButton] = useState(true);

    const navigate = useNavigate();

    async function processSign(){
        if(button === false){
            return;
        }
        setButton(false);
        if(email.length === 0 || password.length === 0) {
            alert("Please, complete all fields!")
            setButton(true)
            return;
        }
        const loginObject = {
            email: email,
            password: password
        }
        try{
            const sucess = await login(loginObject);
            if (sucess) {
                navigate("/timeline");
                setUser(sucess.data);
                localStorage.setItem("user", JSON.stringify(sucess.data));
                setButton(true)
            }
            return;
        }catch(error){
            alert("Invalid email or password!")
            setButton(true)
            return;
        }
    };

    return(
        <Container>
            <BannerContainer>
                <Logo fontSize={'107px'} />
                <BannerDesc message={"save, share and discover the best links on the web"} />
            </BannerContainer>
            <AuthContainer>
                <FormContainer onSubmit={e => { e.preventDefault() }}>
                    <InputBox onChange={e => setEmail(e.target.value)} name="e-mail" type="email" placeholder="e-mail" />
                    <InputBox onChange={e => setPassword(e.target.value)} name="password" type="password" placeholder="password" />
                    <ButtonBox status={button} onClick={processSign} name="sub button" type="submit">
                        {button === true ? "Log In" : "Logging in"}
                    </ButtonBox>
                </FormContainer>
                <InfoLink onClick={() => navigate("/sign-up")}>First time? Create an account!</InfoLink>
            </AuthContainer>
        </Container>
    )
}