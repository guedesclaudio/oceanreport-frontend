import styled from "styled-components";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer: React.FC = () => {
    return (
        <Container>
            <Content>
                <Text>
                    Desenvolvido por Claudio Guedes
                </Text>
                <Icons>
                    <AiFillGithub />
                    <AiFillLinkedin />
                </Icons>
            </Content>
        </Container>
    )
}
export default Footer;

const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Text = styled.h1`
    color: white;
    display: flex;
    font-family: 'Inter', sans-serif;
`;
const Icons = styled.div`
    color: white;
    font-size: 22px;
    padding-left: 10px;
    cursor: pointer;

    &&:hover {
        transform: scale(1.1);
    }
`
const Content = styled.div`
    width: 320px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`