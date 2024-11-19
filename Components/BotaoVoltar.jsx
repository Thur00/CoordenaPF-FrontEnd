"user Client"

import Link from "next/link";

function BotaoVoltar(props) {
    return (
        <>
            <Link href={props.link}>
                <button className="botaovoltar"> Voltar </button>
            </Link>
        </>
    )
}

export default BotaoVoltar;