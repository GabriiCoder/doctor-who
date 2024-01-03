import Image from 'next/image';
import style from '../header/page.module.css';

export default function Header() {
return (
        <header className={style.header}>
            <nav>
                <ul className={style.navList}>
                <li><a href="conoce-a">Conoce a</a></li>
                <li><a href="doctores">Doctores</a></li>
                <li><a href="contacto">Contacto</a></li>
                </ul>
                </nav>
                <div className={style.logoContainer}>
                <div className={style.logoWrapper}>
                <a href='http://localhost:3000/'>
                <img src="logo.png" alt="Logo" className={style.logo} /></a>
                </div>
                <div className={style.searchContainer}>
                <img src="search.svg"></img>
                </div>
                </div>
                <div className={style.socialIcons}>
                <a href="https://www.facebook.com/"><img src="facebook.svg" alt="Facebook" /></a>
                <a href="https://twitter.com/i/flow/loginç"><img src="twiter.svg" alt="Twitter" /></a>
                <a href="https://www.instagram.com/"><img src="instagram.svg" alt="Instagram" /></a>
                <a href="https://www.tiktok.com/"><img src="tiktok.svg" alt="TikTok" /></a>
            </div>
        </header>
);
};
