import React from "react";
import styles from "./page.module.css"
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import DoctorComponent from "@/components/mainCo/doctora";
import SymbolsComponent from "@/components/mainCo/simbolos";
import MyButton from "@/components/button-ver-mas/page";

const ConoceAPage = () => {
    return (
        <main>
        <Header />
        <DoctorComponent />
        <h1 className={styles.title}>Conoce a ... decimotercera</h1> 
        <h1 className={styles.doctor}>doctor</h1>
        <p className={styles.description1}>Lorem ipsum dolor sit amet consectetur. Convallis maecenas </p>
        <p className={styles.description2}>metus justo ametnunc amet.</p>
        <p className={styles.description3}>Hac pellentesque proine.</p>
        <p className={styles.description4}>Risenim duis quisegestas non. Morbiut potenti.</p>
        <MyButton />
        < SymbolsComponent/>
        <Footer />
        </main>
    );
    };
    
    export default ConoceAPage;