import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBooks } from './BookSlice';

const BookView = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.booksReducer.books);
    const handleDeleteBooks = (id) => {
        dispatch(deleteBooks(id));
    }
    return (
        <div>
            <h2>List of Books</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Auther</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books && books.map((book) => {
                        const { id, title, auther } = book;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{auther}</td>
                                <td>
                                    <Link to='/editbook' state={{ id, title, auther }}>
                                        <button>Edit</button>
                                    </Link>
                                    <button onClick={() => handleDeleteBooks(id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div >
    );
};

export default BookView;