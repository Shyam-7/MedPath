import { Row, Col, Card, Typography, Flex } from 'antd';
import SectionTitle from '../common/SectionTitle';
import { SERVICES } from '../../data/siteData';

const { Text } = Typography;

const ServicesSection: React.FC = () => (
  <section className="section" id="services">
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>
      <SectionTitle subtitle="OUR SERVICES" title="Complete Support for NEET Aspirants" />
      <Row gutter={[24, 24]} justify="center">
        {SERVICES.map((s) => (
          <Col key={s.title} xs={24} sm={12} md={8}>
            <Card hoverable className="feature-card" style={{ height: '100%', borderRadius: 16 }}>
              <Flex vertical align="center" gap={12}>
                <Flex
                  align="center"
                  justify="center"
                  style={{ width: 64, height: 64, borderRadius: 16, background: '#F0F7F3' }}
                >
                  <s.icon style={{ fontSize: 28, color: '#1B5E3B' }} />
                </Flex>
                <Text strong style={{ fontSize: 16 }}>{s.title}</Text>
                <Text type="secondary" style={{ textAlign: 'center', fontSize: 13 }}>{s.desc}</Text>
              </Flex>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </section>
);

export default ServicesSection;
