import { Row, Col, Typography, Button, Card, Flex, Space } from 'antd';
import { ArrowRightOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { HERO_FEATURES, GUIDE_STEPS } from '../../data/siteData';

const { Title, Text, Paragraph } = Typography;

const HeroSection: React.FC = () => (
  <>
    <div className="hero-bg" style={{ padding: '64px 0 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>
        <Row gutter={[48, 32]} align="middle">
          {/* Left content */}
          <Col xs={24} lg={13}>
            <Text strong style={{ color: '#1B5E3B', fontSize: 13, letterSpacing: 2, textTransform: 'uppercase' }}>
              NEET UG COUNSELING & ADMISSION GUIDANCE
            </Text>
            <Title style={{ fontSize: 48, lineHeight: 1.15, margin: '16px 0' }}>
              Your Path to{' '}
              <br />
              a <span style={{ color: '#1B5E3B' }}>Medical Future</span>
            </Title>
            <Paragraph style={{ fontSize: 17, color: '#6B7280', maxWidth: 480, marginBottom: 12 }}>
              Expert guidance for NEET aspirants and parents to choose the right college and secure your dream medical seat.
            </Paragraph>

            {/* Mini feature row */}
            <Flex gap={24} wrap="wrap" style={{ margin: '24px 0 32px' }}>
              {HERO_FEATURES.map((f) => (
                <Flex key={f.title} align="center" gap={8}>
                  <f.icon style={{ fontSize: 18, color: '#1B5E3B' }} />
                  <Text style={{ fontSize: 13, fontWeight: 500 }}>{f.title}</Text>
                </Flex>
              ))}
            </Flex>

            <Space size="middle">
              <Button type="primary" size="large" shape="round" icon={<ArrowRightOutlined />} iconPlacement="end">
                Book a Free Counseling Session
              </Button>
              <Button size="large" shape="round" icon={<PlayCircleOutlined />}>
                Know More
              </Button>
            </Space>
          </Col>

          {/* Right — Guide card */}
          <Col xs={24} lg={11}>
            <Flex justify="center" style={{ position: 'relative' }}>
              {/* Placeholder hero image (gradient circle) */}
              <div
                style={{
                  width: 340,
                  height: 380,
                  borderRadius: '50% 50% 50% 50% / 45% 45% 55% 55%',
                  background: 'linear-gradient(180deg, #d4e8dc 0%, #b8d8c4 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 80,
                }}
              >
                🩺
              </div>
              {/* Floating guide card */}
              <Card
                style={{
                  position: 'absolute',
                  right: -20,
                  top: 16,
                  width: 240,
                  borderRadius: 16,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                }}
                styles={{ body: { padding: 20 } }}
              >
                <Title level={5} style={{ margin: '0 0 4px', fontSize: 14 }}>We Guide You</Title>
                <Title level={5} style={{ margin: '0 0 16px', color: '#1B5E3B' }}>
                  at <span style={{ background: '#F5A623', padding: '2px 8px', borderRadius: 4, color: '#fff' }}>Every Step</span>
                </Title>
                <Flex vertical gap={14}>
                  {GUIDE_STEPS.map((s) => (
                    <Flex key={s.title} align="center" gap={10}>
                      <Flex
                        align="center"
                        justify="center"
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 8,
                          background: '#F0F7F3',
                          flexShrink: 0,
                        }}
                      >
                        <s.icon style={{ color: '#1B5E3B', fontSize: 16 }} />
                      </Flex>
                      <Flex vertical>
                        <Text strong style={{ fontSize: 12, lineHeight: 1.3 }}>{s.title}</Text>
                        <Text style={{ fontSize: 11, color: '#6B7280', lineHeight: 1.3 }}>{s.desc}</Text>
                      </Flex>
                    </Flex>
                  ))}
                </Flex>
              </Card>
            </Flex>
          </Col>
        </Row>
      </div>
    </div>
  </>
);

export default HeroSection;
