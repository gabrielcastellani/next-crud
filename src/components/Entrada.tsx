interface EntradaProps {
    texto: string,
    tipo?: 'text' | 'number',
    valor: any,
    somenteLeitura?: boolean,
    valorMudou?: (valor: any) => void 
}

export default function Entrada(props: EntradaProps) {
    return (
        <div className="flex flex-col mb-4">
            <label className="mb-2">
                {props.texto}
            </label>
            <input 
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-50 px-4 py-2
                    ${props.somenteLeitura ? '' : 'focus:bg-white'}
                `}
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.somenteLeitura}
                onChange={e => props.valorMudou?.(e.target.value)}
            />
        </div>
    )
}