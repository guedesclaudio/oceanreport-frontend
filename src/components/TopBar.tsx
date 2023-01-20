import styled from "styled-components";
import Logo from "./Logo";

const TopBar: React.FC = () => {
    return (
        <Container>
            <Logo/>
            <Links>
                <p>Login</p>
                <p>Report</p>
                <p>Timeline</p>
                <p>Sobre</p>
                <p>Previsão</p>
            </Links>
        </Container>
    )
}
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