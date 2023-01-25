import styled from 'styled-components';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { useState } from 'react';
import SideBar from './SideBar';
import { links } from '../Helpers/Menu/links';

const TopBar: React.FC = () => {
  const [displaySideBar, setDisplaySideBar] = useState('none');
  const [animationSideBar, setAnimationSideBar] = useState('none');
  const [icon, setIcon] = useState(<RxHamburgerMenu/>);

  function openSideBar() {
    if (displaySideBar === 'none') {
      setDisplaySideBar('flex');
      setAnimationSideBar('show 0.5s');
      setTimeout(() => setIcon(< IoCloseCircleOutline/>), 200);
      return;
    }
    setIcon(<RxHamburgerMenu/>);
    setAnimationSideBar('hidden 0.5s');
    setTimeout(() => setDisplaySideBar('none'), 500);
  }

  return (
    <>
      <Container>
        <Logo/>
        <Links>
          {links?.map((value, index) => <Link key = {index} to = {value.url}><p>{value.name}</p></Link>)}
          <a href = "https://www.windy.com/-22.973/-43.149/waves?swell1,-22.980,-43.147,15" target = "_blank" rel="noreferrer">
            <p>Previsão</p>
          </a>
        </Links>
        <Hamburguer onClick = {openSideBar}>
          {icon}
        </Hamburguer>
      </Container>
      <SideBar displaySideBar = {displaySideBar} setDisplaySideBar = {setDisplaySideBar} 
        setAnimationSideBar = {setAnimationSideBar} animationSideBar = {animationSideBar} setIcon = {setIcon}/>
    </>
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
    z-index: 2;
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

    @media (max-width: 700px) {
        display: none;
    }
`;

const Hamburguer = styled.div`
  display: none;
  font-size: 20px;

  @media (max-width: 700px) {
        display: initial;
        color: white;
    }
`;
