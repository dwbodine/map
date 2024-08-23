import React from 'react';
import './About.css';

export default function About () {
    document.title = 'Yours Truly - Marie Anna Photography';
    return (
        <div>
            <h1 className="entry-title">Yours Truly</h1>

            <div className="about-content">
                <img
                    className="alignright size-full"
                    src="img/IMG_1239.jpg"
                    alt="Marie"
                    width="369"
                    height="500"
                    srcSet="img/IMG_1239.jpg 369w, img/IMG_1239-221x300.jpg 221w"
                    sizes="(max-width: 369px) 100vw, 369px"
                />
                <p>How often have you said to yourself, “Oh I wish I had my camera!”</p>
                <p>
          That's because you want to freeze frame a moment in life. My name is
          Marie Anna Bosker and I can make this possible for you. Marie Anna
          Photography specializes in on-location photography in North and South Carolina, although I have done
          shoots as far away as New York or Jamaica!! Do you have grandparents
          who would like a portrait in their garden? Perhaps your children have
          a rocking good time in a bubble bath? You can come to me or I'll come
          there. There are poems in my pictures. I make a recording and
          remembrance of life. When I remove my lens cap, it's to capture life
          as we will never see it again. Life lives, and then the moment passes.
          Whether the event is an engagement, wedding, anniversary, maternity,
          ballet recital, or family holiday...Marie Anna Photography captures
          the art and beauty that is life.
                </p>
                <p>
          From an early age art was important in my family. Several members
          paint, sketch, and play instruments. I decided I could combine it all
          with my camera. Photography is art for me and I knew early on that
          this was what I wanted to do.
                </p>
                <p>
          As mentioned above, I specialize in on-location photography which
          means I travel to the client. Whether it's a park, home, beach or
          mountains, no need to twist my arm, I love to travel.
                </p>
                <p>
          My approach and technique are simple. The client calls the shots,
          especially if the client is under three feet tall. Using a
          non-intrusive approach with kids allows them to be themselves.
          Sometimes that might include a mud-bath or a delicate conversation
          during tea sitting next to a stuffed bear. Whatever the case, I
          capture them in their moments not mine.
                </p>
                <p>
          I received an initial photography education at Sacramento City
          College, and I will always be involved in some form of study. I have
          had my commercial pictures published in the Sacramento Bee, KCRA News,
          Sacramento Kids Directory, Kidaround Magazine, the Sacramento Marriott
          website and many other brochures for local businesses.
                </p>
                <p>
          Like the Academy Awards, I have so many people to thank! My friends
          and family have always encouraged me to enter into professional
          photography.
                </p>
                <p>Thank you for your love and support.</p>
                <p>Marie Anna Bosker</p>
            </div>
        </div>
    );
}
