import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import { editBooks } from './BookSlice';
const EditBook = () => {
    const location = useLocation();
    const [id, setId] = useState(location.state.id);
    const [title, setTitle] = useState(location.state.title);
    const [auther, setAuther] = useState(location.state.auther);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editBooks({ id, title, auther }));
        navigate('/bookview', { replace: true });
    }

    return (
        <div>
            <h2>Edit Books</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="form-field">
                    <label htmlFor="auther">Auther:</label>
                    <input type="text" id="auther" name="auther" value={auther} onChange={(e) => setAuther(e.target.value)} required />
                </div>
                <button type="submit">Edit Book</button>
            </form>
        </div>
    );
};

export default EditBook;