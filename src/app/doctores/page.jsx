import React from 'react';
import Header from '@/components/header/page';
import Footer from '@/components/footer/page';
import DoctorCard from "@/components/doctorCard/page";
import styles from "./page.module.css";
import doctorsData from "../../../public/assets/data/doctors.json"
import DoctorSearch from '@/components/buscador/page';
const DoctorsPage = () => {
return (
    <main className={styles.body}>
        <DoctorSearch />
    <Header />
    <div>
    <h1 className={styles.title2}>Doctores</h1>
    </div>
    <div className={styles.docContainer}>
    {doctorsData.doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctorInfo={doctor} />
        ))}
        </div>
    <div>
    </div>
    <Footer />
    </main>
);
};

export default DoctorsPage;
