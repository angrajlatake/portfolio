
import './App.scss';
import Hero from './Components/Hero/Hero';
import Stack from './Components/Stack/Stack';
import  Loader from './Components/Loader/Loader';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Stack/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
