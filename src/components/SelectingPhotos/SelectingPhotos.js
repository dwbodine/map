import React from 'react';
import './SelectingPhotos.css';

export default function SelectingPhotos () {
    document.title = 'Selecting Photos - Marie Anna Photography';
    return (
        <div className="selecting-photos">
            <h1 className="entry-title">Selecting Your Photos</h1>

            <div className="entry-content">
                <p>
          Roughly a week after your session, I will send you a secure link from
          my favorite online proofing website&nbsp;
                    <a href="http://pixieset.com/" target="_blank">
            pixieset.com
                    </a>
          , which is both mobile-friendly and has social sharing available. When
          viewing on Pixieset, please keep in mind:
                </p>
                <ul>
                    <li>
            For your security and for copyright protection, each session
            requires a password and images will be watermarked with “Marie Anna
            Photography”.
                    </li>
                    <li>These are just proofs, not fully retouched images.</li>
                    <li>
            To select your photos from those available, click on “favorite” on
            the selected photos and pixieset will automatically start a folder
            for you.
                    </li>
                    <li>
            Please notify me when your folder has been created and all
            selections are finalized, as I do not receive notification when this
            process is complete.
                    </li>
                    <li>
            When you have made your final selection of images and placed your
            order, your proof album on Pixieset
                        <strong>
                            <span className="boldhighlight"> will be deleted.</span>
                        </strong>
                    </li>
                </ul>
                <p> </p>
            </div>
        </div>
    );
}
