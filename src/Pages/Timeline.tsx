import TopBar from '../Components/TopBar';
import Panel from '../Components/Panel';
import Footer from '../Components/Footer';
import CreatePost from '../Components/CreatePost';
import PostsList from '../Components/PostsList';
import { useState } from 'react';

const Timeline: React.FC = () => {
  const [posts, setPosts] = useState();

  return (
    <>
      <TopBar/>
      <>
        <Panel children={'Acompanhe os reports de outros usuários'}/>
        <CreatePost/>
        <PostsList/>
        <Footer/>
      </>
    </>
  );
};
export default Timeline;
