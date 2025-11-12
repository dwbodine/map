// Sessions.tsx
import React, { useEffect } from 'react';
import './Sessions.css';

const Sessions: React.FC = () => {
  // Set page title inside useEffect for React 18+/19
  useEffect(() => {
    document.title = 'Session Pricing - Marie Anna Photography';
  }, []);

  return (
    <section className="session">
      <h1 className="entry-title">Session Pricing</h1>

      <div className="entry-content">
        <p>
          <strong>
            Standard Portrait Sessions (includes Children, Family, Just for Fun
            and Vintage Flair sessions):
          </strong>
        </p>
        <ul>
          <li>1–2 hours on location (park, river, home, etc.)</li>
          <li>
            Individual or small group (4 people) <strong>$180.00</strong>
          </li>
          <li>
            Additional people <strong>$10.00</strong>
          </li>
          <li>
            Large group (more than 7) <strong>$190.00</strong>
          </li>
        </ul>

        <p>
          <strong>
            Graduate Portraits<span className="highlight"> $350.00</span>
          </strong>
        </p>
        <p>
          Capture the memory of your student’s final year in school!
          <br /> Session includes:
        </p>
        <ul>
          <li>
            One session at the location of your choice (park, home, river, etc.)
          </li>
          <li>Two wardrobe changes</li>
          <li>Online proofing</li>
          <li>
            Ten (10) digitally retouched<sup>*</sup> photos with reproduction
            rights on a personalized USB thumb drive
          </li>
        </ul>

        <p>
          <strong>Weddings</strong>
          <br />
          <br />
          In my 20 years of photography, I&apos;ve learned that no two weddings
          are the same. For example, I&apos;ve traveled to Jamaica to shoot a
          wedding on the beach or gone next door to photograph an intimate
          gathering of 25 people in a backyard. I prefer to meet with each bride
          and groom so I can create a wedding package that not only fits their
          budget but their style as well. All initial wedding consultations are{' '}
          <strong>free</strong>.
        </p>
      </div>

      <div className="aligncenter">
        <p className="alignleft">
          <span className="highlight">
            A $50.00 deposit is required in advance of your session in order to
            reserve your date – cash or credit cards ONLY please, either over
            the phone or in person. We understand that emergencies come up and
            sometimes life happens, but we require 72 HOURS NOTICE on any and
            all cancellations. Without a 72-hour notice of cancellation, the
            $50.00 deposit will become NON-REFUNDABLE.
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
            Additional travel fees may apply outside of the Charlotte Metro
            area.
          </strong>
        </p>
      </div>

      <p>
        <sup>*</sup>Digital retouching includes removal of scars, blemishes,
        etc.
      </p>
    </section>
  );
};

export default Sessions;
