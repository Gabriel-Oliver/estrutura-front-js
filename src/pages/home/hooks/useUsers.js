import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useUsers = (permissao) => {
  const [usuarios, setUsuarios] = useState();
  const [atualizarUsuarios, setAtualizarUsuarios] = useState(0);
  const [carregando, setCarregando] = useState(false);
  const history = useHistory();

  const atualizar = () => {
    setAtualizarUsuarios(atualizarUsuarios + 1);
  };

  useEffect(() => {
    if (!permissao) {
      history.push("/");
    }
    async function carregaUsuarios() {
      try {
        setCarregando(true);
        const resultado = await axios.get("https://api.github.com/users", {
          params: { per_page: parseInt(Math.random() * 10) },
        });
        setUsuarios(resultado.data);
      } catch (error) {
        console.log(error);
      } finally {
        setCarregando(false);
      }
    }
    carregaUsuarios();
  }, [atualizarUsuarios, permissao, history]);

  return [usuarios, atualizar, carregando];
};

export default useUsers;
