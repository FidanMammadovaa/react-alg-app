import React from "react";
import styles from './index.module.css';
import { Link } from "react-router";

export default function Card({ movie, onAddToList }) {
    return (
        <div className={styles.container}>
            <Link
                to={`https://www.imdb.com/title/${movie.imdbID}`}
                className={styles.imgContainer}
            >
                <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className={styles.poster}
                />
            </Link>

            <div className={styles.details}>
                <h3 className={styles.title}>{movie.Title}</h3>
                <p className={styles.year}>Year: {movie.Year}</p>
                <button 
                    className={styles.addButton} 
                    onClick={() => onAddToList(movie)}
                >
                    Add to List
                </button>
            </div>
        </div>
    );
}
