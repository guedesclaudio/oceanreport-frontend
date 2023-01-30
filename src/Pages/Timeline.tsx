import TopBar from '../Components/TopBar';
import Panel from '../Components/Panel';
import Footer from '../Components/Footer';
import CreatePost from '../Components/CreatePost';
import Post from '../Components/Post';
import styled from 'styled-components';

const Timeline: React.FC = () => {
  return (
    <>
      <TopBar/>
      <>
        <Panel children={'Acompanhe os reports de outros usuários'}/>
        <CreatePost/>
        <PostsList>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </PostsList>
        <Footer/>
      </>
    </>
  );
};
export default Timeline;

const PostsList = styled.div`
    width: 500px;
    margin: 180px auto;

    @media (max-width: 500px) {
        width: 96%;
    }
`;
