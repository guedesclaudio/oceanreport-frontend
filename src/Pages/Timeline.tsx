import TopBar from '../Components/TopBar';
import Panel from '../Components/Panel';
import Footer from '../Components/Footer';

const Timeline: React.FC = () => {
  return (
    <>
      <TopBar/>
      <>
        <Panel children={'Acompanhe os reports de outros usuários'}/>
        
        <Footer/>
      </>
    </>
  );
};
export default Timeline;
