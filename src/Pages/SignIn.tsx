import BodyColor from '../Styles/BodyColor';
import { Title, SubTitle, Container, Inputs, Input, Button, Text } from '../Styles/Common/styles';
import { loginInputs } from '../Helpers/userInputs';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { LoginUser } from '../Types/types';
import { UserContext } from '../Contexts/UserContext';
import api from '../Services/Api/Users';
import { treatEvent, handleForm } from '../Helpers/Form/form';
import { signInMessageError } from '../Errors/SignIn';

const SignIn: React.FC = () => {
  const [form, setForm] = useState<LoginUser>({ email: '', password: '' });
  const navigate = useNavigate();
  const { userData, setUserData, config, setConfig } = useContext(UserContext);

  async function signInUser() {
    try {
      const response = await api.loginUser(form);
      const { token } = response.data;

      localStorage.setItem('user', JSON.stringify({ token }));
      setUserData({ ...userData, token });
      setConfig({ ...config, 
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      navigate('/');
    } catch (error: any) {
      const status = error.response.status;
      alert(signInMessageError[status]);
    }
  }
  const def = signInUser;

  return (
    <>
      <BodyColor/>
      <Title>Ocean Report</Title>
      <SubTitle>Faça Login para conseguir compartilhar reports</SubTitle>
      <Container>
        <form onSubmit={() => treatEvent(def)}>
          <Inputs>
            {loginInputs.map((value, index) => <Input key = {index} name = {value.name} type = {value.type} placeholder = {value.placeholder}
              onChange = {event =>  handleForm({ name: event.target.name, value: event.target.value }, form, setForm)}/>)}
            <Button>login</Button>
          </Inputs>
        </form>
        <Link to = {'/signup'}>
          <Text>Não possui conta? Faça cadastro!</Text>
        </Link>
      </Container>
    </>
  );
};
export default SignIn;
