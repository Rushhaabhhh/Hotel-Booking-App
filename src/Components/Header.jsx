import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

export default function Header() {
    const { user } = React.useContext(UserContext);

    return (
        <header style={styles.headerContainer}>
        <Link to='/' style={styles.logo}>
            <h2>Logo</h2>
        </Link>

        <div>
            <ul style={styles.headerList}>
                <li style={styles.headerListItems}><Link to='/' style={styles.headerListLink}>Home</Link></li>
                <li style={styles.headerListItems}><Link to='/about-us' style={styles.headerListLink}>About Us</Link></li>
                <li style={styles.headerListItems}><Link to='/contact-us' style={styles.headerListLink}>Contact Us</Link></li>
            </ul>
        </div>

        <div>
            <ul style={styles.headerLinks}>
                <li style={styles.headerLinksItems}><Link to='/login' style={styles.headerLinksLink}>Login</Link></li>
                <li style={styles.headerLinksItems}><Link to='/register' style={styles.headerLinksLink}>Register</Link></li>
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

    headerList: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center', // Center the list horizontally
    },

    headerListItems: {
        marginRight: '20px',
    },

    headerListItemsLast: {
        marginRight: '0',
    },

    headerListLink: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '16px',
    },

    headerLinks: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'flex-end', // Align the links to the right
    },

    headerLinksItems: {
        marginRight: '10px',
    },

    headerLinksItemsLast: {
        marginRight: '0',
    },

    headerLinksLink: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '16px',
    },
};
