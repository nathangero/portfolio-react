import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const NAV_LINKS = {
        ABOUT_ME: "/",
        PORTFOLIO: "/portfolio",
        CONTACT: "/contact"
    }

    const styles = {
        navbar: {
            "height": "75px",
            "backgroundColor": "#2baeff"
        }
    }

    /**
     * Sets the active tab 
     * @param {String} link 
     */
    const onClickLink = (link) => {
        switch (link) {
            case NAV_LINKS.ABOUT_ME:
                console.log("set about me to active")
                document.getElementById('nav-aboutme').className = "nav-link active";
                document.getElementById('nav-portfolio').className = "nav-link";
                document.getElementById('nav-contact').className = "nav-link";
                break;

            case NAV_LINKS.PORTFOLIO:
                document.getElementById('nav-aboutme').className = "nav-link";
                document.getElementById('nav-portfolio').className = "nav-link active";
                document.getElementById('nav-contact').className = "nav-link";
                break;

            case NAV_LINKS.CONTACT:
                document.getElementById('nav-aboutme').className = "nav-link";
                document.getElementById('nav-portfolio').className = "nav-link";
                document.getElementById('nav-contact').className = "nav-link active";
                break;
        }
    }


    // Set the current navbar tab to "active" only on page startup depending where the user is.
    const location = useLocation().pathname;
    useEffect(() => {
        onClickLink(location);
    }, [location]);

    // Keep track of menu open state
    const [isMenuOpen, setMenuState] = useState(false);
    useEffect(() => {
        // set eventlistener after page has rendered
        const myOffcanvas = document.getElementById('navbar')

        myOffcanvas.addEventListener('hidden.bs.offcanvas', () => {
            // console.log("hide menu")
            setMenuState(false);
        })

        myOffcanvas.addEventListener('show.bs.offcanvas', () => {
            // console.log("show menu")
            setMenuState(true);
        })
    }, [])

    // Used to get rid of the odd dimmed screen if offcanvas is dismissed NOT by the close button
    useEffect(() => {
        // console.log("toggled isMenuOpen?", isMenuOpen)
        if (!isMenuOpen) document.getElementById('button-close-offcanvas').click();
    }, [isMenuOpen])


    return (
        <nav className='navbar navbar-expand-md mb-3' style={styles.navbar}>
            <div className='container-fluid'>
                <Link
                    className='navbar-brand fs-1 text-dark'
                    to={'/'}
                    onClick={() => onClickLink(NAV_LINKS.ABOUT_ME)}
                >
                    Nathan Geronimo
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar" aria-controls="offcanvas" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id='navbar' className='offcanvas offcanvas-end navbar-offcanvas justify-content-end' tabIndex={-1} aria-labelledby='offcanvasNavbarLabel'>
                    <div className="offcanvas-header justify-content-end">
                        <button id='button-close-offcanvas' type="button" className="btn-close fs-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div className='offcanvas-body'>
                        <ul className="navbar-nav nav-underline fs-5 justify-content-end flex-grow-1 pe-3">
                            <li>
                                <Link
                                    id='nav-aboutme'
                                    className='nav-link'
                                    to={'/'}
                                    onClick={() => onClickLink(NAV_LINKS.ABOUT_ME)}
                                >
                                    About Me
                                </Link>
                            </li>

                            <li>
                                <Link
                                    id='nav-portfolio'
                                    className='nav-link'
                                    to={'/portfolio'}
                                    onClick={() => onClickLink(NAV_LINKS.PORTFOLIO)}
                                >
                                    Portfolio
                                </Link>
                            </li>

                            <li>
                                <Link
                                    id='nav-contact'
                                    className='nav-link'
                                    to={'/contact'}
                                    onClick={() => onClickLink(NAV_LINKS.CONTACT)}
                                >
                                    Contact Me
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className='nav-link'
                                    to={'/contact'} // TODO: Download the resume
                                >
                                    Resume
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
