import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import CardPequeno from "./components/CardPequeno/CardPequeno";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://avatars.githubusercontent.com/u/69260762?s=60v=4"
          nome="Julio"
          descricao="Oi, eu sou o  Julio. Sou um Futuro Dev. Frontend formado pela Labenu. Adoro aprender algo novo, e trocar conhecimento com os colegas."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="small-card">
        <CardPequeno
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeBVga-KWAgAeP-PZ6bUbkJWW_Gp00HZmK8g&usqp=CAU"
          titulo="Email:"
          texto="julio@julio.com.br"
        />
      </div>
      <div className="small-card">
        <CardPequeno
          imagem="https://lh3.googleusercontent.com/proxy/kgwY-bdPZQEWgQNRkKtPlu2LAUUhb7tvWxj3JiL2vgkdW4XK6a4FRgP3r6w7A8Hm8rgjNq2GDY0zDByR-41py9lWSOJsbg"
          titulo="Endereço:"
          texto="Rua das batatas"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Minha Trajetório"
          descricao="Sou técnico em eletrônica a mais de 10 anos,  em Aviônicos, e antes disso trabalhava com Fabricação de Drones. 
          mas sempre sonhando em ser programador, primeiro para trabalhar com Eletrônica embarcada, mas depois que conheci o Dev WEB tudo mudou. !"
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="NASA"
          descricao="Apontando defeitos."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
