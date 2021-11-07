import React, { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio) 

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 54, '4'),
  ]
  
  const clienteSelecionado = (cliente: Cliente) => {
    setCliente(cliente)
    setVisivel('form')
  }

  const clienteExcluido = (cliente: Cliente) => {
    console.log(cliente.nome);
  }

  const salvarCliente = (cliente: Cliente) => {
    setVisivel('tabela')
  }

  const novoCliente = () => {
    setCliente(Cliente.vazio)
    setVisivel('form')
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4" 
                onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes} 
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido} />
          </>
        ) : (
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          />
        )}
      </Layout>
    </div>
  )
}
