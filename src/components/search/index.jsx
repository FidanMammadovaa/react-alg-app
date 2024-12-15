import React, { useState } from "react";
import styles from "./index.module.css";

export default function Search({ onSearch }) {
  const [query, setQuery] = useState("")

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query)
      setQuery("")
    }
  }

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Enter title"
        value={query}
        onChange={handleInputChange}
        className={styles.searchInput}
      />
      <button onClick={handleSearch} className={styles.searchButton}>
        Search
      </button>
    </div>
  )
}
