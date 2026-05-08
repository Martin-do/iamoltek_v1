import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

const stories = {
  profile: {
    kicker: 'Profile',
    title: 'The person behind Oltek',
    body: [
      'Oyewale Areoye stands at the intersection of enterprise, public presence, cultural recognition, and community-minded leadership.',
      'His story is shaped by work across operations, real estate-facing ventures, facility management, strategy, and service.',
    ],
  },
  honour: {
    kicker: 'Heritage',
    title: 'Atobase of Okeluse Kingdom',
    body: [
      'The Atobase title carries honour, heritage, and responsibility. It adds a rooted cultural dimension to the Oltek identity.',
      'It reflects recognition from community and tradition, and a call to serve with dignity.',
    ],
  },
  work: {
    kicker: 'Work',
    title: 'Professional footprint',
    body: [
      'The work story covers strategy, operations, real estate-facing ventures, facility management, and enterprise leadership without turning this personal site into a company brochure.',
      'The emphasis remains on the person: judgment, discipline, service, and the professional range behind the Oltek name.',
    ],
  },
  impact: {
    kicker: 'Impact',
    title: 'Community and initiative work',
    body: [
      'The Initiative gives the impact work a separate home. This keeps the main site refined while allowing outreach, partners, targets, and field updates to grow over time.',
      'As the Initiative launches publicly, this page can connect to verified programs, reports, media, and Instagram updates.',
    ],
  },
  moments: {
    kicker: 'Moments',
    title: 'Selected public moments',
    body: [
      'These moments capture honour, public presence, and the visual identity surrounding the Oltek story.',
      'Each image is part of a wider record of personal milestones, traditional recognition, and community-facing life.',
    ],
  },
};

const StoryDetail = () => {
  const { slug } = useParams();
  const story = stories[slug] || stories.profile;

  return (
    <motion.main className="detail-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="detail-hero">
        <div className="container detail-card">
          <Link className="back-link" to="/"><ArrowLeft size={18} /> Back home</Link>
          <span className="kicker">{story.kicker}</span>
          <h1>{story.title}</h1>
          {story.body.map((text) => <p key={text}>{text}</p>)}
          {slug === 'impact' && (
            <Link className="button button-primary" to="/initiative">
              Open Initiative <ArrowUpRight size={18} />
            </Link>
          )}
        </div>
      </section>
    </motion.main>
  );
};

export default StoryDetail;
