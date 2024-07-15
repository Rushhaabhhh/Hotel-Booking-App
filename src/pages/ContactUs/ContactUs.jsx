import { Link } from 'react-router-dom';
import './ContactUs.css'


export default function ContactUs() {
    return (
        <div>
           <button>
                <Link to="/chatapp" className="button-link">
                    Chat App
                </Link>
            </button>
        </div>
    )
}