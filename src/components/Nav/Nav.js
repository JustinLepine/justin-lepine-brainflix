import "./Nav.scss";
import logo from "../../assets/logos/BrainFlix-logo.svg";
import searchIcon from "../../assets/icons/search.svg";
import uploadIcon from "../../assets/icons/upload.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";

function Nav() {
    return (
        <nav className="nav">
            <img src={logo} className="nav__logo" alt="brainflix-logo" />            
            <form className="nav__form">
                <img src={searchIcon} className="nav__search" alt="search-icon"/>
                <input className="nav__input" placeholder="Search"></input>
            </form>
            <img src={avatar} className="nav__avatar nav__avatar--phone" alt="avatar"/>
            <div className="nav__button">
                <img src={uploadIcon} className="nav__icon" alt="upload-icon"/>
                <a href="/" className="nav__upload">UPLOAD</a>
            </div>
            <img src={avatar} className="nav__avatar nav__avatar--tablet" alt="avatar"/>
        </nav>
    );
}

export default Nav;