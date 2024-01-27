import React, { useEffect, useState } from 'react';
import Axios from "axios";
import "../CSS_Styles/Shared_Trips.css";

function Shared_Trips() {
  //varivel de estato que armazena o conteúdo do excel com os posts
  //useState é um hook e posts é a variável de estado atual, sendo que set_post é a função que a atualiza
  const [posts, set_post] = useState("");

  //transforma o conteúdo do excel num objeto e carrega para o site
  useEffect(() =>{
    Axios.get('https://sheetdb.io/api/v1/o58rpvlta1pua').then((response) => {
      set_post(response.data); //o estado "posts" é atualizado com os dados da resposta da solicitação HTTP
    });
  },[]);
  //este useEffect só vai ser executado uma vez, pois
  //está inserido no "final" um array vazio
  
  return (
    //dar display do conteúdo do excel no ecrã
    <div className='SharedTrips'>
      <h1 className=''></h1>
      {posts.length > 0 ? posts.map((post, index) => (
        <div key={index}>
          <p>Publicação de {post.Nome}</p>
          <img className='FotoDestino' src={post.Imagem} />
          <p className="descricao">Descrição:</p>
          <p>{post.Descricao}</p>
        </div>
      )) : <p>Loading...</p>}
    </div>
  );
}

//<div key={index}>
//Esta linha começa a definição de um elemento div para cada post. 
//A propriedade key é usada para dar a cada div uma chave única. 
//É necessária ao criar listas de elementos em React.
// posts.map((post, index) , post vai ser o conteúdo da linha do excel
// por isso é que fazemos post.Nome e etc
// <p>Loading...</p> é para caso não haja conteúdo (ou ainda esteja a ser carregado) ou aconteça alguma
// coisa vá impedir o display do conteúdo, caso isto aconteça, é mostrado "Loading..."

export default Shared_Trips;