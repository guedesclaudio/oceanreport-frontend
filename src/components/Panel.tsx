import styled from "styled-components";

const Panel: React.FC = () => {
    return (
        <Container>
            <Title>
                Condições do mar em tempo real, notificações e reports
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
export const Title = styled.h1`
    font-size: 34px;
    color: white;
    font-family: 'Inter', sans-serif;
    text-align: center;
    font-weight: 700;
    padding-top: 100px;

    @media (max-width: 1200px) {
        font-size: 28px;
    }
    @media (max-width: 500px) {
        font-size: 20px;
    }
`;
