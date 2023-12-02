import { Link } from 'react-router-dom';

export default function Navbar() {
    const NAV_LINKS = {
        ABOUT_ME: "aboutme",
        PORTFOLIO: "portfolio",
        CONTACT: "contact"
    }

    const styles = {
        navbar: {
            "height": "75px"
        }
    }

    /**
     * Sets the active tab 
     * @param {String} link 
     */
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
        <nav className='navbar navbar-expand-md' style={ styles.navbar }>
            <div className='container-fluid'>
                <Link
                    className='navbar-brand fs-1 text-dark'
                    to={'/'}
                    onClick={() => onClickLink(NAV_LINKS.ABOUT_ME)}
                >
                    Nathan Geronimo
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id='navbar' className='collapse navbar-collapse justify-content-end'>
                    <div className='navbar-nav nav-underline fs-5'>
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
