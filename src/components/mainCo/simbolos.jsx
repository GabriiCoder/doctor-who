import React from "react";
import Image from "next/image";
import style from "../mainCo/page.module.css"

const SymbolsComponent = () => {
    return (
    <div className={style.SymbolsComponent}><div/>
        <div className={style.image2}>
        <div className={style.image2Wrapper}></div>
        <img src="/persistencia.png" alt="Símbolo l" width={417} height={417} />
        </div>
        <div className={style.image1}>
        <div className={style.image1Wrapper}></div>
        <img src="/resistencia.png" alt="Símbolo resistencia" width={576.9} height={576.9} />
        </div>
    </div>
    );
};

export default SymbolsComponent