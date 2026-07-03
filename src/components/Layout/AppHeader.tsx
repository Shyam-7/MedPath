import { Layout, Menu, Button, Flex, Space, Drawer } from 'antd';
import { PhoneOutlined, WhatsAppOutlined, CalendarOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import MedPathLogo from '../common/MedPathLogo';
import { NAV_ITEMS } from '../../data/siteData';
import { useState, useCallback } from 'react';

const AppHeader: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavClick = useCallback((info: { key: string }) => {
    setDrawerOpen(false);
    if (info.key === 'contact') {
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  return (
    <Layout.Header
      className="!px-4 md:!px-12"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        borderBottom: '1px solid #f0f0f0',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        height: 72,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Flex align="center" justify="space-between" style={{ width: '100%', maxWidth: 1280, margin: '0 auto' }}>
        <MedPathLogo />

        {/* Desktop navigation */}
        <div className="hidden xl:flex" style={{ flex: 1, minWidth: 0 }}>
          <Menu
            mode="horizontal"
            items={NAV_ITEMS}
            style={{ flex: 1, justifyContent: 'center', border: 'none', fontSize: 14 }}
            selectedKeys={['home']}
            onClick={handleNavClick}
          />
        </div>

        {/* Desktop CTA buttons */}
        <div className="hidden xl:flex" style={{ alignItems: 'center', flexShrink: 0 }}>
          <Space size="small">
            <Button icon={<PhoneOutlined />} type="default" shape="round" href="tel:+919043003083">
              Call Now
            </Button>
            <Button
              icon={<WhatsAppOutlined />}
              style={{ background: '#25D366', borderColor: '#25D366', color: '#fff' }}
              shape="round"
              href="https://wa.me/919043003083"
              target="_blank"
            >
              Chat on WhatsApp
            </Button>
            <Button 
              type="primary" 
              shape="round" 
              icon={<CalendarOutlined />}
              href="https://wa.me/919043003083"
              target="_blank"
            >
              Book Free Counseling
            </Button>
          </Space>
        </div>

        {/* Mobile hamburger */}
        <Button
          type="text"
          icon={<MenuOutlined style={{ fontSize: 20 }} />}
          className="xl:!hidden"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
        />
      </Flex>

      {/* Mobile drawer menu */}
      <Drawer
        title={<MedPathLogo />}
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        size="default"
        closeIcon={<CloseOutlined />}
        className="mobile-menu"
      >
        <Menu
          mode="inline"
          items={NAV_ITEMS}
          selectedKeys={['home']}
          style={{ borderInlineEnd: 'none', marginBottom: 24 }}
          onClick={handleNavClick}
        />
        <Flex vertical gap={12} style={{ padding: '0 24px' }}>
          <Button icon={<PhoneOutlined />} type="default" shape="round" block href="tel:+919043003083">
            Call Now
          </Button>
          <Button
            icon={<WhatsAppOutlined />}
            style={{ background: '#25D366', borderColor: '#25D366', color: '#fff' }}
            shape="round"
            block
            href="https://wa.me/919043003083"
            target="_blank"
          >
            Chat on WhatsApp
          </Button>
          <Button 
            type="primary" 
            shape="round" 
            icon={<CalendarOutlined />} block
            href="https://wa.me/919043003083"
            target="_blank"
          >
            Book Free Counseling
          </Button>
        </Flex>
      </Drawer>
    </Layout.Header>
  );
};

export default AppHeader;
