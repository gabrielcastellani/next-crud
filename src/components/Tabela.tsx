import Cliente from "../core/Cliente";

interface TabelaProps {
    clientes: Cliente[]
}

export default function Tabela(props) {
    const renderizarCabecalho = () => {
        return (
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
        )
    }

    const renderizarClientes = () => {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.idade}</td>
                </tr>
            )
        })
    }

    return (
        <table>
            <thead>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarClientes()}
            </tbody>
        </table>
    )
}