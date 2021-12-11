import { CTA, Header, Navbar } from "./components";
import {
  Blog,
  Brand,
  Features,
  Footer,
  Possibility,
  WhatGPT3,
} from "./containers";

const App = () => {
  return (
    <>
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </>
  );
};

export default App;
