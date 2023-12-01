import { Link } from 'react-router-dom';

export default function Navbar() {
    const NAV_LINKS = {
        ABOUT_ME: "aboutme",
        PORTFOLIO: "portfolio",
        CONTACT: "contact"
    }

    const onClickLink = (link) => {
        switch (link) {
            case NAV_LINKS.ABOUT_ME:
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

    return (
        <nav className='navbar navbar-expand-sm fixed-top '>
            <div className='container-fluid'>
                <div className='collapse navbar-collapse justify-content-end'>
                    <div className='navbar-nav nav-underline'>
                        <Link
                            id='nav-aboutme'
                            className='nav-link'
                            to={'/'}
                            onClick={() => onClickLink(NAV_LINKS.ABOUT_ME)}
                        >
                            About Me
                        </Link>
                        <Link
                            id='nav-portfolio'
                            className='nav-link'
                            to={'/portfolio'}
                            onClick={() => onClickLink(NAV_LINKS.PORTFOLIO)}
                        >
                            Portfolio
                        </Link>
                        <Link
                            id='nav-contact'
                            className='nav-link'
                            to={'/contact'}
                            onClick={() => onClickLink(NAV_LINKS.CONTACT)}
                        >
                            Contact Me
                        </Link>
                        <Link
                            className='nav-link'
                            to={'/contact'} // TODO: Download the resume
                        >
                            Resume
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
