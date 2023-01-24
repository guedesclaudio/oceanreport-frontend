import TopBar from '../Components/TopBar';
import Panel from '../Components/Panel';
import PanelBoxes from '../Components/PanelBoxes';
import HomeMessage from '../Components/HomeMessage';
import Footer from '../Components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <TopBar/>
      <>
        <Panel/>
        <PanelBoxes/>
        <HomeMessage/>
        <Footer/>
      </>
    </>
  );
};
export default Home;
