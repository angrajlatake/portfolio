
import './App.scss';
import Hero from './Components/Hero/Hero';
import Stack from './Components/Stack/Stack';
import  Loader from './Components/Loader/Loader';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">

      <Hero/>
      <Stack/>
      <Projects/>
    </div>
  );
}

export default App;
