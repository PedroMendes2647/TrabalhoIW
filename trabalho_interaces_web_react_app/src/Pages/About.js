import React from 'react'
import "../CSS_Styles/About.css";
function About() {
  return (
      <div className="about">
        <div
            className="aboutTop"
            style={{backgroundImage:imagemaqui}}
        >
        </div>
        <div className="aboutBottom">
          <div class="container">
            <div class="half">
              <img src="imgs/screenshot34.png" alt="Imagem 1">
              <p>Esta é a primeira frase do lado esquerdo.</p>
              <p>Esta é a segunda frase do lado esquerdo.</p>
            </div>
            <div class="half">
              <img src="imgs/screenshot35.png" alt="Imagem 2">
              <p>Esta é a primeira frase do lado direito.</p>
              <p>Esta é a segunda frase do lado direito.</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About