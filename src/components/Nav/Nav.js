import "./Nav.scss";
import logo from "../../assets/logos/BrainFlix-logo.svg";
import searchIcon from "../../assets/icons/search.svg";
import uploadIcon from "../../assets/icons/upload.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="nav">

            <Link to="/">
                <img src={logo} className="nav__logo" alt="brainflix-logo" />            
            </Link>
            <form className="nav__form">
                <img src={searchIcon} className="nav__search" alt="search-icon"/>
                <input className="nav__input" placeholder="Search"></input>
            </form>
            <img src={avatar} className="nav__avatar nav__avatar--phone" alt="avatar"/>
            <Link to="/uploads" className="nav__button">
                <img src={uploadIcon} className="nav__icon" alt="upload-icon"/>
                <div href="/" className="nav__upload">UPLOAD</div>
            </Link>
            <img src={avatar} className="nav__avatar nav__avatar--tablet" alt="avatar"/>            
        </nav>
    );
}

export default Nav;