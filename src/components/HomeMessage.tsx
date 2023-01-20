import styled from "styled-components";
import { Title } from "./Panel";

const HomeMessage: React.FC = () => {
    return (
        <Container>
            <Title style={{color: "grey", paddingTop: 0, fontSize: "28px"}}>
                Cadastre-se e receba os reports por email diariamente
            </Title>
        </Container>
    )
}
export default HomeMessage;

const Container = styled.div`
    width: 1000px;
    margin: 220px auto;
`;
