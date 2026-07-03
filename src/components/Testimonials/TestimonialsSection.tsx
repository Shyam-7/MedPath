import { Carousel, Card, Typography, Flex, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import SectionTitle from '../common/SectionTitle';
import { TESTIMONIALS } from '../../data/siteData';

const { Text, Paragraph } = Typography;

const TestimonialsSection: React.FC = () => (
  <section className="section-alt" id="testimonials">
    <div className="container-main">
      <SectionTitle subtitle="SUCCESS STORIES" title="What Parents &amp; Students Say" />
      <Carousel
        autoplay
        autoplaySpeed={4000}
        dots
        slidesToShow={3}
        infinite
        responsive={[
          { breakpoint: 992, settings: { slidesToShow: 2, infinite: true } },
          { breakpoint: 576, settings: { slidesToShow: 1, centerMode: false, infinite: true } },
        ]}
      >
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="testimonial-card">
            <Card
              style={{
                borderRadius: 16,
                margin: '0 12px 24px',
                minHeight: 220,
                border: '1px solid #e8e8e8',
              }}
              styles={{ body: { padding: 24 } }}
            >
              <Text style={{ fontSize: 40, color: '#1B5E3B', lineHeight: 1, fontFamily: 'Georgia, serif' }}>{'\u201C'}</Text>
              <Paragraph style={{ fontSize: 14, color: '#4B5563', minHeight: 80 }}>
                {t.quote}
              </Paragraph>
              <Flex align="center" gap={12} style={{ marginTop: 16 }}>
                <Avatar style={{ background: '#1B5E3B' }} icon={<UserOutlined />} />
                <Flex vertical>
                  <Text strong style={{ fontSize: 14 }}>{t.name}</Text>
                  <Text type="secondary" style={{ fontSize: 12 }}>{t.role}</Text>
                </Flex>
              </Flex>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  </section>
);

export default TestimonialsSection;
