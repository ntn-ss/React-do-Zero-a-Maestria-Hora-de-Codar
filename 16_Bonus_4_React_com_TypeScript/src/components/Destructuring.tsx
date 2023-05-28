interface Props {
    title: string
    content: string
    commentsQty: number
    tags: string[]
    // 8 - Enum
    category: Category
}

export enum Category {
  JS = "JavaScript",
  TS = "TypeScript",
  P = "Python"
}
// Em vez de repetir a palavra-chave "props" o tempo todo, como em props.title, props.content, props.commentsQty e props.tags, é possível desestruturá-las para usar apenas o nome absoluto da propriedade em questão.
const Destructuring = ({title, content, commentsQty, tags, category}: Props) => {
  return (
    <div>
        <h2>Título: {title}.</h2>
        <p>Conteúdo: {content}.</p>
        <p>Quantidade de comentários: {commentsQty}.</p>
        <div>
            <span>Palavras-chave: </span>
            {tags.map(tag=>(
                <span><b>#</b>{tag}. </span>
            ))}
        </div>
        <h4>Categoria: {category}.</h4>
    </div>
  )
}

export default Destructuring