import { Row, Col, Flex, Typography } from 'antd';
import { STATS } from '../../data/siteData';

const { Title, Text } = Typography;

const StatsBar: React.FC = () => (
  <div className="stats-bar">
    <div className="container-main">
      <Row gutter={[32, 24]} justify="space-around">
        {STATS.map((s) => (
          <Col key={s.label} xs={12} sm={6}>
            <Flex align="center" justify="center" gap={16}>
              <Flex
                align="center"
                justify="center"
                className="w-10 h-10 md:w-[52px] md:h-[52px]"
                style={{ borderRadius: 12, background: 'rgba(255,255,255,0.15)' }}
              >
                <s.icon className="text-xl md:text-2xl" style={{ color: '#fff' }} />
              </Flex>
              <Flex vertical>
                <Title level={3} className="md:!text-[28px]" style={{ color: '#fff', margin: 0, fontWeight: 800 }}>
                  {s.value}
                </Title>
                <Text className="text-[12px] md:text-[13px]" style={{ color: 'rgba(255,255,255,0.8)' }}>{s.label}</Text>
              </Flex>
            </Flex>
          </Col>
        ))}
      </Row>
    </div>
  </div>
);

export default StatsBar;
