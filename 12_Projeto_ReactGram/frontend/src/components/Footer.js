import './Footer.css'

const Footer = () => {
    const getYear = () => {
            const today = new Date()
            const year = today.getFullYear()
            return year
    }
    
    return (
        <footer id="footer">
            <p>ReactGram &copy; {getYear()}</p>
        </footer>
    )
}
export default Footer