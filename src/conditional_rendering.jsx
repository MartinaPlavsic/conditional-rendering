
const ConditionalRendering = (props) => {
    const veciBroj = <p>je veći od 5</p>
    const manjiBroj = <p>je manji od 5</p>

    const provjera = props.number > 5 ? veciBroj : manjiBroj 
    return (
        <h1>
            Conditional Rendering {props.number} {"false"}
            </h1>
        {provjera}

      )
}


export default ConditionalRendering