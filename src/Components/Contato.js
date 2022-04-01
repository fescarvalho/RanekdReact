import React from 'react';
import styles from './Contato.module.css';
import Head from './Head';
import foto from '../img/contato.jpg';

const Contato = () => {
  return (
    <section className={styles.contato + ' animeLeft'}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Maquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>andre@origamid.com</li>
          <li>00000-0000</li>
          <li>Rua Ali Perto, 000</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
