import HeroSection from '../../components/Hero/HeroSection';
import StatsBar from '../../components/Stats/StatsBar';
import ServicesSection from '../../components/Services/ServicesSection';
import SignatureProgram from '../../components/SignatureProgram/SignatureProgram';
import CollegesSection from '../../components/Colleges/CollegesSection';
import TestimonialsSection from '../../components/Testimonials/TestimonialsSection';
import FAQSection from '../../components/FAQ/FAQSection';
import CTABanner from '../../components/CTABanner/CTABanner';

const HomePage: React.FC = () => (
  <>
    <HeroSection />
    <StatsBar />
    <ServicesSection />
    <SignatureProgram />
    <CollegesSection />
    <TestimonialsSection />
    <FAQSection />
    <CTABanner />
  </>
);

export default HomePage;
