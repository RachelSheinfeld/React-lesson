import React from 'react'

const RenderingList = () => {
    const books = [
        {
            title: 'הנסיך הקטן',
            year: 1943,
            genre: 'מתח',
            author: 'gorg',
            rating: 4.8

        },
        {
            title: '1984',
            year: 1949,
            genre: 'היסטוריה',
            author: 'gorg',
            rating: 4.7
        },

    ]

    return (
        <div>
            <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th>שם הספר</th>
                        <th>שנה</th>
                        <th>סוג</th>
                        <th>מחבר</th>
                        <th>דירוג</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <tr key={index}>
                            <td>{book.title}</td>
                            <td>{book.year}</td>
                            <td>{book.genre}</td>
                            <td>{book.author}</td>
                            <td>{book.rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RenderingList