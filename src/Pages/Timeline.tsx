import TopBar from '../Components/TopBar';
import Panel from '../Components/Panel';
import Footer from '../Components/Footer';
import CreatePost from '../Components/CreatePost';

const Timeline: React.FC = () => {
  return (
    <>
      <TopBar/>
      <>
        <Panel children={'Acompanhe os reports de outros usuários'}/>
        <CreatePost/>
        <Footer/>
      </>
    </>
  );
};
export default Timeline;
