import { Row, Col, Typography, Button, Flex, Tag } from 'antd';
import { CheckCircleFilled, ArrowRightOutlined } from '@ant-design/icons';
import { SIGNATURE_FEATURES } from '../../data/siteData';

const { Title, Paragraph, Text } = Typography;

const SignatureProgram: React.FC = () => (
  <section className="section-alt" id="program">
    <div className="container-main">
      <Row gutter={[48, 32]} align="middle">
        <Col xs={24} lg={12}>
          <Text strong style={{ color: '#1B5E3B', fontSize: 13, letterSpacing: 2, textTransform: 'uppercase' }}>
            OUR PROGRAM
          </Text>
          <Title level={2} style={{ marginTop: 8, marginBottom: 16 }}>
            MedPath <span style={{ color: '#1B5E3B' }}>Signature Guidance</span>
          </Title>
          <Paragraph type="secondary" style={{ fontSize: 15, maxWidth: 420 }}>
            End-to-end NEET counseling with personalized support at every step.
          </Paragraph>
          <Button type="primary" shape="round" size="large" icon={<ArrowRightOutlined />} iconPlacement="end" style={{ marginTop: 8 }}>
            Know More
          </Button>
        </Col>
        <Col xs={24} lg={12}>
          <Row gutter={[16, 16]}>
            {SIGNATURE_FEATURES.map((f) => (
              <Col key={f} xs={12}>
                <Tag
                  icon={<CheckCircleFilled />}
                  color="green"
                  style={{ fontSize: 14, padding: '8px 16px', borderRadius: 8, display: 'inline-flex', alignItems: 'center', gap: 6 }}
                >
                  {f}
                </Tag>
              </Col>
            ))}
          </Row>
          {/* Decorative illustration */}
          <Flex justify="flex-end" style={{ marginTop: 24 }}>
            <Flex
              align="center"
              justify="center"
              className="w-[100px] h-[100px] md:w-[120px] md:h-[120px]"
              style={{
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #e8f5ec 0%, #d0ead8 100%)',
                fontSize: 48,
              }}
            >
              📋
            </Flex>
          </Flex>
        </Col>
      </Row>
    </div>
  </section>
);

export default SignatureProgram;
