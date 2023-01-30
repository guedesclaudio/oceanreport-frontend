import styled from 'styled-components';

const Post: React.FC = () => {
  return (
    <Container>
      <PostData>
        <Name>Claudio Guedes</Name>
        <Date>30/01/2023 - 18:45</Date>
      </PostData>
      <Informations>
        <Local>Praia de Piratininga</Local>
        <Content>Hoje a praia estava com uma ressaca muito forte!! Tomem muito cuidado quando forem a praiaaaaaa aaaaaaa aaaaaaaa asd ad ad aw awd wddawdada dwadawd dawdada dawd daw d dwadawdadw dawda</Content>
      </Informations>
    </Container>
  );
};
export default Post;

const Container = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 0 10px 10px 10px;
    background-color: white;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 16px;
    box-shadow: 1px 1px 10px 0px grey;
`;
const PostData = styled.h1`
    color: white;
    background-color: #008CBA;
    width: 100%;
    height: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0px 10px 0px 0px;
    padding-left: 6px;
    padding-right: 6px;
    box-sizing: border-box;
`;
const Name = styled.p`
    font-weight: bold;
`;
const Date = styled.p`
    font-style: italic;
    opacity: 0.6;
`;
const Informations = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Local = styled.div`
    width: 100%;
    color: grey;
    margin-top: 10px;
    margin-bottom: 5px;
    padding-left: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: left;
    align-items: center;
    font-weight: bold;
`;
const Content = styled(Local)`
    margin: 0;
    margin-bottom: 5px;
    font-weight: normal;
`;
