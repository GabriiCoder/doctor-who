import Image from 'next/image';
import styles from '../footer/page.module.css';

export default function Footer () {
    return (
    <footer className={styles.footer}>
        <div className={styles.line}></div>
        <div className={styles.content}>
        <div className={styles.left}>
        
        <img src="/vencer.png" alt="Símbolo"/>
        </div>
        <div className={styles.right}>
        <a href="https://www.facebook.com/"><img src="/facebook.svg" alt="Facebook" /></a>
        <a href="https://twitter.com/i/flow/login"><img src="/twiter.svg" alt="Twitter" /></a>
        <a href="https://www.instagram.com/"><img src="/instagram.svg" alt="Instagram" /></a>
        <a  href="https://www.tiktok.com/"><img src="/tiktok.svg" alt="Tiktok" /></a>
        </div>
        </div>
    </footer>
    );
};
