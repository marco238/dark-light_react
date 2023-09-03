import './Header.css';
import reactLogo from '../../assets/react.svg';
import Button from '../Button/Button';

function Header(props) {
    const { isActive } = props
    return (
        <header className={`header ${isActive ? 'light' : 'dark' }`}>
            <div className='header-content'>
                <img src={reactLogo} alt="React Logo" />
                <h1>
                React 
                </h1>
                <p>La biblioteca para interfaces de usuario web y nativas</p>
                <div className='header-content-buttons'>
                    <Button text='Aprende React' className='btn btn-primary'/>
                    <Button text='Referencia de API' className='btn btn-secondary'/>
                </div>
            </div>
        </header>
    )

}

export default Header