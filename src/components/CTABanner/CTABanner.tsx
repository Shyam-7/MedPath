import { Row, Col, Typography, Button, Flex } from 'antd';
import { ArrowRightOutlined, WhatsAppOutlined, CheckCircleFilled } from '@ant-design/icons';

const { Title, Text } = Typography;

const ctaFeatures = ['One-to-one guidance', 'Personalized strategy', '100% Confidential'];

const CTABanner: React.FC = () => (
  <section className="cta-banner">
    <div className="container-main">
      <Row gutter={[48, 24]} align="middle">
        <Col xs={24} lg={16}>
          <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14 }}>
            Confused about the next step?
          </Text>
          <Title level={2} style={{ color: '#fff', margin: '8px 0 16px' }}>
            Book a FREE Counseling Session Now!
          </Title>
          <Flex gap={24} wrap="wrap">
            {ctaFeatures.map((f) => (
              <Flex key={f} align="center" gap={8}>
                <CheckCircleFilled style={{ color: '#F5A623' }} />
                <Text style={{ color: '#fff', fontSize: 14 }}>{f}</Text>
              </Flex>
            ))}
          </Flex>
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3" style={{ marginTop: '24px' }}>
            <Button
              type="default"
              size="large"
              shape="round"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              style={{ background: '#fff', color: '#1B5E3B', fontWeight: 600, borderColor: '#fff' }}
              href="https://wa.me/919043003083"
              target="_blank"
            >
              Book Free Counseling
            </Button>
            <Text className="hidden sm:inline" style={{ color: 'rgba(255,255,255,0.7)' }}>or</Text>
            <Button
              size="large"
              shape="round"
              icon={<WhatsAppOutlined />}
              style={{ background: 'transparent', color: '#fff', borderColor: '#fff' }}
              href="https://wa.me/919043003083"
              target="_blank"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </Col>
        <Col xs={0} lg={8}>
          <Flex justify="flex-end">
            <Flex
              align="center"
              justify="center"
              style={{
                width: 140,
                height: 140,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                fontSize: 56,
              }}
            >
              📞
            </Flex>
          </Flex>
        </Col>
      </Row>
    </div>
  </section>
);

export default CTABanner;
