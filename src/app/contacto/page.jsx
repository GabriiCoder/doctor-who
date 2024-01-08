import React from 'react';
import Header from '@/components/header/page';
import Footer from '@/components/footer/page';
import style from './page.module.css';
import ContactForm from '../../components/formulario/page';


    const ContactPage = () => {
return (
    < >
    <Header />
    <main>
        <div>
        <h2 className={style.contact}>Envia tu mensaje al</h2>
        <h2 className={style.Doc}>Doctor</h2>
        </div>
        <ContactForm />
    </main>
    <Footer />
    </>
);
};

export default ContactPage;