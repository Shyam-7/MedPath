import { ConfigProvider, Layout } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import themeConfig from './theme/themeConfig';
import AppHeader from './components/Layout/AppHeader';
import AppFooter from './components/Layout/AppFooter';
import HomePage from './pages/Home/HomePage';

const App: React.FC = () => (
  <ConfigProvider theme={themeConfig}>
    <BrowserRouter>
      <Layout>
        <AppHeader />
        <Layout.Content>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Layout.Content>
        <AppFooter />
      </Layout>
    </BrowserRouter>
  </ConfigProvider>
);

export default App;
