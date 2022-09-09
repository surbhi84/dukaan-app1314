import "./App.css";
import { AboutContent } from "./components/AboutContent";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { Products } from "./components/Products";

function App() {
  return (
    <div className="App ">
      <Header />
      <div className=" flex flex-col absolute top-32 ">
        <MainContent />
        <AboutContent />
        <Products />
        <Footer />
      </div>
    </div>
  );
}

export default App;
