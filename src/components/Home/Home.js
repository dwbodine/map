import React from 'react';
import './Home.css';

export default function Home () {
    document.title = 'Home - Marie Anna Photography';
    return (
        <div className="entry-content">
            <figure className="aligncenter">
                <img
                    src="img/cover.jpg"
                    alt=""
                    srcSet="img/cover.jpg 800w, img/cover-300.jpg 300w"
                    sizes="(max-width: 800px) 100vw, 800px"
                />
            </figure>
        </div>
    );
}
