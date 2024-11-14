import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect } from 'react';
import { useLocation, BrowserRouter as Router, Routes, Route, Outlet, NavLink } from "react-router-dom";
import Loader from './loader.js';
import MainMenu from './mainMenu.js';
import './assets/css/faith.css';
import Home from './pages/home.js';
import Services from './pages/services.js';
import Exp from './pages/experience.js';
import Survey from './pages/survey.js';
import Footer from './footer.js';

function Content() {
  
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

  return (
  <>
    <Router>  
      <ScrollToTop />
      <div className="appScreen">

        <MainMenu />
        
        <div className="actual">


          <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/home" element={<Home />} ></Route>
            <Route path="/work-experience" element={<Exp />} />
            <Route path="/services" >
              <Route index element={<Services />} />
              <Route path="/services/survey-administration-and-analysis" element={<Survey />} />
              
            </Route>
          </Routes>
                            
          {/*close actual app screen*/}
        </div>

        <Footer />

      </div>
    </Router>
  </>
  );
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecontent: <Loader/>};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecontent: <Content/>})
    }, 0)
  }
  
  render() {
    return (
      <Content />
    );
  }
}

const preloader = ReactDOM.createRoot(document.getElementById('Faith'));
preloader.render(<App/>);