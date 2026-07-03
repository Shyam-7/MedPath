import { Row, Col, Typography, Flex, Space, Divider, Button } from 'antd';
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';
import MedPathLogo from '../common/MedPathLogo';
import { FOOTER_QUICK_LINKS, FOOTER_SERVICES, CONTACT_INFO } from '../../data/siteData';

const { Text, Link, Paragraph } = Typography;

const socialIcons = [FacebookOutlined, InstagramOutlined, YoutubeOutlined, LinkedinOutlined];

const AppFooter: React.FC = () => (
  <footer className="footer-main" id="contact">
    <div className="container-main">
      <Row gutter={[48, 40]}>
        {/* Brand column */}
        <Col xs={24} sm={12} lg={7}>
          <MedPathLogo dark />
          <Paragraph style={{ color: '#94A3B8', fontSize: 13, margin: '16px 0', maxWidth: 260 }}>
            We are committed to guiding NEET aspirants toward their dream medical college with expert counseling and support at every step.
          </Paragraph>
          <Space size="middle">
            {socialIcons.map((Icon, i) => (
              <Flex
                key={i}
                align="center"
                justify="center"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  border: '1px solid #334155',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
              >
                <Icon style={{ color: '#94A3B8', fontSize: 16 }} />
              </Flex>
            ))}
          </Space>
        </Col>

        {/* Quick Links */}
        <Col xs={12} sm={6} lg={5}>
          <Text strong style={{ color: '#fff', fontSize: 15, display: 'block', marginBottom: 20 }}>
            Quick Links
          </Text>
          <Flex vertical gap={12}>
            {FOOTER_QUICK_LINKS.map((l) => (
              <Link 
                key={l.label} 
                style={{ color: '#94A3B8', fontSize: 14, cursor: 'pointer' }}
                onClick={(e) => {
                  e.preventDefault();
                  const id = l.href.replace('#', '');
                  if (id) {
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                {l.label}
              </Link>
            ))}
          </Flex>
        </Col>

        {/* Our Services */}
        <Col xs={12} sm={6} lg={5}>
          <Text strong style={{ color: '#fff', fontSize: 15, display: 'block', marginBottom: 20 }}>
            Our Services
          </Text>
          <Flex vertical gap={12}>
            {FOOTER_SERVICES.map((l) => (
              <Link key={l.label} href={l.href} style={{ color: '#94A3B8', fontSize: 14 }}>
                {l.label}
              </Link>
            ))}
          </Flex>
        </Col>

        {/* Contact + Working Hours */}
        <Col xs={24} sm={12} lg={7}>
          <Text strong style={{ color: '#fff', fontSize: 15, display: 'block', marginBottom: 20 }}>
            Contact Us
          </Text>
          <Flex vertical gap={12}>
            <Flex align="center" gap={10}>
              <CONTACT_INFO.phoneIcon style={{ color: '#1B5E3B', fontSize: 16 }} />
              <Flex vertical gap={0}>
                <Text style={{ color: '#94A3B8', fontSize: 14 }}>{CONTACT_INFO.phone1}</Text>
              </Flex>
            </Flex>
            <Flex align="center" gap={10}>
              <CONTACT_INFO.emailIcon style={{ color: '#1B5E3B', fontSize: 16 }} />
              <Text style={{ color: '#94A3B8', fontSize: 14 }}>{CONTACT_INFO.email}</Text>
            </Flex>
            <Flex align="center" gap={10}>
              <CONTACT_INFO.addressIcon style={{ color: '#1B5E3B', fontSize: 16 }} />
              <Text style={{ color: '#94A3B8', fontSize: 14 }}>{CONTACT_INFO.address}</Text>
            </Flex>
          </Flex>
          <Text strong style={{ color: '#fff', fontSize: 14, display: 'block', margin: '20px 0 8px' }}>
            Working Hours
          </Text>
          <Text style={{ color: '#94A3B8', fontSize: 13, display: 'block' }}>{CONTACT_INFO.workingHours.weekday}</Text>
          <Text style={{ color: '#94A3B8', fontSize: 13, display: 'block' }}>{CONTACT_INFO.workingHours.weekend}</Text>
          {/* <Button
            icon={<WhatsAppOutlined />}
            style={{ background: '#25D366', borderColor: '#25D366', color: '#fff', marginTop: 16 }}
            shape="round"
            href="https://wa.me/919043003083"
            target="_blank"
          >
            Chat on WhatsApp
          </Button> */}
        </Col>
      </Row>

      <Divider style={{ borderColor: '#1E293B', margin: '32px 0 20px' }} />

      <Flex justify="space-between" align="center" wrap="wrap" gap={12}>
        <Text style={{ color: '#64748B', fontSize: 13 }}>
          © {new Date().getFullYear()} MedPath. All Rights Reserved.
        </Text>
        <Space separator={<Text style={{ color: '#475569' }}>|</Text>}>
          <Link style={{ color: '#64748B', fontSize: 13 }}>Privacy Policy</Link>
          <Link style={{ color: '#64748B', fontSize: 13 }}>Terms &amp; Conditions</Link>
        </Space>
      </Flex>
    </div>
  </footer>
);

export default AppFooter;
