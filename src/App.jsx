import "./App.css";

import Intro from "./components/Intro";
import Url from "./components/Url/Url";
import Features from "./components/Features";
import Cta from "./components/Cta";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Intro />
      <Url />
      <Features />
      <Cta />
    </Layout>
  );
}

export default App;
