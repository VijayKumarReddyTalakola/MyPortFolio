import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ScrollToTopButton from './components/ScrollToTop';
import Skills from './components/Skills';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Home/>      
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
