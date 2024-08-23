import React from 'react';
import './Sessions.css';

export default function Sessions () {
    document.title = 'Session Pricing - Marie Anna Photography';
    return (
        <div className="session">
            <h1 className="entry-title">Session Pricing</h1>

            <div className="entry-content">
                <p>
                    <strong>Standard Portrait Sessions:</strong>
                </p>
                <ul>
                    <li>1-2 hours on location (park, river, home, etc.)</li>
                    <li>
            Individual or small group (4 people) <strong>$160.00</strong>
                    </li>
                    <li>
            Additional people <strong>$10.00</strong>
                    </li>
                    <li>
            Large group (more than 7){' '}
                        <strong>
                            <strong>
                                <strong>
                  $190.00
                                    <br />
                                </strong>
                            </strong>
                        </strong>
                    </li>
                </ul>
                <p>
                    <strong>
            Maternity Portraits
                        <span className="highlight"> $220.00</span>
                        <br />
                    </strong>
                    <br /> One session at the location of your choice (park, home, river,
          etc.)
                    <br /> Package includes:
                </p>
                <ul>
                    <li>
            One session at the location of your choice (park, home, river, etc.)
                    </li>
                    <li>
            Ten (10) digitally-retouched<sup>*</sup> photos with reproduction rights on personalized USB thumb
            drive
                    </li>
                    <li>Online proofing</li>
                </ul>
                <p>
                    <strong>
            Senior Portraits
                        <span className="highlight"> $350.00</span>
                        <br />
                    </strong>
                </p>
                <p>
          Capture the memory of your student’s final year in school!!
                    <br /> Session includes:
                </p>
                <ul>
                    <li>
            One session at the location of your choice (park, home, river, etc.)
                    </li>
                    <li>Two wardrobe changes</li>
                    <li>Online proofing</li>
                    <li>
                    Ten (10) digitally-retouched<sup>*</sup> photos with reproduction rights on personalized USB thumb
                    drive
                    </li>
                </ul>
            </div>
            <div className="aligncenter">
                <p className="alignleft">
                    <span className="highlight">
            A $50.00 deposit is required in advance of your session in order
            to reserve your date - cash or credit cards ONLY please…either
            over the phone or in person. We understand that emergencies come up and sometimes life happens,
            but we require 72 HOURS NOTICE on any and all cancellations.
            Without a 72 hour notice of cancellation, the $50.00 deposit will
            become NON-REFUNDABLE.
                        <br />
                        <br />
                    </span>
                    <strong>
            Remainder of fees are due at the end of each session.
                        <br />
                        <br />
                    </strong>
                    <strong>
            All portrait packages include: uploading costs to view proofs,
            editing and custom designs, local travel.
                        <br />
                        <br />
                    </strong>
                    <strong>
            Additional travel fees may apply outside of the Charlotte Metro area.
                    </strong>
                </p>
            </div>
            <sup>*</sup>Digital retouching includes removal of scars,
            blemishes, etc.
        </div>
    );
}
