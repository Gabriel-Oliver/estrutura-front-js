import React from "react";
import { TailSpin } from "react-loader-spinner";
import "./Carregando.css";
export default function Carregando({ ativo }) {
  return (
    ativo && (
      <div className="background-carregando">
        <TailSpin
          height="100"
          width="100"
          color="#000"
          ariaLabel="loading"
          className="animacao-carregando"
        />
      </div>
    )
  );
}
