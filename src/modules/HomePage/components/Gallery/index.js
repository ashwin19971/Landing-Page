import React, { Component } from 'react';

import "./Gallery.scss";
import galleryTopBorder from "../../../../assets/img/gallery-top-border.png";
import galleryBottomBorder from "../../../../assets/img/gallery-bottom-border.png";
import { galleries } from '../../../../models/galleryData';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSlideId: 3
        }
    }
    render() {
        const {
            activeSlideId
        } = this.state;
        return (
            <div id="gallery-wrapper">
                <div id="gallery-inside-wrapper">
                    <img id="gallery-top-img" src={galleryTopBorder} />
                    <div id="gallery-slide-wrapper">
                        <div id="gallery-slide-inside-wrapper">
                            {
                                galleries.map(val => (
                                    <span
                                        key={val.id}
                                        className={`${activeSlideId == val.id ? `${activeSlideId == 5 ? "active-slide-last" : "active-slide"}` : ""}`}
                                        onClick={() => this.setState({ activeSlideId: val.id })}
                                    >
                                        <img src={val.img} />
                                        <p className="gallery-slide-text">{val.heading}</p>
                                        <i />
                                        <p className="gallery-slide-description">{val.description}</p>
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                    <div id="gallery-slide-dots">
                        {
                            galleries.map(val => (
                                <i
                                    key={val.id}
                                    className={`${activeSlideId == val.id ? 'active-dot' : ""}`}
                                />
                            ))
                        }
                    </div>
                    <img id="gallery-bottom-img" src={galleryBottomBorder} />
                </div>
            </div>
        )
    }
}

export default Gallery;