import "./App.css";
import Header from "./components/Header/Header";
import Intro from "./components/Intro";
import Url from "./components/Url/Url";
import Features from "./components/Features";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Url />
        <Features />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

export default App;
