import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./NavigationItem.scss"

interface INavigationItemProps {
    route: string;
    icon: string;
    text: string;
}

class NavigationItem extends Component<INavigationItemProps> {

    render() {
        const {route, icon, text} = this.props;
        return (
            <div className="main-navigation__item">
                <Link to={route}>
                    <img className="main-navigation__icon" src={icon} alt={icon}/>
                    <span className="main-navigation__text">
                            {text}
                            </span>
                </Link>
            </div>
        );
    }
}

export default NavigationItem;