import './App.module.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import About from "./About/About";
import style from './App.module.css'

function App() {
  return (
    <div className={style.App}>
      <Header/>
      <Main/>
      <About/>
    </div>
  );
}

export default App;
