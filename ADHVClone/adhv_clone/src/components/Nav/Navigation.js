import './Navigation.css';
import logo from '../../assets/logo.png';

const Navigation = () => {
    return (
        <nav>
            <section>
                <div className='nav_left'>
                        <img src={logo} alt="Logo"></img>
                </div>
                <div className='nav_right'>
                    <div className='links'>
                        <a href='/'>Home</a>
                        <a href='/'>The Initiative</a>
                        <a href='/'>Partners</a>
                        <a href='/'>School Dental Services</a>
                        <a href='/'>FAQ</a>
                        <a href='/'>Contact</a>
                        <button>Apply</button>
                    </div>
                </div>

            </section>
        </nav>
    );
}

export default Navigation;