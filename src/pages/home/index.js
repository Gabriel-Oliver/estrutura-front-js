import React from "react";
import useUsers from "./hooks/useUsers";
import Usuario from "./components/Usuario";
import Carregando from "./components/Carregando";

export default function Home() {
  const [usuarios, atualizar, carregando] = useUsers("CO0000");
  const handleClick = () => {
    atualizar();
  };

  return (
    <>
      <button onClick={handleClick}>Ver usuários</button>
      {usuarios &&
        usuarios.map((usuario, index) => (
          <Usuario usuario={usuario} key={index} />
        ))}
      <Carregando ativo={carregando} />
    </>
  );
}
