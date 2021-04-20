import './App.module.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import About from "./About/About";
import style from './App.module.css'
import Skills from "./Skills/Skills";
import Project from "./Project/Project";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className={style.App}>
      <Header/>
      <Main/>
      <About/>
      <Skills/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
