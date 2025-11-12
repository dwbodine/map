// Wedding.tsx
import React, { useEffect } from 'react';
import './Wedding.css';

const Wedding: React.FC = () => {
  // Set page title inside an effect (React 18+/19 best practice)
  useEffect(() => {
    document.title = 'Wedding Photography - Marie Anna Photography';
  }, []);

  return (
    <section className="wedding">
      <h1 className="entry-title">Wedding Photography</h1>

      <div className="entry-content">
        <p>
          I have been photographing weddings for over 15 years, and what
          I&apos;ve learned is that no two weddings are the same. I have done
          weddings at hotels, in an old theater on Halloween day (complete with
          a “Corpse Bride” theme), barefoot on the beach in Jamaica, with large
          groups, small groups, just the couple — even with shotguns firing
          overhead during a hunting expedition in Yuba City. I&apos;ve seen it
          all, and I know that each situation is special, deserving of its own
          unique attention.
        </p>

        <p>
          That&apos;s why I want to sit down with you for a complimentary
          in-person consultation and talk about how to make your wedding photos
          work for you. To me, it&apos;s not just about snapshots from a
          photographer who showed up, clicked a few shots, and left. I care
          about building a personal connection with my couples — many have
          stayed in touch for years after their weddings, some returning for
          anniversary or family sessions, others just because we became friends!
          Even though clients often tell me they “hardly notice I&apos;m there,”
          I always strive to make the day a fun, joyful experience — with photos
          you&apos;ll treasure for a lifetime.
        </p>

        <p>
          That&apos;s also why you won&apos;t see any package prices or rigid
          rules here. I&apos;m not a cynical photographer just in it for the
          paycheck — I&apos;m here to capture lasting memories, and you
          can&apos;t put a price on that. Whether you&apos;re heading to the
          county clerk&apos;s office or preparing for a full-blown destination
          celebration, I&apos;ll work to create something beautiful that fits
          your style and your budget.
        </p>

        <p>
          So take a look at what a few of my couples have said — and then give
          me a call…
        </p>

        <blockquote className="italicquote">
          <p>
            “One word simply describes what Marie&apos;s photography was able to
            do for our wedding — AMAZING! From start to finish, Marie handled
            the entire wedding like the professional that she is — extremely
            patient! There was not an aspect of the wedding that wasn&apos;t
            captured. Every single emotion, whether it was romantic, humorous,
            timeless, or classic — moments we will never be able to capture
            again. She was able to accomplish this with truly amazing results.”
          </p>
          <p>
            “We are more than impressed and ecstatic with the amount of photos
            that we received. Even more impressive, we were able to relive our
            entire wedding through the pictures — that is a powerful gift! You
            didn&apos;t even feel her presence, which made everything natural.”
          </p>
          <p>
            “We truly feel that we had the best possible experience with Marie
            Anna Photography and would strongly recommend her to anyone
            searching for the perfect wedding photographer. We feel we gained
            new friends out of this, not just someone to take our pictures.
            Thank you so much for all of your hard work. It hasn&apos;t gone
            unnoticed!”
          </p>
          <p className="testimonial-author">— Anne &amp; Bryan</p>
        </blockquote>

        <blockquote className="italicquote">
          <p>“You captured our love beautifully!” — Cariann &amp; James</p>
        </blockquote>

        <blockquote className="italicquote">
          <p>
            “There is a reason our entire family comes to you to capture our
            moments and memories… thank you!!” — Christy &amp; Bob
          </p>
        </blockquote>

        <blockquote className="italicquote">
          <p>
            “We have so many beautiful pictures of our wedding day. I would not
            have trusted my special day to anyone else.” — Theresa
            (photographer!) &amp; Joe
          </p>
        </blockquote>

        <blockquote className="italicquote">
          <p>
            “WOW!! Seeing my wedding through your eyes was magical.” — Stacy
            &amp; Tim
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default Wedding;
