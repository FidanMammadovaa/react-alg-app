import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        lists: [],
        currentListName: '',
        currentList: []
    },
    reducers: {
        addToList: (state, action) => {
            const movie = action.payload;
            const exists = state.currentList.some((item) => item.imdbID === movie.imdbID);

            if (!exists) {
                state.currentList.push(movie);
            }
        },
        removeFromList: (state, action) => {
            const movie = action.payload
            const index = state.currentList.findIndex((item) => item.imdbID === movie.imdbID)

            if (index !== -1) {
                state.currentList.splice(index, 1)
            }
        },
        saveList: (state) => {
            if (state.currentListName && state.currentList.length > 0) {
                const newList = {
                    name: state.currentListName,
                    movies: [...state.currentList]
                }
                state.lists.push(newList)
                state.currentList = []
                state.currentListName = ''
            } else {
                console.log('List name or movies are missing')
            }
        },
        setListName: (state, action) => {
            state.currentListName = action.payload
        },
        resetCurrentList: (state) => {
            state.currentList = []
            state.currentListName = ''
        }
    }
})

export const { addToList, removeFromList, saveList, setListName, resetCurrentList } = moviesSlice.actions;

export default moviesSlice.reducer;
