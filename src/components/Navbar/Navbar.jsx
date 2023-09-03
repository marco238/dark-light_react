import './Navbar.css';
import reactLogo from '../../assets/react.svg';
import gitLogo from '../../assets/git-logo.svg';
import gitLogoDark from '../../assets/git-logo-dark.svg'
import darkMode from '../../assets/dark-mode.svg';
import lightMode from '../../assets/light-mode.svg';

function Navbar(props) {
    const { cb, isActive, className} = props

    return (
        <nav className={`navbar ${isActive ? 'light' : 'dark' } ${className}`}>
            <div className='navbar-container'>
                <img src={reactLogo} alt="React Logo" />
                <div className='navbar-list'>
                    <ul>
                        <li><a href='#'>Aprende</a></li>
                        <li><a href='#'>Referencia</a></li>
                        <li><a href='#'>Comunidad</a></li>
                        <li><a href='#'>Blog</a></li>
                        <li><button className='navbar-toggle' onClick={cb}><img src={isActive ? darkMode : lightMode} alt="Mode Icon" /></button></li>
                        <li><a href='#'><img src={isActive ? gitLogo : gitLogoDark} alt="GitHub Logo" /></a></li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar