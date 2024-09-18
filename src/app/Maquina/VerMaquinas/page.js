'use client';
import React, { useEffect, useState } from 'react';

export default function Page() {
  const [maquinas, setMaquinas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMaquinas() {
      try {
        const response = await fetch('http://10.139.75.18:5251/api/Maquina/GetAllMaquinas');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMaquinas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMaquinas();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div>
      <h1>Lista de Máquinas</h1>
      <ul>
        {maquinas.map((maquina) => (
          <li key={maquina.maquinaId}>
            <h2>Nome da Máquina:{maquina.nome}</h2>
            <p>Modelo: {maquina.modelo}</p>
            <p>Número de Série: {maquina.numeroSerie}</p>
            <p>Data de Aquisição: {new Date(maquina.dataAquisicao).toLocaleDateString()}</p>
            {maquina.fotoUrl && <img src={maquina.fotoUrl} alt={maquina.nome} />}
          </li>
        ))}
      </ul>
    </div>
  );
}


