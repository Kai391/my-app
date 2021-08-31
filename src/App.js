import Navbar from "./MyComponents/Navbar";
import TextBlock from "./MyComponents/TextBlock";
import React, { useState } from 'react';
import Alerts from "./MyComponents/Alerts";
import About from "./MyComponents/About";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {

    // <---------------------------- alert fuctionality ------------------------------------------>

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            typ: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    // <------------------------------------------------------------------------------------------>

    //<--------------------------- Dark mode functionality --------------------------------------->

    const [mode, setMode] = useState(
        localStorage.getItem('theme') === "dark" ?
            {
                navbar: {
                    nav: 'dark',
                    navbtn: 'Light',
                    navbtnStyle: 'light'
                },
                textBlock: {
                    hColor: 'light',
                }
            } :
            {
                navbar: {
                    nav: 'light',
                    navStyle: 'grey',
                    navbtn: 'Dark',
                },
                textBlock: {
                    hColor: 'Dark',
                }
            }

    );

    if(localStorage.getItem('theme')==='dark')
    {
        document.body.style.backgroundColor = '#111869';
    }

    let darkMode = () => {
        if (mode.navbar.nav === 'light') {
            setMode({
                navbar: {
                    nav: 'dark',
                    navbtn: 'Light',
                    navbtnStyle: 'light'
                },
                textBlock: {
                    hColor: 'light',
                }
            });
            document.body.style.backgroundColor = '#111869';
            showAlert("Dark Mode Enable", "success");
            localStorage.setItem('theme', 'dark');
        }
        else {
            setMode({
                navbar: {
                    nav: 'light',
                    navStyle: 'grey',
                    navbtn: 'Dark',
                    navbtnStyle: '',
                },
                textBlock: {
                    hColor: 'Dark',
                }
            });
            document.body.style.backgroundColor = 'wheat';
            showAlert("Light Mode Enable", "success");
            localStorage.removeItem('theme');
        }
    }

    // <--------------------------------------------------------------------------------------------------->
    return (
        <Router>
            <Navbar title="Text Utils" mode={mode} onToggle={darkMode} />
            <Alerts alert={alert} />
            <Switch>
                <Route exact path="/my-app/">
                    <div className="container">
                        <TextBlock style={mode} alert={showAlert} />
                    </div>
                </Route>
                <Route exact path="/my-app/about">
                    <About mode={mode} />
                </Route>
            </Switch>
        </Router>
    );
}
export default App;