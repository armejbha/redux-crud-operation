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
    },
});

export const { showBooks } = booksSlice.actions;
export default booksSlice.reducer;