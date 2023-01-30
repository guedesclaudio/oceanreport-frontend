import './App.css';
import GlobalStyle from './Styles/globalStyle';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import Report from './Pages/Report';
import Timeline from './Pages/Timeline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/signup" element = {<SignUp/>}/>
          <Route path = "/signin" element = {<SignIn/>}/>
          <Route path = "/report" element = {<Report/>}/>
          <Route path = "/timeline" element = {<Timeline/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
