import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

const stories = {
  profile: {
    kicker: 'Profile',
    title: 'The person behind Oltek',
    body: [
      'Oyewale Areoye is presented here as a professional, public-facing individual, and community-minded leader. The site keeps the focus on his personal story, while acknowledging the sectors that shaped his work.',
      'His profile should continue to grow with verified milestones, interviews, photographs, and achievements supplied by the owner or drawn from approved public sources.',
    ],
  },
  honour: {
    kicker: 'Heritage',
    title: 'Atobase of Okeluse Kingdom',
    body: [
      'The Atobase title gives the personal brand a cultural anchor. It should be treated with dignity: not as decoration, but as a sign of recognition, responsibility, and rooted identity.',
      'When official coronation photos, dates, and captions are confirmed, this page can become a richer archive of the honour and its meaning.',
    ],
  },
  work: {
    kicker: 'Work',
    title: 'Professional footprint',
    body: [
      'The work story covers strategy, operations, real estate-facing ventures, facility management, and enterprise leadership without turning this personal site into a company brochure.',
      'Specific businesses can influence tone and credibility, but named features should remain limited to what the owner wants represented as personal.',
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
      'This gallery should only carry images with true context. Until captions are confirmed, broad labels are better than pretending every picture has a specific event story.',
      'The next content pass should replace placeholders with approved Instagram or supplied photographs and short, factual captions.',
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
