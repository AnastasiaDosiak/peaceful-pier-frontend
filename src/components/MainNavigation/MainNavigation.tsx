import React, {Component} from 'react';
import NavigationItem from "./components/NavigationItem";
import {ROUTES} from "./routes";
import "./MainNavigation.scss";

class MainNavigation extends Component {
    render() {
        return (
            <nav className="main-navigation">
                <ul>
                    {ROUTES.map(({text, url, icon}, index) => {
                        return <li key={index}>
                            <NavigationItem icon={icon}
                                            route={url}
                                            text={text}/>
                        </li>
                    })}
                </ul>
            </nav>
        );
    }
}

export default MainNavigation;