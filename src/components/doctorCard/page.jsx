import React from "react";
import styles from "./page.module.css";


export default function DoctorCard({ doctorInfo }) {
const { doctor, actor, screen_time, image } = doctorInfo;

return (
    <section className={styles.card}>
    <div className={styles.fotoContainer}>
    <img src={image} alt={`${doctor} - ${actor}`} />
    </div>
    <h3 className={styles.info}>{doctor}</h3>
    <p className={styles.info}>{actor}</p>
    <p className={styles.info}>{screen_time}</p>
    </section>

);

}

