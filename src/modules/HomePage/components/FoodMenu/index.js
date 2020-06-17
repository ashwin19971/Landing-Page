import React, { Component } from 'react';

import "./FoodMenu.scss";
import MENU_UNDERLINE from "../../../../assets/img/menu-underline.png";
import { foodMenu } from '../../../../models/foodMenuData';

class FoodMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItemId: 3
        }
    }
    render() {
        const {
            activeItemId
        } = this.state;
        return (
            <div id="food-menu-wrapper">
                <p id="want-to-eat">Want to Eat?</p>
                <img id="menu-underline" src={MENU_UNDERLINE} />
                <p id="menu-text">Try our Most Delicious food and it usually take minutes to deliver!</p>
                <div id="menu-options-wrapper">
                    {
                        foodMenu.map(val => (
                            <span
                                key={val.id}
                                className={`${activeItemId == val.id ? "active-menu" : ""}`}
                                onClick={() => this.setState({ activeItemId: val.id })}
                            >
                                <img src={val.img} />
                                <p className="menu-option-text">{val.name}</p>
                            </span>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default FoodMenu;
