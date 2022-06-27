import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addBooks } from './BookSlice';
const AddBook = () => {
    const [title, setTitle] = useState("");
    const [auther, setAuther] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const numberOfBooks = useSelector((state) => state.booksReducer.books.length);
    console.log(numberOfBooks);
    const handleSubmit = (e) => {
        e.preventDefault();
        const book = { id: numberOfBooks + 1, title, auther };
        dispatch(addBooks(book));
        navigate('/bookview', { replace: true });
    }
    return (
        <div>
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="form-field">
                    <label htmlFor="auther">Auther:</label>
                    <input type="text" id="auther" name="auther" onChange={(e) => setAuther(e.target.value)} required />
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;