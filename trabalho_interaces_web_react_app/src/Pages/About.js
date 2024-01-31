import React from 'react'
import "../CSS_Styles/About.css";
import Miguel from "../Content/709b5e08-7099-47de-958d-aa97f2db2c0c.jpg";
import Pedro from "../Content/Screenshot_34.png";


function About() {
  return (
      <div className="about">
          <div class="container">
            <div class="half">
              <img src={Miguel} alt="Imagem 1"/>
              <p>Miguel Marcão Brazão.</p>
              <p>Email:alunoxxxxx@ipt.pt</p>
            </div>
            <div class="half">
              <img src={Pedro} alt="Imagem 2"/>
              <p>Pedro Oliveira Mendes</p>
              <p>Email:aluno24843@ipt.pt</p>
            </div>
          </div>
        </div>
  )
}

export default About