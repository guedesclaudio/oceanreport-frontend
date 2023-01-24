import { userInputs } from '../Helpers/userInputs';
import BodyColor from '../Styles/BodyColor';
import { Title, SubTitle, Container, Inputs, Input, Button, Text } from '../Styles/Common/styles';
import { treatEvent, handleForm, initialObjectCreateUser, checkPasswords } from '../Helpers/Form/form';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../Services/Api/Users';
import { CreateUser } from '../Types/types';

const SignUp: React.FC = () => {
  const [form, setForm] = useState<CreateUser>(initialObjectCreateUser);
  const navigate = useNavigate();

  async function signUp() {
    const passwordsAreSame = checkPasswords(form.password, form.confirmPassword);
    if (!passwordsAreSame) return alert('Digite as senhas corretamentes');
    
    try {
      await api.postUser(form);
      navigate('/signin');
    } catch (error: any) {
      console.error(error);
      //const status = error.response.status;
      //setErrorMessage("Login ou senha inválidos!");
    }
  }
  const def = signUp;

  return (
    <>
      <BodyColor/>
      <Title>Ocean Report</Title>
      <SubTitle>cadastre-se e tenha acesso a todas as funções</SubTitle>
      <Container>
        <form onSubmit={() => treatEvent(def)}>
          <Inputs>
            {userInputs.map((value, index) => <Input key = {index} name = {value.name} type = {value.type} placeholder = {value.placeholder}
              onChange = {event =>  handleForm({ name: event.target.name, value: event.target.value }, form, setForm)}/>)}
            <Button type = 'submit'>cadastrar</Button>
          </Inputs>
        </form>
        <Link to = {'/signin'}>
          <Text>Já tem conta? Faça login!</Text>
        </Link>
      </Container>
    </>
  );
};
export default SignUp;

