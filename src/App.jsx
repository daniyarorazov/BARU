import './App.scss';
import Navbar from './components/Navbar/Navbar';
import SliderComponent from "./components/Slider/SliderComponent";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <SliderComponent />
      </main>
    </>
  );
}

export default App;
