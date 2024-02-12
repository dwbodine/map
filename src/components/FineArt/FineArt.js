import React from 'react';

export default function FineArt () {
    document.title = 'Fine Art Prints - Marie Anna Photography';
    return (
        <div>
            <h1 className="entry-title">Fine Art Prints</h1>

            <div className="entry-content">
                <p>
          All fine art prints are created using Kodak Endura Professional Papers
          with your choice of lustre, glossy or metallic finish.
                </p>
                <p>Sizes range from 2.5 x 3.5 to 30 x 40.</p>
                <p>Pricing for my clients’ favorite sizes:</p>
                <ul>
                    <li>2 wallets: $10</li>
                    <li>8 wallets: $14</li>
                    <li>4 x 6: $8</li>
                    <li>5 x 7: $12</li>
                    <li>8 x 10 OR 8 x 12: $27</li>
                    <li>11 x 14: $50</li>
                    <li>16 x 20: $80</li>
                </ul>
                <p>Other product options:</p>
                <ul>
                    <li>Mounting available for most prints</li>
                    <li>Canvas prints</li>
                    <li>Gallery wraps (stretched over a wooden frame)</li>
                    <li>Metal prints</li>
                    <li>Boutique cards</li>
                    <li>High-quality photo albums</li>
                    <li>Image cubes</li>
                    <li>Personalized USB thumb drives</li>
                    <li>Image folios</li>
                    <li>Ornaments</li>
                    <li>Reproduction rights</li>
                </ul>
                <p>
          For more information, please contact Marie at{' '}
                    <a href="mailto:marie@marieannaphotography.com">
            marie@marieannaphotography.com
                    </a>
          .
                </p>
            </div>
        </div>
    );
}
