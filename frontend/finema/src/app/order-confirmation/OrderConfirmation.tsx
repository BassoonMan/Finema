'use client'
import React from 'react';
//import LoggedinUserTopBar from '../components/LoggedinUserTopBar'
import styles from './OrderConfirmation.module.css'
import TopBar from '../components/TopBar';

export default function OrderConfirmation() {
  let email = 'joshua@konfrst.com'
  return (
    <div>
      <TopBar loggedIn={true}/>
      <section className={styles.main_body}>
        <section className={styles.thanks}>
          <h1> Thank you for your order! </h1>
          <h2> A confirmation email was sent to {email} </h2>
        </section>
        <section className={styles.summary}>
          <h1> Order Summary </h1>
          <ul>
            <li> Movie Name: </li>
            <li> Showtime: </li>
            <li> Ticket Type: </li>
            <li> Seat: </li>
            <li> Total: </li>
          </ul>
        </section>
      </section>
    </div>
  );
};
