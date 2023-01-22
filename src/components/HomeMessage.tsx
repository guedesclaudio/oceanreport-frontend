import styled from 'styled-components';
import { Title } from './Panel';
import { IoChevronForwardCircle } from 'react-icons/io5';

const HomeMessage: React.FC = () => {
  return (
    <Container>
      <Title style={{ color: 'grey', paddingTop: 0 }}>
                Cadastre-se e receba os reports por email diariamente
      </Title>
      <Icon>
        <IoChevronForwardCircle/>
      </Icon>
    </Container>
  );
};
export default HomeMessage;

const Container = styled.div`
    width: 100%;
    margin: 220px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Icon = styled.div`
    font-size: 30px;
    color: grey;
    margin-top: 20px;
    cursor: pointer;
    transition: 1s;

    &&:hover {
        transform: scale(1.3);
        opacity: 0.6;
    }
`;
