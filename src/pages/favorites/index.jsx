import { useSelector } from "react-redux"
import styles from './index.module.css'
import { Link } from "react-router"
export default function Favorites() {
    const lists = useSelector((state) => state.movies.lists)

    return (
        <div className={styles.container}>
            {lists && lists.length > 0 ? (
                lists.map((list, index) => (
                    <div className={styles.listContainer}>
                        <h1>{list.name}</h1>
                        <div className={styles.moviesContainer}>
                            {list.movies.map((movie, movieIndex) => (
                                <div key={movieIndex} className={styles.movieContainer}>
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

                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                ))
            ) : (
                <p>No movies found</p>
            )}
        </div>)
}