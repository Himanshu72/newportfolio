import React from "react";

import "./App.css";
import Index from "./pages/Index";
import About from "./pages/About";
import Work from "./pages/Work";
import Footer from "./componets/Footer";
function App() {
  return (
    <div className="text-center"  >
       <About />
          <svg height="90%" style={{marginTop:"-10px",transform:"scalex(-1)"}} width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#141e30ff"></stop><stop offset="95%" stop-color="#243b55ff"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 184.8,185.46666666666667 369.6,170.93333333333334 541,187 C 712.4,203.06666666666666 870.4000000000001,249.73333333333335 1018,257 C 1165.6,264.26666666666665 1302.8,232.13333333333333 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150"   transform="rotate(-180 720 200)"></path></svg>

      <Index />
          <svg height="90%" style={{ marginBottom:"-50px", transform:"scale(-1,-1)"}} width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#141e30ff"></stop><stop offset="95%" stop-color="#243b55ff"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 184.8,185.46666666666667 369.6,170.93333333333334 541,187 C 712.4,203.06666666666666 870.4000000000001,249.73333333333335 1018,257 C 1165.6,264.26666666666665 1302.8,232.13333333333333 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150"   transform="rotate(-180 720 200)"></path></svg>
     <Work />
    <Footer/>
    </div>
  );
}

export default App;
