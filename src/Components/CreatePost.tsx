import styled from 'styled-components';

const CreatePost: React.FC = () => {
  return (
    <Container>
      <form>
        <TitleInput placeholder = 'local...'/>
        <ContentInput placeholder = 'depoimento...'/>
        <Button>Publicar</Button>
      </form>
        
    </Container>
  );
};
export default CreatePost;

const Container = styled.div`
  width: 500px;
  height: 260px;
  border: 2px solid white;
  margin: -160px auto;
  background-color: #383636;
  border-radius: 10px;
  
  && form {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const TitleInput = styled.input`
  width: 90%;
  height: 40px;
  border: none;
  margin-bottom: 10px;
  padding-left: 10px;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
  font-size: 14px;
`;
const ContentInput = styled.textarea`
  width: 90%;
  height: 70px;
  resize: none;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 5px;
  padding-top: 10px;
  padding-left: 10px;
  outline: none;
  font-size: 14px;
`;
const Button = styled.button`
    margin-top: 80px;
    width: 200px;
    height: 30px;
    background-color: #008CBA;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    transition: 1.4s;

    &&:hover{
        opacity: 0.9;
        transform: scale(0.9);
    }
`;
