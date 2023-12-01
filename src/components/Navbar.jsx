import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg'>
            <div className='container-fluid'>
                <div className='collapse navbar-collapse'>
                    <div className='navbar-nav'>
                        <li>
                            <Link
                            className='nav-link'
                            to={'/'}
                            >
                            About Me
                            </Link>
                        </li>
                        <li>
                            <Link
                            className='nav-link'
                            to={'/portfolio'}
                            >
                            Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link
                            className='nav-link'
                            to={'/contact'}
                            >
                            Contact
                            </Link>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    );
}
