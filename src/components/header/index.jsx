import { Link } from "react-router";
import styles from './index.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <ul className={styles.links}>
                    <li><Link to="/" className={styles.link}>Home</Link></li>
                </ul>
            </nav>
        </header>
    );
}
