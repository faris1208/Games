"use client";
import React, { useState } from "react";
import styles from "../games/styles.module.scss";
import { games } from "../data";
import Image from "next/image";

export default function Games() {
  const categories = [
    "All",
    "Slots",
    "Adventure",
    "Roulette",
    "Puzzle",
    "Card Games",
    "Arcade",
    "Dice",
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredGames = games.filter((game) => {
    const matchesCategory =
      selectedCategory === "All" || game.category === selectedCategory;
    const matchesSearch = game.category
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.games_container}>
      <div className={styles.games_wrapper}>
        <div className={styles.games_input}>
          <input
            type="text"
            placeholder="Search games"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className={styles.games_buttons}>
          <div className={styles.games_buttons}>
            {categories.map((category, index) => (
              <button
                key={index}
                className={selectedCategory === category ? styles.active : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.games_filter}>
        {filteredGames.length > 0 ? (
          filteredGames.map((game, i) => (
            <div key={i} className={styles.game_card}>
              <Image
                src={game.imgUrl}
                alt={game.name}
                width={100}
                height={200}
                className={styles.game_img}
              />
              <p>{game.category}</p>
            </div>
          ))
        ) : (
          <p>No games found.</p>
        )}
      </div>
    </div>
  );
}
