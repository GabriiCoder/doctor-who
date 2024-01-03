import React from "react";
import style from "../mainCo/page.module.css"
import Image from "next/image";

const DoctorComponent = ({ imageUrl, altText, description }) => {
    return (
        <div className={style.DoctorComponent}><div/>
        <div className={style.imageDoc}>
        <div className={style.docWrapper}></div>
        <img src='/doctora.jpg' alt='imagenDoctora' width={430} height={510}/>
        </div>
        {/* <div className={style.Container}></div> */}
        </div>
    );
    };
    
    export default DoctorComponent;
    