import type { ThemeConfig } from 'antd';

const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: '#1B5E3B',
    colorInfo: '#1A3A5C',
    colorSuccess: '#1B5E3B',
    colorWarning: '#F5A623',
    borderRadius: 8,
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize: 15,
    colorBgLayout: '#FFFFFF',
    colorText: '#1A1A2E',
    colorTextSecondary: '#6B7280',
  },
  components: {
    Button: {
      controlHeight: 42,
      paddingInline: 24,
      fontWeight: 600,
    },
    Menu: {
      itemColor: '#1A1A2E',
      itemHoverColor: '#1B5E3B',
      horizontalItemSelectedColor: '#1B5E3B',
    },
    Card: {
      paddingLG: 24,
    },
    Carousel: {
      dotActiveWidth: 24,
    },
  },
};

export default themeConfig;
