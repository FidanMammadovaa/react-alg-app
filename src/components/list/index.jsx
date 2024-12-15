import React, { useState } from 'react';
import styles from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromList, resetCurrentList, saveList, setListName } from '../../redux/features/movies/moviesSlice';
import { Link } from 'react-router';

export default function List() {
    const dispatch = useDispatch()
    const list = useSelector((state) => state.movies.currentList)
    const listName = useSelector((state) => state.movies.currentListName)
    const [isSaved, setIsSaved] = useState(false)

    const handleRemoveFromList = (item) => {
        dispatch(removeFromList(item))
    }

    const handleListNameChange = (e) => {
        dispatch(setListName(e.target.value))
    }

    const handleSave = () => {
        if (listName) {
            dispatch(saveList())
            setIsSaved(true)
            dispatch(resetCurrentList())

        }
        else {
            alert("Enter list name")
        }

    }

    return (
        <div className={styles.list}>
            <div className={styles.header}>
                <input
                    type="text"
                    value={listName}
                    onChange={handleListNameChange}
                    className={styles.listNameInput}
                    placeholder="Enter list name"
                    disabled={isSaved}
                />
            </div>
            {list.map((item, index) => (
                <div key={index} className={styles.container}>
                    <label>{item.Title}</label>
                    <button className={styles.removeButton} onClick={() => handleRemoveFromList(item)}>Remove from list</button>
                </div>
            ))}
            {list.length > 0 ? (
                <button className={styles.saveButton} onClick={handleSave}>Save list</button>
            ) : <></>}
            {isSaved ? (
                <Link to={`/favorites`}>Go to Favorites</Link>
            ) : <></>
            }
        </div>
    )
}
