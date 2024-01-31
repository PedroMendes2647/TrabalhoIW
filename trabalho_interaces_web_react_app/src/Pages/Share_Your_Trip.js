import React, { useState } from 'react';
import "../CSS_Styles/Share_Your_Trip.css";

function Share_Your_Trip() {
    // variável de estado para guardar o novo nome do publicador
    const [newPostUser, setNewPostUser] = useState("");
    // variável de estado para guardar a nova foto da publicação
    const [newPostImage, setNewPostImage] = useState("");
    // variável de estado para guardar a nova descrição da publicação
    const [newPostDescription, setNewPostDescription] = useState("");

    //CREATE
    //adicionar um novo post à sheet (que contém todos os posts já existentes)  
    const addPost = () => {
        fetch('https://sheetdb.io/api/v1/sx7b7l1ren6nm?sheet=posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: [
                    {
                        Post_ID: "INCREMENT",
                        Nome: newPostUser,
                        Imagem: newPostImage,
                        Descricao: newPostDescription
                    }
                ]
            })
        })
        .then((response) => response.json())
        .then((data) => console.log(data));
    };
      

  return (
    <div className='Share_Your_Trip'>
        <h1>Partilhe a sua viagem!</h1>
        <label>
        Nome:
        <input type="text" onChange={(e) => setNewPostUser(e.target.value)} />
        </label>
        <label>
        Imagem:
        <input type="text" onChange={(e) => setNewPostImage(e.target.value)} />
        </label>
        <label>
        Descrição:
        <textarea  onChange={(e) => setNewPostDescription(e.target.value)} />
        </label>
        <button onClick={addPost}>Adicionar Publicação</button>
    </div>
  );
}

export default Share_Your_Trip;