import BodyColor from '../Styles/BodyColor';
import { Title, SubTitle, Container, Inputs, Input, Button, Text } from '../Styles/Common/styles';
import { loginInputs } from '../Helpers/userInputs';
import { Link } from 'react-router-dom';

const SignIn: React.FC = () => {
  return (
    <>
      <BodyColor/>
      <Title>Ocean Report</Title>
      <SubTitle>Faça Login para conseguir compartilhar reports</SubTitle>
      <Container>
        <form>
          <Inputs>
            {loginInputs.map((value, index) => <Input key = {index} name = {value.name} type = {value.type} placeholder = {value.placeholder}/>)}
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
