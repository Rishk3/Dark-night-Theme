import Component1 from './components/body/Component1';
import { useEffect,useState } from "react";
import Header from './components/header/Header';
import './index.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import LandingPage from './components/LandingPage/LandingPage';
function App() {
  useEffect(() => {
    console.log("sh");
    AOS.init({
      duration:2000
    });
  }, []);
  const [darkMode, setDarkMode] = useState(getInitialMode());
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();
    // if mode was saved --> dark / light
    if (isReturningUser) {
      return savedMode;
      // if preferred color scheme is dark --> dark
    } else if (userPrefersDark) {
      return true;
      // otherwise --> light
    } else {
      return false;
    }
    // return savedMode || false;
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
     
        <LandingPage/>
    
    </div>
  );
}

export default App;
