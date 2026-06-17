import { Row, Col, Card, Typography, Flex, Badge } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import SectionTitle from '../common/SectionTitle';
import { COLLEGES } from '../../data/siteData';

const { Text, Paragraph } = Typography;

const CollegesSection: React.FC = () => (
  <section className="section" id="colleges">
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>
      <SectionTitle subtitle="COLLEGES WE COVER" title="Government, Private & Deemed Universities Across India" />
      <Row gutter={[24, 24]} justify="center" align="stretch">
        {COLLEGES.map((c) => (
          <Col key={c.title} xs={12} sm={8} md={4}>
            <Card
              hoverable
              className="feature-card"
              style={{ height: '100%', borderRadius: 16 }}
              styles={{ body: { padding: 20 } }}
            >
              <Flex vertical align="center" gap={10}>
                <Flex
                  align="center"
                  justify="center"
                  style={{ width: 52, height: 52, borderRadius: 12, background: '#F0F7F3' }}
                >
                  <c.icon style={{ fontSize: 22, color: '#1B5E3B' }} />
                </Flex>
                <Text strong style={{ fontSize: 13, textAlign: 'center' }}>{c.title}</Text>
              </Flex>
            </Card>
          </Col>
        ))}
        {/* Pan India highlight card */}
        <Col xs={24} sm={12} md={4}>
          <Badge.Ribbon text="Pan India" color="#1B5E3B">
            <Card
              style={{
                height: '100%',
                borderRadius: 16,
                background: 'linear-gradient(135deg, #f0f7f3 0%, #e0efe5 100%)',
                border: '2px solid #1B5E3B',
              }}
              styles={{ body: { padding: 20 } }}
            >
              <Flex vertical align="center" gap={8} style={{ marginTop: 8 }}>
                <GlobalOutlined style={{ fontSize: 28, color: '#1B5E3B' }} />
                <Text strong style={{ color: '#1B5E3B', fontSize: 14 }}>Pan India Coverage</Text>
                <Paragraph type="secondary" style={{ fontSize: 11, textAlign: 'center', margin: 0 }}>
                  We provide counseling for all states and union territories.
                </Paragraph>
              </Flex>
            </Card>
          </Badge.Ribbon>
        </Col>
      </Row>
    </div>
  </section>
);

export default CollegesSection;
