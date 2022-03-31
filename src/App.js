import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';
import Experience from './components/Experience';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Particles className="particles-canvas"
    params={{
      particles:{
        number:{
          value:30,
          density:{
            enable:true,
            value_area:900
          }
        },
        shape:{
          type:"circle",
          stroke:{
            width:10,
            color:"#f9ab00"
          }
        }
      }
    }}
    />


    <Navbar/>
    <Header/>
    <About/>
    <Experience/>

    <Skills/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
