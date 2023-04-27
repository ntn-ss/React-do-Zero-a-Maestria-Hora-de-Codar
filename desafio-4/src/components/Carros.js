import styles from './Carros.module.css'

const Carros = ({marca, quilometragem, cor}) => {
  return (
    <div className={styles.carros_conteiner}>
        <div className={styles.carros_card}>
            <h2 className = {styles.titulo_carros}>Carro:</h2>
            <p className={styles.texto_carros}>Marca: {marca}.</p>
            <p className={styles.texto_carros}>Quilometragem: {quilometragem} km.</p>
            <p className={styles.texto_carros}>Cor: {cor}.</p>
        </div>
    </div>
  )
}

export default Carros