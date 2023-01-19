import styled from "styled-components";
import TopBar from "../components/TopBar";
import Panel from "../components/Panel";

const Home: React.FC = () => {
    return (
        <>
            <TopBar/>
            <Container>
                <Panel/>
            </Container>
        </>
    )
}
export default Home;

const Container = styled.div`
    
`;
