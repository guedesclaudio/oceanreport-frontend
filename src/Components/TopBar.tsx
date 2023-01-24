import styled from 'styled-components';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const TopBar: React.FC = () => {
  return (
    <Container>
      <Logo/>
      <Links>
        <Link to = {'/signin'}>
          <p>Login</p>
        </Link>
        <Link to = {'/report'}>
          <p>Report</p>
        </Link>
        <Link to = {'/timeline'}>
          <p>Timeline</p>
        </Link>
        <Link to = {'/about'}>
          <p>Sobre</p>
        </Link>
        <a href = "https://www.windy.com/-22.973/-43.149/waves?swell1,-22.980,-43.147,15" target = "_blank" rel="noreferrer">
          <p>Previsão</p>
        </a>
      </Links>
    </Container>
  );
};
export default TopBar;

const Container = styled.div`
    width: 100%;
    height: 60px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
`;
const Links = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;

    && p {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        color: white;
        padding: 14px;
        cursor: pointer;
    }

    && p:hover {
        color: grey;
    }
`;
