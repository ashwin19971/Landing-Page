import React, { Component } from 'react';

import "./PageHeader.scss";
import topImg from "../../../../assets/img/top-background.png";
import topBottomBorderImg from "../../../../assets/img/top-bottom-border.png";
import logoImg from "../../../../assets/img/hot-burgers.png";
import topTextBackground from "../../../../assets/img/top-text-background.png";
import arrow from "../../../../assets/img/arrow.png";
import Menu from '../../../../components/Menu';

class PageHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: 0
        }
    }

    setHeight = () => {
        const height = document.getElementById('top-background-img').clientHeight;
        this.setState({ height });
    }

    componentDidMount() {
        window.addEventListener('load', this.setHeight);
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.setHeight);
    }

    render() {
        const {
            height
        } = this.state;
        return (
            <div id="page-header-wrapper" style={{ minHeight: `${height}px`, height: `${height}px` }}>
                <img id="top-background-img" src={topImg} />
                <Menu />
                <img id="top-logo-img" src={logoImg} />
                <img id="top-bottom-border-img" src={topBottomBorderImg} />
                <p id="top-slide-heading">Party Time!</p>
                <div id="top-slide-wrapper">
                    <img id="top-text-background" src={topTextBackground} />
                    <p id="top-text">Buy any 2 burgers and get 1.5L Pepsi Free</p>
                </div>
                <a id="top-order-now">order now<i className="icon-right-arrow" /></a>
                <img id="top-left-arrow" src={arrow} />
                <img id="top-right-arrow" src={arrow} />
            </div>
        )
    }
}

export default PageHeader;
