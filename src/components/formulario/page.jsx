"use client";
import React, { useState, useRef } from 'react';
import styles from './page.module.css'

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      alert: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
  
    this.setState({
      alert: '¡Mensaje enviado correctamente!',
      name: '',
      email: '',
      message: '',
    });

    setTimeout(() => {
      this.setState({
        alert: '',
      });
    }, 200);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, message, alert } = this.state;

    return (
      <div className={styles.formContainer}>
        <form onSubmit={this.handleSubmit} className={styles.styledForm}>
          <div>
            <label htmlFor="name" className={styles.nombre}></label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Nombre *"
              required
            />
          </div>
          <div>
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="Email *"
              required
            />
          </div>
          <div className={styles.messageContainer}>
            <label htmlFor="message" className={styles.mensage} ></label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={this.handleChange}
              placeholder="Mensaje *"
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.styledButton}>Send</button>
        </form>
        {alert && <div style={{ color: 'green' }} className={styles.alert}>{alert}</div>}
      </div>
    );
  }
}

export default ContactForm;