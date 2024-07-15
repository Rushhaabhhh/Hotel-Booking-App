import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Account() {
    let { subpage } = useParams();
    if (subpage === undefined) subpage = 'profile';

    function linkClasses(type = null) {
        let classes = 'account-links';
        if (type === subpage) {
            classes += ' active';
        } else {
            classes += ' inactive';
        }
        return classes;
    }

    return (
        <div>
            <Link className={linkClasses('profile')} to={'/account/profile'}>My Profile</Link>
            <Link className={linkClasses('bookings')} to={'/account/bookings'}>My Bookings</Link>
            <Link className={linkClasses('places')} to={'/account/places'}>My Accommodations</Link>
        </div>
    );
}

const styles = `
    .account-links {
        display: inline-block;
        margin-right: 10px;
        padding: 5px 10px;
        color: #333;
        text-decoration: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        transition: background-color 0.3s ease;
    }

    .account-links.active {
        background-color: #007bff;
        color: #fff;
        border-color: #007bff;
    }

    .account-links.inactive {
        background-color: #f8f9fa;
        color: #333;
        border-color: #ccc;
    }
`;

const styleElement = document.createElement('style');
styleElement.appendChild(document.createTextNode(styles));
document.head.appendChild(styleElement);
