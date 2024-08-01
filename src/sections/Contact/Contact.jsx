import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactStyles.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vk8y4y4', 'template_yjee8x9', e.target, 'kZi5RG6bonRJcquR6')
      .then((result) => {
          alert('Email enviado com sucesso!');
      }, (error) => {
          alert('Erro ao enviar email. Por favor, envie um email para felipe.lipiw@gmail.com');
      });

    setFormData({ name: '', email: '', message: '' });
  };
 
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contato</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Nome
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Mensagem
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Mensagem"
            value={formData.message}
            onChange={handleChange}
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Enviar" />
      </form>
    </section>
  );
}

export default Contact;