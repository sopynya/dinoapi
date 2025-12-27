"use client";
import Image from "next/image";
import { useState, useMemo } from "react";
import styles from "./page.module.css";
import Dinosaurs from '@/components/Dinosaurs'
import Header from "@/components/Header";

export default function Home() {
  const [search, setSearch] = useState("");
  const query = useMemo(() => ({search}), [search])
  return (
    <>
    <Header search={search} onSearchChange={setSearch} />
    <section className={styles.home} id="home">
      <div className={styles.content}>
        <h1 className={styles.title}>Dinosaur API</h1>
        <p className={styles.text}>
          The Dinosaurs API is available at <span className={styles.important}>/api/dinosaurs</span> and returns data in JSON format.
          <br />
          You can refine results using query parameters: use <i>search</i> to filter by genus name and <i>limit</i> to set how many items are returned
        </p>
      </div>
    </section>
    <Dinosaurs query={query}/>
    <section className={styles.about} id='about'>
      <div className={styles.container}>
      <h2>About</h2>
      <p>
        The Dinosaurs API was created as a learning project and as a resource 
        for anyone interested in prehistoric life. It provides structured, science-based 
        information about dinosaurs in a clear and accessible way. Each record includes 
        taxonomic classification, holotype references, discovery details, time period, 
        diet, physical descriptions, and estimated sizes — all organized 
        to make exploration and comparison easier.
      <br /><br />
        Although I am not a professional paleontologist, I built this API using 
        reputable sources and tried to stay as accurate as possible. The goal is 
        not to replace academic databases, but to offer a friendly gateway for 
        students, developers, and dinosaur enthusiasts who want reliable data to 
        use in projects, research practice, or curiosity-driven exploration. 
        The API is continuously improving as I learn more and refine the information, 
        and feedback is always welcome.
      <br/><br/>
        You can also visit my other website, <a href='https://dinodatabase.onrender.com'>Dino Database</a>, which focuses on dinosaurs in a 
        more visual and accessible way. There you’ll find short summaries and lots of 
        images to help you better visualize each species. It’s a great complement 
        for anyone who wants to learn in a simple way before diving into the 
        scientific details of the API.
        (x: @dinodatabase)
      </p>
      </div>
    </section>
    </>
  );
}
