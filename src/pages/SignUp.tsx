import styled from 'styled-components';
import { userInputs } from '../helpers/userInputs';
import BodyColor from '../styles/BodyColor';

const SignUp: React.FC = () => {
  return (
    <>
    <BodyColor/>
    <Title>Ocean Report</Title>
    <SubTitle>cadastre-se e tenha acesso a todas as funções</SubTitle>
    <Container>
        <form>
            <Inputs>
                {userInputs.map((value, index) => <Input key = {index} name = {value.name} type = {value.type} placeholder = {value.placeholder}/>)}
                <Button>enviar</Button>
            </Inputs>
        </form>
        <Text>Já tem conta? Faça login!</Text>
    </Container>
    </>
  );
};
export default SignUp;

const Container = styled.div`
    margin: 40px auto;
    width: 320px;
    height: 400px;
    background-color: #2c2e3d;
    padding: 10px;
    border-radius: 6px;
    
`;
const Inputs = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
const Input = styled.input`
    width: 300px;
    height: 40px;
    margin-top: 15px;
    background-color: #383a4b;
    border: none;
    opacity: 1.2;
    outline: none;
    border-bottom: 2px solid orangered;
    color: white;
    padding-left: 10px;
    animation-name: animation-line;
	animation-duration: 4s; 
	animation-delay: 2s;
	animation-iteration-count: 1000;
	animation-direction: alternate;
    box-sizing: border-box;
    border-image: linear-gradient(to right, darkblue, darkorchid) 1;

    @keyframes animation-line {
        from {
            border-image: linear-gradient(to right, darkblue, darkorchid) 1;
        }

        to {
            border-image: linear-gradient(to right, red, orange) 1;
        }
    }
`;

const Button = styled.button`
    width: 300px;
    height: 30px;
    background-color: none;
    margin-top: 50px;
    background-color: #c2c2c2;
    border: none;
    cursor: pointer;
    transition: 1.4s;

    &&:hover {
        opacity: 0.8;
        transform: scale(0.95);
    }
`;
const Title = styled.h1`
    font-size: 30px;
    color: white;
    text-align: center;
    font-family: 'Inter', sans-serif;
    margin-top: 100px;
`;
const SubTitle = styled(Title)`
    font-size: 20px;
    color: #b1b1b1;
    margin-top: 20px;
`
const Text = styled.p`
    font-size: 12px;
    color: white;
    text-align: center;
    font-family: 'Inter', sans-serif;
    margin-top: 16px;
    cursor: pointer;
`