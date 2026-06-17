import { Row, Col, Flex, Typography } from 'antd';
import { STATS } from '../../data/siteData';

const { Title, Text } = Typography;

const StatsBar: React.FC = () => (
  <div className="stats-bar">
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>
      <Row gutter={[32, 24]} justify="space-around">
        {STATS.map((s) => (
          <Col key={s.label} xs={12} sm={6}>
            <Flex align="center" justify="center" gap={16}>
              <Flex
                align="center"
                justify="center"
                style={{ width: 52, height: 52, borderRadius: 12, background: 'rgba(255,255,255,0.15)' }}
              >
                <s.icon style={{ fontSize: 24, color: '#fff' }} />
              </Flex>
              <Flex vertical>
                <Title level={3} style={{ color: '#fff', margin: 0, fontSize: 28, fontWeight: 800 }}>
                  {s.value}
                </Title>
                <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13 }}>{s.label}</Text>
              </Flex>
            </Flex>
          </Col>
        ))}
      </Row>
    </div>
  </div>
);

export default StatsBar;
