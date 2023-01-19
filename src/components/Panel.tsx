import styled from "styled-components";

const Panel: React.FC = () => {
    return (
        <Container>
            <Title>
                Acompanhe as condições do mar em tempo real, receba notificações e compartilhe reports
            </Title>
        </Container>
    )
}
export default Panel;

const Container = styled.div`
    width: 100%;
    height: 400px;
    background-color: #1d1c1c;
    margin-top: 60px;
`;
const Title = styled.h1`
    font-size: 30px;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    font-weight: bold;
    padding-top: 100px;
`;
