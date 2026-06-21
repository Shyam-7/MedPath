import { Collapse, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import SectionTitle from '../common/SectionTitle';
import { FAQ_ITEMS } from '../../data/siteData';

const { Paragraph } = Typography;

const FAQSection: React.FC = () => (
  <section className="section" id="faq">
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 48px' }} className="max-md:!px-6">
      <SectionTitle subtitle="FREQUENTLY ASKED QUESTIONS" title="Got Questions? We've Got Answers" />
      <Collapse
        accordion
        className="faq-collapse"
        expandIcon={({ isActive }) => (
          <PlusOutlined rotate={isActive ? 45 : 0} style={{ fontSize: 16, color: '#1B5E3B', transition: 'transform 0.3s' }} />
        )}
        expandIconPlacement="end"
        style={{ background: 'transparent', border: 'none' }}
        items={FAQ_ITEMS.map((item, i) => ({
          key: String(i),
          label: item.question,
          children: <Paragraph type="secondary">{item.answer}</Paragraph>,
          style: {
            marginBottom: 12,
            borderRadius: 12,
            background: '#fff',
            border: '1px solid #e8e8e8',
            overflow: 'hidden',
          },
        }))}
      />
    </div>
  </section>
);

export default FAQSection;
