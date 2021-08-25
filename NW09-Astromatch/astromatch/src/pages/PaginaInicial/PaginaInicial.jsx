import React from "react";
import { SiAdblock, SiGooglehangouts } from "react-icons/si";
import {
  CardPaginaInicial,
  HeaderCard,
  ConatinerImage,
  ButtonsMatch,
} from "./Paginainicial";

function PaginaInicial() {
  return (
    <>
      <CardPaginaInicial>
        <HeaderCard>
          <button>AQUI</button>
          <h1>header Card</h1>
          <button>AQUI</button>
        </HeaderCard>
        <ConatinerImage>
          <img src="https://picsum.photos/200/300" alt="foto Usuário" />
        </ConatinerImage>
        <ButtonsMatch>
          <button>
            <SiGooglehangouts />
          </button>
          <button>
            <SiAdblock />
          </button>
        </ButtonsMatch>
      </CardPaginaInicial>
    </>
  );
}

export default PaginaInicial;
