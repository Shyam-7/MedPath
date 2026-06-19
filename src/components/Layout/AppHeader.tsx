import { Layout, Menu, Button, Flex, Space } from 'antd';
import { PhoneOutlined, WhatsAppOutlined, CalendarOutlined } from '@ant-design/icons';
import MedPathLogo from '../common/MedPathLogo';
import { NAV_ITEMS } from '../../data/siteData';

const AppHeader: React.FC = () => (
  <Layout.Header
    style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      padding: '0 48px',
      borderBottom: '1px solid #f0f0f0',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      height: 72,
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <Flex align="center" justify="space-between" style={{ width: '100%', maxWidth: 1280, margin: '0 auto' }}>
      <MedPathLogo />
      <Menu
        mode="horizontal"
        items={NAV_ITEMS}
        style={{ flex: 1, justifyContent: 'center', border: 'none', fontSize: 14 }}
        selectedKeys={['home']}
      />
      <Space size="small">
        <Button icon={<PhoneOutlined />} type="default" shape="round" href="tel:+917339448332">
          Call Now
        </Button>
        <Button
          icon={<WhatsAppOutlined />}
          style={{ background: '#25D366', borderColor: '#25D366', color: '#fff' }}
          shape="round"
          href="https://wa.me/917339448332"
          target="_blank"
        >
          Chat on WhatsApp
        </Button>
        <Button type="primary" shape="round" icon={<CalendarOutlined />}>
          Book Free Counseling
        </Button>
      </Space>
    </Flex>
  </Layout.Header>
);

export default AppHeader;
