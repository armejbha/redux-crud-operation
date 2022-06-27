import React from 'react';
import { useSelector } from 'react-redux';

const BookView = () => {
    const books = useSelector((state) => state.booksReducer.books);

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
                                    <button>Edit</button>
                                    <button>Delete</button>
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