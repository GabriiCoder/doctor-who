"use client";
import React, { useState, useRef } from 'react';
import doctorsData from '../../../public/assets/data/doctors.json';
import styles from './page.module.css'

const DoctorSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
    const filteredDoctors = doctorsData.doctors.filter(doctor =>
        doctor && doctor.doctor.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredDoctors);
    };

    const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch();
    };

    return (
    <div className="search-container">
        {/* <img src="/search.svg" alt="Search Icon" className="search-icon" /> */}
        <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleChange}
        />

        <div>
        {searchTerm.length > 0 ? (
            searchResults.map(doctor => (
            <div key={doctor.id}>
                <img src={doctor.image} alt={doctor.doctor} />
                <p>
                <span>{doctor.doctor.substring(0, doctor.doctor.toLowerCase().indexOf(searchTerm.toLowerCase()))}</span>
                <span className={styles.buscador}>{searchTerm}</span>
                <span>{doctor.doctor.substring(doctor.doctor.toLowerCase().indexOf(searchTerm.toLowerCase()) + searchTerm.length)}</span>
                </p>
                <p>{doctor.actor}</p>
                <p>{doctor.screen_time}</p>
                <p>{doctor.InfoDoctor}</p>
            </div>
            ))
        ) : (
            <p></p>
        )}
        </div>
    </div>
    );
};

export default DoctorSearch;
