import React, { Component } from 'react';

import "./Testimonial.scss";
import MENU_UNDERLINE from "../../../../assets/img/menu-underline.png";
import { testimonialData } from '../../../../models/testimonialData';

class Testimonial extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTestimonialId: 1
        }
    }

    render() {
        const {
            activeTestimonialId
        } = this.state;
        const activeTestimonial = testimonialData[activeTestimonialId - 1];
        return (
            <div id="testimonial-wrapper">
                <p id="testimonial-heading">Client Testimonials</p>
                <img id="testimonial-bottom-border" src={MENU_UNDERLINE} />
                <p id="testimonial-description">Try our Most Delicious food and it usually take minutes to deliver!</p>
                <div id="testimonial-slides">
                    {
                        <div className="testimonial-slide" key={activeTestimonial.id}>
                            <div className="testimonial-slide-left-wrapper">
                                <img className="testimonial-slide-intro-img" src={activeTestimonial.introImg} />
                                <i />
                            </div>
                            <div className="testimonial-slide-right-wrapper">
                                <img className="testimonial-slide-quote-img" src={activeTestimonial.quoteImg} />
                                <p className="testimonial-slide-description">{activeTestimonial.description}</p>
                                <span className="testimonial-slide-sub-wrapper">
                                    <p>{activeTestimonial.name}</p>
                                    <i />
                                </span>
                                <p className="testimonial-slide-profile">{activeTestimonial.profile}</p>
                                <div className="testimonial-dots-wrapper">
                                    {
                                        testimonialData.map(val => (
                                            <i
                                                key={val.id}
                                                className={`${val.id == activeTestimonialId ? "active-tesimonial-dot" : ""}`}
                                                onClick={() => this.setState({ activeTestimonialId: val.id })}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Testimonial;
