import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <>
        <footer className = {styles.footer}>
            <p>
                <span>Lista de Afazeres React + TS</span> @ {new Date().getFullYear()}
            </p>
        </footer>
    </>
  )
}

export default Footer