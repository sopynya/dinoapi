"use client";
import { useEffect, useState } from "react";
import dinodata from "@/data/dinos.json";
import styles from "./dinosaurs.module.css";

const PER_PAGE = 45;

export default function Dinosaurs({ query }) {
  const [dinosaurs, setDinosaurs] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let filtered = dinodata;

    if (query.search) {
      const search = query.search.toLowerCase();
      filtered = filtered.filter((dino) =>
        dino.genus.toLowerCase().includes(search)
      );
    }

    setDinosaurs(filtered);
    setPage(1);
  }, [query]);

  const totalPages = Math.ceil(dinosaurs.length / PER_PAGE);

  const start = (page - 1) * PER_PAGE;
  const currentItems = dinosaurs.slice(start, start + PER_PAGE);

  return (
    <section className={styles.page} id="dinosaurs">

      <ul className={styles.list}>
        {currentItems.map((d) => (
          <li className={styles.dino} key={d.genus}>
            {d.genus}
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className={styles.button}
          >
            {"<"}
          </button>

          <span>
            Page {page}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className={styles.button}
          >
            {">"}
          </button>
        </div>
      )}
    </section>
  );
}
