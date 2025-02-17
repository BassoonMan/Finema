'use client'
import React from 'react';
import styles from './ShowTime.module.css'
import Button from '../components/Button'
import { useRouter } from 'next/navigation'

export default function ShowTime() {
  const router = useRouter();

  function goToSeats() {
    router.push('/seat-selection')
  }
  function goBack() {
    router.push('/web-user-home')
  }

  return (
    <div className={styles.main_body}>
      <h1 className={styles.title}> MOVIE TITLE </h1>
      <section className={styles.selectors}>
        <section>
          <h1 className={styles.headers}> Select Showtimes</h1>
          <section className={styles.box}>
            <h1 className={styles.headers}> Showtimes </h1>
            <ul className={styles.list}>
              <li> 2/10/25 - 12:00pm </li>
            </ul>
          </section>
        </section>
        <section>
          <h1 className={styles.headers}> Select Ticket Type</h1>
          <section className={styles.box}>
            <h1 className={styles.headers}> Ticket Type </h1>
            <ul className={styles.list}>
              <li> Child </li>
              <li> Adult </li>
              <li> Senior </li>
            </ul>
          </section>
        </section>
      </section>
      <div className={styles.btn1}>
        <Button onClick={goToSeats}>Next </Button>
      </div>
      <div className={styles.btn2}>
        <Button onClick={goBack}> Go Back </Button>
      </div>
    </div>
  );
};