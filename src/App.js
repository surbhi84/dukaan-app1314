import "./App.css";
import { AboutContent } from "./components/AboutContent";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { Products } from "./components/Products";

function App() {
  return (
    <div className="App flex flex-col min-h-screen ">
      <Header />
      <div className="relative pb-20">{/* <MainContent /> */}</div>
      <AboutContent />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
