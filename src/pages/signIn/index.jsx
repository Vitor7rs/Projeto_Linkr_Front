import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/logo";
import UserContext from "../../contexts/context";
import { signIn } from "../../services/api";
import { Container, BannerContainer, AuthContainer, FormContainer, InputBox, ButtonBox, InfoLink } from "./style";

export default function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [button, setButton] = useState(true);
    const { setUser } = useContext(UserContext);

    const navigate = useNavigate();

    async function processSignIn() {
        if (button === false) {
            return;
        }

        setButton(false);

        if(email.length === 0 || password.length === 0) {
            alert("Please, complete all fields")
            return;
        }

        const userObject = {
            email: email,
            password: password
        }

        try {
            const sucess = await signIn(userObject);
            if(sucess.status === 200) {
                alert(sucess.data);
                localStorage.setItem('user', JSON.stringify(userData));
                navigate("timeline");
                setButton(true);
                return;
            }
        }
        catch(error) {
            if(error.response.status === 500) {
                alert(error.response.data);
                setButton(true);
                return;
            }
        }
    }
    return(
        <Container>
         <BannerContainer>
            <Logo fontSize={'107px'} />
         </BannerContainer>
         <AuthContainer>
            <FormContainer onSubmit={(e) => { e.preventDefault() }}>
               <InputBox onChange={e => setEmail(e.target.value)} name="e-mail" type="email" placeholder="e-mail" />
               <InputBox onChange={e => setPassword(e.target.value)} name="password" type="password" placeholder="password" />
               <ButtonBox status={button} onClick={processSignIn} name="sub button" type="submit">
                  {button === true ? "Log In" : "Logning In"}
               </ButtonBox>
            </FormContainer>
            <InfoLink onClick={() => navigate("/timeline")}>Switch to timeline</InfoLink>
         </AuthContainer>
      </Container>
    )
}