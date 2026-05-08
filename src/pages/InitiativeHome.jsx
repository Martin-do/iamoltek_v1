import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, HeartHandshake, Sprout, UsersRound } from 'lucide-react';
import initiativeLogo from '../assets/initiative-logo.jpg';
import initiativeImpact from '../assets/initiative-impact.jpg';

const focusAreas = [
  { icon: BookOpen, title: 'Education', text: 'Learning access, mentorship, and capacity building for young people.' },
  { icon: UsersRound, title: 'Inclusion', text: 'Support that brings people into opportunity instead of leaving them at the edge.' },
  { icon: Sprout, title: 'Enterprise', text: 'Practical encouragement for small businesses, growth, and self-reliance.' },
  { icon: HeartHandshake, title: 'Wellness', text: 'Community support delivered with dignity, continuity, and care.' },
];

const InitiativeHome = () => {
  const reveal = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 0.5, ease: 'easeOut' },
  };

  return (
    <motion.main className="initiative-shell" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="initiative-hero">
        <div className="container initiative-hero-grid">
          <div>
            <span className="kicker">Oyewale Areoye Initiative</span>
            <h1>Building useful impact around people, not noise.</h1>
            <p>
              A community platform for youth empowerment, social development, economic support, and human dignity.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#focus">
                Focus Areas <ArrowUpRight size={18} />
              </a>
              <a className="button button-quiet" href="mailto:info@iamoltek.com">
                Partner With Us
              </a>
            </div>
          </div>
          <div className="initiative-image">
            <img src={initiativeLogo} alt="The Oyewale Areoye Initiative logo" />
          </div>
        </div>
      </section>

      <section id="impact" className="impact-band">
        <div className="container impact-stats">
          <div>
            <strong>500+</strong>
            <span>Youths trained</span>
          </div>
          <div>
            <strong>100+</strong>
            <span>Small businesses supported</span>
          </div>
          <div>
            <strong>3</strong>
            <span>Core communities</span>
          </div>
        </div>
      </section>

      <motion.section id="focus" className="section initiative-focus" {...reveal}>
        <div className="container">
          <div className="section-heading compact">
            <span className="kicker">Focus</span>
            <h2>Structured support with a human face.</h2>
            <p>
              The Initiative is grounded in real needs: learning, inclusion, enterprise, and wellness.
            </p>
          </div>
          <div className="focus-grid">
            {focusAreas.map(({ icon: Icon, title, text }) => (
              <article className="focus-card" key={title}>
                <Icon size={24} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="section field-section" {...reveal}>
        <div className="container field-grid">
          <div className="field-copy">
            <span className="kicker">In The Field</span>
            <h2>Show the work only when the story is true.</h2>
            <p>
              The launch message is simple: equip people with skills, support communities, and build a better tomorrow.
            </p>
          </div>
          <div className="field-gallery">
            <img src={initiativeImpact} alt="The Oyewale Areoye Initiative impact poster" />
          </div>
        </div>
      </motion.section>

      <section className="initiative-cta">
        <div className="container initiative-panel">
          <div>
            <span className="kicker">Partnership</span>
            <h2>Help turn intention into sustained impact.</h2>
          </div>
          <div>
            <p>
              Partners, sponsors, and volunteers can support programs that give young people and communities practical
              access to growth.
            </p>
            <a className="button button-primary" href="mailto:info@iamoltek.com">
              Contact Us Today <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default InitiativeHome;
