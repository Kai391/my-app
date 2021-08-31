import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    const changeTitle = (e) =>{
        document.title = `Text Utils ${e.target.innerHTML==="Text Utils"?'':' - '+e.target.innerHTML}`
    }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode.navbar.nav} bg-${props.mode.navbar.nav}`}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="navbar-brand" to="/my-app/" onClick={changeTitle}>{props.title}</Link>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/" >Home</a>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/my-app/about" onClick={changeTitle}>About</Link>
                        </li>
                    </ul>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input"  type="checkbox" id="flexSwitchCheckDefault" onClick={props.onToggle} />
                    <label className={`form-check-label text-${props.mode.navbar.navbtnStyle}`} htmlFor="flexSwitchCheckDefault">{props.mode.navbar.navbtn} Mode</label>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
}

Navbar.defaultProps = {
    title: "Set here",
}
