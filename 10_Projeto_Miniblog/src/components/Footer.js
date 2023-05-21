import styles from "./Footer.module.css"

// hooks
import { useAuthValue } from "../pages/context/AuthContext";


const Footer = () => {
  const { user } = useAuthValue();
  return (
    <footer className={styles.footer}>
      {user ? <h3>Escreva sobre o que te interessa, {user.displayName}!</h3> : <h3>Escreva sobre o que te interessa!</h3>}
      
      <p>MiniBlog &copy; 2023</p>
    </footer>
  )
}

export default Footer