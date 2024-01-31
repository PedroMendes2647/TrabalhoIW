import React, { useEffect, useState } from 'react';
import Axios from "axios";
import "../CSS_Styles/Admin_Dashboard.css";

function Admin_Dashboard() {
    // ########## Manipular os posts #########
    // variável de estado para guardar o conteúdo da planilha (posts)
    const [sheetData, setData] = useState([]); //[] pois o conteúdo da planilha é dado em forma de array de objetos
    // variável de estado para guardar o nome do publicador
    const [newPostUser, setNewPostUser] = useState("");
    // variável de estado para guardar a foto da publicação
    const [newPostImage, setNewPostImage] = useState("");
    // variável de estado para guardar a descrição da publicação
    const [newPostDescription, setNewPostDescription] = useState("");
    //variável de estado para guardar o id do post a eliminar
    const [PostID_to_delete, setPostID_to_delete] = useState("");

    // ######### Manipular as admin accounts #####
    // variável de estado para guardar o novo username
    const [newUsername, setNewUsername] = useState("");
    // variável de estado para guardar a nova password
    const [newPassword, setNewPassword] = useState("");
    
    // ######### Manipular o login #########
    // variável de estado para guardar o username introduzido no site pelo usuário
    const [username, setUsername] = useState("");
    // variável de estado para guardar a password introduzida no site pelo usuário
    const [password, setPassword] = useState("");
    // variável de estado para guardar o conteúdo da planilha (contas)
    const [login, setLogin] = useState([]);
    // variável de estado para uso em caso de erros
    const [loginError, setLoginError] = useState("");
    // variável de estado para averiguar se o utilizador do site está autenticado ou não
    const [authenticated, setAuthenticated] = useState(false);

    //transforma o conteúdo do excel num array de objetos e carrega para o site (com recurso a API)
    const getData = () => {
        Axios.get('https://sheetdb.io/api/v1/sx7b7l1ren6nm?sheet=posts').then(
          (response) => {
            setData(response.data);
          }
        );
    };

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
        .then((data) => {
            console.log(data);
            //atualizar sheetData
            getData();}) 
    };
    
    //remover um post da sheet (que contém todos os posts já existentes)  
    const deletePost = () => {
        fetch(`https://sheetdb.io/api/v1/sx7b7l1ren6nm/Post_ID/${PostID_to_delete}?sheet=posts`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            //atualiza sheetData
            getData();})
    };

    //atualizar um post da sheet (que contém todos os posts já existentes)  
    const updatePost = () => {
        fetch(`https://sheetdb.io/api/v1/sx7b7l1ren6nm/Post_ID/${PostID_to_delete}?sheet=posts`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: {
                    'name': "Emma"
                }
            })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            //atualiza sheetData
            getData();})
    };

    //vai buscar o conteúdo do excel assim que abrimos a dashboard
    useEffect(() =>{
        getData();
    },[]);

  return (
    <div className='Admin_Dashboard'>
      <h1>Admin Dashboard</h1>
      
      <h2>Adicionar nova publicação</h2>
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
      <h2>Publicações existentes</h2>
      {sheetData.map((post, index) => (
        <div className="posts_div" key={index}>
            <p className="posts_p">Id da publicação: {post.Post_ID}</p>
            <p className="posts_p">Publicação de {post.Nome}</p>
            <img className="posts_img" src={post.Imagem} />
            <p className="posts_p">Descrição: {post.Descricao}</p>
        </div>
        
      ))}
      <div>
      <label>
        Escreva o ID do Post a eliminar:
        <input type="text" onChange={(e) => setPostID_to_delete(e.target.value)} />
      </label>
      <button onClick={deletePost}>Remover Publicação</button>

      </div>
    </div>
);

}
export default Admin_Dashboard;