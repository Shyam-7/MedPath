import { Row, Col, Typography, Button, Card, Flex, Space } from 'antd';
import { ArrowRightOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { HERO_FEATURES, GUIDE_STEPS } from '../../data/siteData';

const { Title, Text, Paragraph } = Typography;

const HeroSection: React.FC = () => (
  <>
    <div className="hero-bg" style={{ padding: '64px 0 48px' }}>
      <div className="container-main">
        <Row gutter={[48, 32]} align="middle">
          {/* Left content */}
          <Col xs={24} lg={13}>
            <Text strong style={{ color: '#1B5E3B', fontSize: 13, letterSpacing: 2, textTransform: 'uppercase' }}>
              NEET UG COUNSELING &amp; ADMISSION GUIDANCE
            </Text>
            <Title className="!text-3xl md:!text-[48px] !leading-tight !my-4">
              Your Path to{' '}
              <br className="hidden md:block" />
              a <span style={{ color: '#1B5E3B' }}>Medical Future</span>
            </Title>
            <Paragraph className="text-[15px] md:text-[17px]" style={{ color: '#6B7280', maxWidth: 480, marginBottom: 12 }}>
              Expert guidance for NEET aspirants and parents to choose the right college and secure your dream medical seat.
            </Paragraph>

            {/* Mini feature row */}
            <Flex gap={24} wrap="wrap" className="my-4 md:my-6 md:mb-8">
              {HERO_FEATURES.map((f) => (
                <Flex key={f.title} align="center" gap={8}>
                  <f.icon style={{ fontSize: 18, color: '#1B5E3B' }} />
                  <Text style={{ fontSize: 13, fontWeight: 500 }}>{f.title}</Text>
                </Flex>
              ))}
            </Flex>
            
            <div style={{ marginTop: '20px' }}>
              <Space size="middle" className="flex flex-wrap">
                <Button 
                  type="primary" 
                  size="large" 
                  shape="round" 
                  icon={<ArrowRightOutlined />} 
                  iconPlacement="end"
                  href="https://wa.me/919043003083"
                  target="_blank"
                  >
                  Book a Free Counseling Session
                </Button>
                <Button size="large" shape="round" icon={<PlayCircleOutlined />}>
                  Know More
                </Button>
              </Space>
            </div>
          </Col>

          {/* Right — Guide card */}
          <Col xs={24} lg={11}>
            <Flex justify="center" style={{ position: 'relative' }}>
              {/* Placeholder hero image (gradient circle) */}
              <div
                className="w-[200px] h-[220px] sm:w-[240px] sm:h-[280px] md:w-[340px] md:h-[380px] flex items-center justify-center text-5xl sm:text-6xl md:text-8xl"
                style={{
                  borderRadius: '50% 50% 50% 50% / 45% 45% 55% 55%',
                  background: 'linear-gradient(180deg, #d4e8dc 0%, #b8d8c4 100%)',
                }}
              >
                🩺
              </div>
              {/* Floating guide card */}
              <Card
                className="absolute top-4 w-[180px] sm:w-[200px] md:w-[240px] rounded-2xl shadow-xl right-0 sm:-right-2 md:-right-5"
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
