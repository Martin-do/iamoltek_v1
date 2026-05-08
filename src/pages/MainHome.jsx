import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BriefcaseBusiness, Crown, HandHeart, Landmark, Mail, MapPin, ShieldCheck } from 'lucide-react';
import formal from '../assets/oltek-formal.jpg';
import traditional from '../assets/oltek-traditional.png';
import pro5 from '../assets/pro_pers8 (5).jpeg';
import pro6 from '../assets/pro_pers8 (6).jpeg';
import honour1 from '../assets/honour7 (1).jpeg';
import honour2 from '../assets/honour8 (2).jpeg';

const pillars = [
  {
    icon: BriefcaseBusiness,
    title: 'Enterprise',
    text: 'Strategy, operations, real estate, and facility leadership shaped by practical execution.',
  },
  {
    icon: Crown,
    title: 'Heritage',
    text: 'Atobase of Okeluse Kingdom, carrying recognition as a call to dignity and responsibility.',
  },
  {
    icon: HandHeart,
    title: 'Impact',
    text: 'Community-facing work focused on youth empowerment, mentorship, and useful support.',
  },
];

const moments = [
  { image: honour1, label: 'Traditional Honour', title: 'Atobase of Okeluse Kingdom', href: '/story/honour' },
  { image: pro5, label: 'Portrait', title: 'Executive profile', href: '/story/profile' },
  { image: honour2, label: 'Heritage', title: 'Recognition and responsibility', href: '/story/honour' },
  { image: pro6, label: 'Personal Brand', title: 'The Oltek public identity', href: '/story/profile' },
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.55, ease: 'easeOut' },
};

const MainHome = () => {
  return (
    <motion.main className="site-shell" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="executive-hero">
        <div className="container hero-layout">
          <div className="hero-copy-block">
            <span className="kicker">Oyewale Areoye</span>
            <h1>
              Oltek is a statement of work, honour, and public service.
            </h1>
            <p>
              Entrepreneur, operator, community advocate, and Atobase of Okeluse Kingdom. A personal platform for the
              professional journey, cultural recognition, and impact work of Oyewale Areoye.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#profile">
                Explore Profile <ArrowUpRight size={18} />
              </a>
              <a className="button button-quiet" href="/initiative">
                The Initiative
              </a>
            </div>
            <div className="quick-links" aria-label="More details about Oyewale Areoye">
              <Link to="/story/honour">Traditional title</Link>
              <Link to="/story/work">Professional footprint</Link>
              <Link to="/story/impact">Community impact</Link>
            </div>
          </div>

          <div className="hero-portrait" aria-label="Portrait of Oyewale Areoye">
            <div className="portrait-orbit">
              <span>Atobase</span>
              <span>Strategy</span>
              <span>Impact</span>
            </div>
            <img src={formal} alt="Oyewale Areoye" />
          </div>
        </div>
      </section>

      <section className="identity-strip">
        <div className="container identity-grid">
          <div>
            <span>Known as</span>
            <strong>Oltek</strong>
          </div>
          <div>
            <span>Recognised as</span>
            <strong>Atobase of Okeluse Kingdom</strong>
          </div>
          <div>
            <span>Focus</span>
            <strong>Enterprise, operations, community impact</strong>
          </div>
        </div>
      </section>

      <motion.section id="profile" className="section profile-section" {...reveal}>
        <div className="container split-feature">
          <div className="framed-image tall">
            <img src={traditional} alt="Oyewale Areoye in traditional attire" />
          </div>
          <div>
            <span className="kicker">Profile</span>
            <h2>Classic presence. Modern execution.</h2>
            <p>
              Oyewale Areoye has built a reputation across facility management, real estate-facing operations,
              strategic business growth, and social impact. His work sits at the intersection of discipline, service,
              and trust.
            </p>
            <p>
              The site frames his personal story with clarity: professional credibility, cultural grounding,
              public-facing responsibility, and community-minded work.
            </p>
            <div className="signal-list">
              <Link to="/story/work"><ShieldCheck size={18} /> Integrity and accountability</Link>
              <Link to="/story/work"><Landmark size={18} /> Real estate and facility leadership</Link>
              <a href="#contact"><MapPin size={18} /> Lagos, Nigeria</a>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section id="honour" className="section honour-section" {...reveal}>
        <div className="container honour-layout">
          <div>
            <span className="kicker">Heritage & Honour</span>
            <h2>Atobase of Okeluse Kingdom.</h2>
          </div>
          <div>
            <p>
              The title adds a cultural centre to the Oltek story: recognition, rootedness, and a responsibility to
              represent more than personal success.
            </p>
            <Link className="text-link" to="/story/honour">Read more <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </motion.section>

      <motion.section id="work" className="section work-section" {...reveal}>
        <div className="container">
          <div className="section-heading">
            <span className="kicker">Professional Footprint</span>
            <h2>Built around systems, places, and people.</h2>
          </div>
          <div className="pillar-grid">
            {pillars.map(({ icon: Icon, title, text }) => (
              <article className="pillar-card" key={title}>
                <Icon size={24} />
                <h3>{title}</h3>
                <p>{text}</p>
                <Link to={title === 'Impact' ? '/story/impact' : title === 'Heritage' ? '/story/honour' : '/story/work'}>
                  More details <ArrowUpRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="moments" className="section moments-section" {...reveal}>
        <div className="container">
          <div className="section-heading compact">
            <span className="kicker">Selected Moments</span>
            <h2>Personal moments with real context.</h2>
            <p>
              This section stays small until more approved personal photos and captions are supplied.
            </p>
          </div>
          <div className="moments-grid">
            {moments.map((item, index) => (
              <Link className={`moment-card moment-${index + 1}`} key={`${item.label}-${item.title}`} to={item.href}>
                <img src={item.image} alt={item.title} />
                <div>
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="initiative" className="section initiative-preview" {...reveal}>
        <div className="container initiative-panel">
          <div>
            <span className="kicker">The Initiative</span>
            <h2>Impact should feel practical, visible, and close to people.</h2>
          </div>
          <div>
            <p>
              The Oyewale Areoye Initiative can carry the community work separately, allowing this personal site to
              stay refined while still giving impact the prominence it deserves.
            </p>
            <a className="button button-primary" href="/initiative">
              Visit Initiative <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </motion.section>

      <footer id="contact" className="footer">
        <div className="container footer-grid">
          <div>
            <span className="kicker">Contact</span>
            <h2>For partnerships, speaking, and professional enquiries.</h2>
          </div>
          <div className="contact-card">
            <a href="mailto:areoyeoyewale@outlook.com"><Mail size={18} /> areoyeoyewale@outlook.com</a>
            <a href="tel:+2348182937320">+234 818 293 7320</a>
            <small>© 2026 Oyewale Areoye. All rights reserved.</small>
          </div>
        </div>
      </footer>
    </motion.main>
  );
};

export default MainHome;
