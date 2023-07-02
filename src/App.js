import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Images from "./index";

function App() {
  return (
    <>
      
      <Navbar />
      <div className="container">
      <Textform heading="Text converter from uppercase to lowercase and viceversa"/>
      </div>
     
    </>
  );
}

export default App;
