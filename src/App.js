import logo from './logo.svg';
import './App.css';
import AppClassComponent from './AppClassComponent';
import HeaderSection from './HeaderSection/HeaderSection';
import AboutSection from './AboutSection/AboutSection';
import PortfolioSection from './PortfolioSection/PortfolioSection';
import SkillsSection from './SkillsSection/SkillsSection';
import FooterSection from './FooterSection/FooterSection';


function App() {
  return (
    <div className="App">
      <HeaderSection/>
      <AboutSection/>
      <SkillsSection/>
      <PortfolioSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
