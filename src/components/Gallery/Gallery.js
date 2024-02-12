import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Gallery.css';

const jsonData = {
    children: require('../../data/children.json'),
    family: require('../../data/family.json'),
    graduates: require('../../data/graduates.json'),
    justforu: require('../../data/justforu.json'),
    maternity: require('../../data/maternity.json'),
    newborns: require('../../data/newborns.json')
};

export default function Gallery (props) {
    var { title, name } = props;
    document.title = `${title} - Marie Anna Photography`;
    const slideRef = useRef();

    const imageData = jsonData[name];

    const slides = imageData.map((image, index) => {
        return (
            <div className="each-fade" key="{image.imageName}">
                <div style={{ backgroundImage: `url(${image.imageName})` }}>
                    <span>
                        {index + 1} of {imageData.length}
                    </span>
                </div>
            </div>
        );
    });

    const properties = {
        duration: 4000,
        infinite: true,
        defaultIndex: 0,
        autoplay: true,
        pauseOnHover: false
    };

    const restartSlideshow = () => {
        if (slideRef.current) {
            slideRef.current.goTo(0);
        }
    };

    restartSlideshow();

    return (
        <div>
            <h1 className="entry-title">{title}</h1>
            <div className="slide-container">
                <Fade ref={slideRef} {...properties}>
                    {slides}
                </Fade>
            </div>
        </div>
    );
}

Gallery.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string
};
