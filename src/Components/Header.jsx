import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

export default function Header() {
    const { user } = React.useContext(UserContext);

    return (
        <header style={styles.headerContainer}>
            <Link to='/'>
                <h2 style={styles.logo}>Logo</h2>
            </Link>

            <div>
                <ul className="header-list">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about-us'>About Us</Link></li>
                    <li><Link to='/contact-us'>Contact Us</Link></li>
                </ul>

                <ul className="header-links">
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                </ul>
            </div>

            {!!user && (
                <div>
                    {user.name}
                </div>
            )}
        </header>
    );
}

const styles = {
    headerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#333',
        color: 'white',
    },

    logo: {
        fontSize: '24px',
        margin: 0,
        padding: 0,
        color: '#fff',
        textDecoration: 'none',
    },

    '.header-list': {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
    },

    '.header-list li': {
        marginRight: '20px',
    },

    '.header-list li:last-child': {
        marginRight: 0,
    },

    '.header-list li a': {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '16px',
    },

    '.header-links': {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
    },

    '.header-links li': {
        marginRight: '10px',
    },

    '.header-links li:last-child': {
        marginRight: 0,
    },

    '.header-links li a': {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '16px',
    },
};
