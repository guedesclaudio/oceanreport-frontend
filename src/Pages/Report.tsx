import TopBar from '../Components/TopBar';
import styled from 'styled-components';
import Panel from '../Components/Panel';
import { MdWaves } from 'react-icons/md';
import { TbWind } from 'react-icons/tb';
import { FaTemperatureHigh } from 'react-icons/fa'; 
import { TfiRuler } from 'react-icons/tfi'; 
import { TiWeatherCloudy } from 'react-icons/ti';
import { useEffect, useState } from 'react';
import reportApi from '../Services/Api/Report';
import Footer from '../Components/Footer';
import { ReportObject } from '../Types/types';

const Report: React.FC = () => {
  const [report, setReport] = useState<ReportObject>();

  async function refreshReport() {
    try {
      const reponse = await reportApi.get();
      console.log(reponse.data.report);
      setReport(reponse.data.report);
    } catch (error: any) {
      console.error(error);
    }
  }
  useEffect(() => {
    refreshReport();
  }, []);

  return (
    <>
      <TopBar/>
      <>
        <Panel children={'Novos reports a cada 1 hora'}/>
        <Container>
          <Title>Condições oceânicas <MdWaves/></Title>
          <Text>
            {report?.waveCondition} <TfiRuler/>
          </Text>
          <Text>
            {report?.temperatureCondition} <FaTemperatureHigh/>
          </Text>
          <Title>Condições meteorológicas <TiWeatherCloudy/></Title> 
          <Text>
            {report?.windSpeedCondition} <TbWind />
          </Text>
          <Title>Data: {report?.date}</Title> 
          <Title>Hora: {report?.hour}</Title>
          <Warning>
            <Text style = {{ color: 'grey' }}>Local dos dados: Praia de Copacabana</Text>
            <Text style = {{ color: 'grey' }}>Esse report serve para as seguintes praias: São Conrado, Leblon, Ipanema, Copacabana, Leme, Piratininga, Camboinhas</Text>
            <Text style = {{ color: 'grey' }}>Cada praia pode possui características diferentes, o que dificulta o nível de acertividade. 
            Quando mais longe do ponto de origem dos dados (Copacabana), maior o risco do report não ser acertivo</Text> 
          </Warning>
        </Container>
      </>
      <Footer/>
    </>
  );
};
export default Report;

const Container = styled.div`
    width: 600px;
    height: 100%;
    margin: -200px auto;
    border: 2px solid white;
    border-radius: 5px;
    background-color: #1d1c1c;
    padding: 20px;
    box-sizing: border-box;

    @media (max-width: 680px) {
        width: 96%;
        height: 100%;
        margin-bottom: 80px;
    }
`;
const Title = styled.p`
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    margin-top: 20px;
`;
const Text = styled.p`
    color: white;
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: Arial, Helvetica, sans-serif;
`;
const Warning = styled.div`
  margin-top: 40px;
`;
