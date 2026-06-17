import { Typography, Flex } from 'antd';

const { Title, Text } = Typography;

interface SectionTitleProps {
  subtitle: string;
  title: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title, centered = true }) => (
  <Flex vertical align={centered ? 'center' : 'flex-start'} style={{ marginBottom: 48 }}>
    <Text strong style={{ color: '#1B5E3B', fontSize: 13, letterSpacing: 2, textTransform: 'uppercase' }}>
      {subtitle}
    </Text>
    <Title level={2} style={{ margin: '8px 0 0', textAlign: centered ? 'center' : 'left' }}>
      {title}
    </Title>
  </Flex>
);

export default SectionTitle;
