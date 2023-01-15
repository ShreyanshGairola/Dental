import './header.css';

import headerBackground from '../../assets/homeImage.jpg';

const Header = () => {
    return (
        <div className='header_Content'>
                <div className='background_Content'>
                    <div className='plainBackground'></div>
                    <img src={headerBackground} alt="Imageas"></img>
                </div>
                <div className='header_Text'>
                    <h1>
                        AUSTRALIAN DENTAL HEALTH INITIATIVE STARTING 2021
                    </h1>
                </div>
        </div>
    );
}

export default Header;