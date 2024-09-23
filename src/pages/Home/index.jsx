import styles from "./home.module.css"

export default function Home() {
    return (
        <header className={styles.menu}>
            <div className={styles.logo}>
                <img src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png" alt="Brand Logo" />
                <span>Brand</span>
            </div>
            <nav className={styles.menuItems}>
                <a href="#item1">Produtos</a>
                <a href="#item2">Serviços</a>
                <a href="#item3">Contato</a>
            </nav>
            <div className={styles.userIcon}>
                <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="User Icon" />
            </div>
        </header>
    )
}