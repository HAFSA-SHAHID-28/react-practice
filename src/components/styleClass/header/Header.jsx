import styles from "./Header.module.css";

const Header = () => {
  return (
     <>
     {/* normal css */}
        <h1 className='blue'>Header</h1>

    {/* module css */}
        <h1 className={styles.green}>Header</h1>
        
        <h1 className={styles.aqua}>Header</h1>
     </>
  )
}

export default Header