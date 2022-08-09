import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Logo from "../../components/logo";
import { signUp } from "../../services/api";
import { Container, BannerContainer, AuthContainer, FormContainer, InputBox, ButtonBox, InfoLink } from "./style";

export default function SignUp() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirm] = useState("");
   const [username, setUsername] = useState("");
   const [pictureUrl, setPicture] = useState("");
   const [button, setButton] = useState(true);

   const navigate = useNavigate();

   async function processSignUp() {
      if (button === false) {
         return;
      }

      setButton(false);
      
      if (email.length === 0 || password.length === 0 || confirmPassword.length === 0 ||
         username.length === 0 || pictureUrl.length === 0) {
         alert("Please, complete all fields!")
         return;
      }
      if (password !== confirmPassword) {
         alert("passwords must be the same!")
         return;
      }
      const userObject = {
         email: email,
         password: password,
         confirmPassword: confirmPassword,
         username: username,
         pictureUrl: pictureUrl
      }

      try{
         const sucess = await signUp(userObject);
         if (sucess.status === 201) {
            alert(sucess.data)
            navigate("/");
            setButton(true);
            return;
         }

      }catch(error){
         if (error.response.status === 409) {
            alert(error.response.data);
            setButton(true)
            return;
          }
      }
   }

   return (
      <Container>
         <BannerContainer>
            <Logo fontSize={'107px'} />
         </BannerContainer>
         <AuthContainer>
            <FormContainer onSubmit={(e) => { e.preventDefault() }}>
               <InputBox onChange={e => setEmail(e.target.value)} name="e-mail" type="email" placeholder="e-mail" />
               <InputBox onChange={e => setPassword(e.target.value)} name="password" type="password" placeholder="password" />
               <InputBox onChange={e => setConfirm(e.target.value)} name="confirm password" type="password" placeholder="confirm password" />
               <InputBox onChange={e => setUsername(e.target.value)} name="username" type="text" placeholder="username" />
               <InputBox onChange={e => setPicture(e.target.value)} name="picture" type="url" placeholder="picture url" />
               <ButtonBox status={button} onClick={processSignUp} name="sub button" type="submit">
                  {button === true ? "Sign Up" : "Signing Up"}
               </ButtonBox>
            </FormContainer>
            <InfoLink onClick={() => navigate("/")}>Switch back to log in</InfoLink>
         </AuthContainer>
      </Container>
   )
}