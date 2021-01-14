import React, { useContext, useEffect } from 'react'
import { appContext } from '../../App'

const Navbar = () => {
    const { isMobile, menuOpen, setMenuOpen, isDark, setIsDark } = useContext(appContext);

    const hamburgerClick = () => {
        if (!menuOpen) {
            setMenuOpen(true);
        }
        else {
            setMenuOpen(false)
        }
    }

    const closeMenu = () => {
        if (menuOpen) {
            setMenuOpen(false);
        }
    }

    const handleChange = (e) => {
        setIsDark(e.target.checked);
    }

    useEffect(() => {

        return () => {
            setMenuOpen(false);
        }
    }, [isMobile, setMenuOpen])

    const linkNames = ["GitHub Code", "JSON Data"];
    const links = ["https://github.com/projectym/Search-Songs-App", "https://raw.githubusercontent.com/projectym/Songs-Api/main/db.json"]

    if (isMobile) {
        return (
            <>
                <div className="my-navbar">
                    <h4 className="icon">pjT</h4>
                    <div className="hamburger-div" onClick={hamburgerClick}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <div className={menuOpen ? "mobile-side-container menu-open" : "mobile-side-container"} >
                    <div className="mobile-side-div">

                        <ul className="links">
                            {linkNames.map((name, index) => {
                                return (
                                    <li key={name}><a href={links[index]}>{name}</a></li>
                                )
                            })}

                            <li key="switch">
                                <div className="switch">
                                    <label>Dark Mode
                                        <input type="checkbox" checked={isDark} onChange={handleChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                            </li>

                        </ul>

                        <button className="close-button" onClick={closeMenu}>Close</button>
                    </div>

                    <div className={menuOpen ? "close-div-open" : "close-div"} onClick={closeMenu}></div>
                </div>

            </>
        )
    }
    return (
        <div className="my-navbar">
            <h4 className="icon">pjT</h4>
            <ul className="links">
                {linkNames.map((name, index) => {
                    return (
                        <li key={name}><a href={links[index]}>{name}</a></li>
                    )
                })}

                <li key="switch">
                    <div className="switch">
                        <label>
                            <input type="checkbox" checked={isDark} onChange={handleChange} />
                            <span className="lever"></span>
                        Dark</label>
                    </div>
                </li>

            </ul>
        </div>
    )
}

export default Navbar
