import { createSlice } from "@reduxjs/toolkit"

const initialBook = {
    books: [
        { id: 1, title: 'ami sodu ceyeci tomai', auther: 'kazi bhai' },
        { id: 2, title: 'tumi acho tumi nei', auther: 'kazi boin' }
    ]
}

export const booksSlice = createSlice({
    name: "books",
    initialState: initialBook,
    reducers: {
        showBooks: (state) => state,
        addBooks: (state, action) => {
            state.books.push(action.payload);
        },
        editBooks: (state, action) => {
            const { id, title, auther } = action.payload;
            const isBookExist = state.books.filter(book => book.id === id);
            if (isBookExist) {
                isBookExist[0].title = title;
                isBookExist[0].auther = auther;
            }
        },
        deleteBooks: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter(book => book.id !== id);
        },
    },
});

export const { showBooks, addBooks, deleteBooks, editBooks } = booksSlice.actions;
export default booksSlice.reducer;