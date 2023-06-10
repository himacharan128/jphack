import React from "react";
import hero from "./../images/hero.jpg";
import About from "./About";
export default function HomePage() {
  return (
    <div class="width: 100%">
      <div class="text-center mt-4">
        <h1>CHANGE WITHIN TO CHANGE THE WORLD</h1>
        <img src={hero} class="img-fluid"></img>
      </div>
      {/* About */}
      <About />
    </div>
  );
}
