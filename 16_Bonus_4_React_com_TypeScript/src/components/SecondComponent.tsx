interface Props {
    name: string
}

const SecondComponent = (props: Props) => {
  return (
    <div>
        <p>Meu segundo componente. Seu nome é {props.name}.</p>
    </div>
  )
}

export default SecondComponent