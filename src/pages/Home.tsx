import TopBar from "../components/TopBar";
import Panel from "../components/Panel";
import PanelBoxes from "../components/PanelBoxes";
import HomeMessage from "../components/HomeMessage";
import Footer from "../components/Footer";

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
    )
}
export default Home;
