import { Navbar, Article, Brands, CTA, Feature } from "./components";
import {
  Header,
  Blog,
  Features,
  Footer,
  Possibility,
  WhatGPT3,
} from "./containers";

function App() {
  return (
    <div className=" h-screen">
      <div className="bg-gradientNavBar">
        <Navbar />
        <Header />
      </div>
      <div className="bg-colorBg">
        <Brands />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;
