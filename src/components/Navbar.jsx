import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

export default function Navbar() {
    const NAV_LINKS = {
        ABOUT_ME: "aboutme",
        PORTFOLIO: "portfolio",
        CONTACT: "contact"
    }

    const styles = {
        "hamburgerMenu": {
            "width": "50px",
            "height": "25px",
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "space-between",
            "cursor": "pointer",
            "border": "none"
        },
        "hamburgerLine": {
            "width": "100%",
            "height": "3px",
            "backgroundColor": "black",
        },
        "test": {
            "color": "red",
        }
    }

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

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
        <nav className='navbar navbar-expand-md fixed-top '>
            <div className='container-fluid'>
                <h1 className='fs-1'>Nathan Geronimo</h1>

                {isMobile &&
                    <button style={styles.hamburgerMenu} className="navbar-toggler" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
                        <div style={styles.hamburgerLine}></div>
                        <div style={styles.hamburgerLine}></div>
                        <div style={styles.hamburgerLine}></div>
                    </button>
                }


                <div id='navbar' className='collapse navbar-collapse justify-content-end'>
                    <div className='navbar-nav nav-underline fs-4'>
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

<body>
    <nav class="navbar navbar-default">
        <div class="container navbarContainer">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

            <div class="collapse navbar-right navbar-collapse pull-right" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li><a href="#">Menu 0</a></li>
                    <li><a href="#">Menu 1</a></li>
                    <li><a href="#">Menu 2</a></li>
                    <li><a href="#">Menu 3</a></li>
                </ul>
            </div>
        </div>
    </nav>
</body>