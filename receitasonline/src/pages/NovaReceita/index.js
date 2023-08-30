import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./nova-receita.css";

function NovaReceita() {
  const navigate = useNavigate();
  const [imagem, setImagem] = useState(null);
  const [nome, setNome] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [modoPreparo, setmodoPreparo] = useState("");

  function handleSubmit(event) {
    navigate("/");
  }

  return (
    <div className="containerAdd">
      <form className="CardAdd" onSubmit={handleSubmit}>
        <h1>Adicionar Nova Receita</h1>
        <label>
          Foto do Prato:
          <input
          imagem={imagem}
            type="file"
            accept="image/*"
            onChange={(e) => setImagem(e.target.files[0])}
          />
        </label>
        <label>
          Nome da Receita:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </label>
        <label>
          Ingredientes:
          <textarea className="TxtArea"
            value={ingredientes}
            onChange={(e) => setIngredientes(e.target.value)}
            required
          />
        </label>
        <label>
          Modo de Preparo:
          <textarea className="TxtArea"
            value={modoPreparo}
            onChange={(e) => setmodoPreparo(e.target.value)}
            required
          />
        </label>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default NovaReceita;