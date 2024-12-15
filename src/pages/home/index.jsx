import React, { useState } from "react";
import Search from "../../components/search";
import styles from "./index.module.css";
import Card from "../../components/card";
import { useDispatch } from "react-redux";
import { addToList } from "../../redux/features/movies/moviesSlice";
import List from "../../components/list";

export default function Home() {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [totalResults, setTotalResults] = useState(0);


    const dispatch = useDispatch()

    const handleSearch = async (searchQuery) => {
        setQuery(searchQuery);
        setPage(1);
        fetchResults(searchQuery, 1);
    }

    const fetchResults = async (searchQuery, pageNumber) => {
        const res = await fetch(
            `https://www.omdbapi.com/?s=${searchQuery}&page=${pageNumber}&apikey=cc7ac5fe`
        )
        const data = await res.json()

        if (data.Response === "True") {
            setMovies(data.Search)
            setTotalResults(parseInt(data.totalResults, 10))
        } else {
            setMovies([])
            setTotalResults(0)
        }
    }

    const handleNextPage = () => {
        const nextPage = page + 1
        setPage(nextPage)
        fetchResults(query, nextPage)
    }

    const handlePreviousPage = () => {
        if (page > 1) {
            const prevPage = page - 1
            setPage(prevPage)
            fetchResults(query, prevPage)
        }
    }

    const handleAddToList = (movie) => {
        dispatch(addToList(movie))
    }


    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <Search onSearch={handleSearch} />
                <div className={styles.movies}>
                    {movies.length > 0 ? (
                        <div className={styles.moviesContainer}>
                            {movies.map((movie, index) => (
                                <Card onr onAddToList={handleAddToList} key={index} movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <p className={styles.empty}>No movies found</p>
                    )}
                </div>


                {totalResults > 0 && (
                    <div className={styles.pagination}>
                        <button
                            onClick={handlePreviousPage}
                            disabled={page === 1}
                            className={styles.paginationButton}
                        >
                            Previous
                        </button>
                        <span className={styles.pageInfo}>
                            Page {page} of {Math.ceil(totalResults / 10)}
                        </span>
                        <button
                            onClick={handleNextPage}
                            disabled={page >= Math.ceil(totalResults / 10)}
                            className={styles.paginationButton}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
            <div className={styles.selectedMovies}>
                <List />
            </div>
        </div>
    )
}
