import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect } from 'react';
import { useLocation, BrowserRouter as Router, Routes, Route, Outlet, NavLink } from "react-router-dom";
import Loader from './loader.js';
import './assets/css/faith.css';
import Home from './pages/home.js';
import Services from './pages/services.js';
import ServiceIndex from './pages/servicesIndex.js';
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


        <div className="actual">


          <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/home" element={<Home />} ></Route>
            <Route path="/services" element={<Services />} >
              <Route index element={<ServiceIndex />} />
              
            </Route>
          </Routes>
                            
          {/*close actual app screen*/}
        </div>


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