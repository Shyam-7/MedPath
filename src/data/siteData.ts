import {
  TeamOutlined,
  AimOutlined,
  BankOutlined,
  SafetyCertificateOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
  SolutionOutlined,
  FileDoneOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';

export const NAV_ITEMS = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About Us' },
  { key: 'neet-counseling', label: 'NEET UG Counseling' },
  {
    key: 'colleges',
    label: 'Colleges',
    children: [
      { key: 'aiims', label: 'All AIIMS' },
      { key: 'jipmer', label: 'JIPMER' },
      { key: 'state-govt', label: 'State Government Colleges' },
      { key: 'deemed', label: 'Deemed Universities' },
      { key: 'private', label: 'Top Private Colleges' },
    ],
  },
  {
    key: 'resources',
    label: 'Resources',
    children: [
      { key: 'blog', label: 'Blog' },
      { key: 'faqs', label: 'FAQs' },
      { key: 'cutoffs', label: 'Previous Year Cut-offs' },
    ],
  },
  { key: 'contact', label: 'Contact Us' },
];

export const HERO_FEATURES = [
  { icon: TeamOutlined, title: 'Expert Counselors', desc: 'Experienced professionals guiding you.' },
  { icon: AimOutlined, title: 'Personalized Strategy', desc: 'Custom college list and choice filling.' },
  { icon: BankOutlined, title: 'Best College Options', desc: 'Government, Private & Deemed universities.' },
  { icon: SafetyCertificateOutlined, title: 'End-to-End Support', desc: 'From registration to admission.' },
];

export const GUIDE_STEPS = [
  { title: 'NEET Counseling', desc: 'AIQ & State Quota', icon: FileTextOutlined },
  { title: 'College Selection', desc: 'Smart & Personalized', icon: BankOutlined },
  { title: 'Choice Filling', desc: 'Strategy that Maximizes Your Chances', icon: CheckCircleOutlined },
  { title: 'Admission Support', desc: 'From Documents to Final Admission', icon: SafetyCertificateOutlined },
];

export const STATS = [
  { value: '2500+', label: 'Students Guided', icon: TeamOutlined },
  { value: '500+', label: 'Colleges Covered', icon: BankOutlined },
  { value: '98%', label: 'Success Rate', icon: CheckCircleOutlined },
  { value: '4.9/5', label: 'Parent Satisfaction', icon: SafetyCertificateOutlined },
];

export const SERVICES = [
  {
    icon: FileTextOutlined,
    title: 'NEET UG Counseling',
    desc: 'AIQ, State Quota & Deemed Counseling Support',
  },
  {
    icon: BankOutlined,
    title: 'College Selection',
    desc: 'Personalized college list based on your rank, category & preferences',
  },
  {
    icon: SolutionOutlined,
    title: 'Choice Filling Support',
    desc: 'Smart choice filling strategy to maximize your chances',
  },
  {
    icon: FileDoneOutlined,
    title: 'Admission Assistance',
    desc: 'Help in documentation, verification & admission process',
  },
  {
    icon: SafetyCertificateOutlined,
    title: 'Post Admission Support',
    desc: 'Assistance even after admission for a smooth experience',
  },
];

export const SIGNATURE_FEATURES = [
  'Personalized Counseling',
  'Best College Options',
  'Choice Filling Support',
  'Round-wise Strategy',
  'Documentation Support',
  'Priority Support',
];

export const COLLEGES = [
  { title: 'All AIIMS', icon: BankOutlined },
  { title: 'JIPMER', icon: BankOutlined },
  { title: 'All State Government Colleges', icon: BankOutlined },
  { title: 'Deemed Universities', icon: BankOutlined },
  { title: 'Top Private Colleges', icon: BankOutlined },
];

export const TESTIMONIALS = [
  {
    quote: 'MedPath guided us at every step. The choice filling strategy was excellent and my daughter got her dream college.',
    name: 'Neha Sharma',
    role: 'Parent',
  },
  {
    quote: 'Very professional team. They analyze your rank perfectly and suggest the best possible options. Highly recommended!',
    name: 'Rohit Verma',
    role: 'NEET Aspirant',
  },
  {
    quote: 'From college selection to admission, everything was handled so smoothly. Thank you MedPath!',
    name: 'Anjali Gupta',
    role: 'Parent',
  },
  {
    quote: 'The team is very supportive and always available. Their strategy for choice filling was excellent.',
    name: 'Rahul Verma',
    role: 'NEET Aspirant',
  },
  {
    quote: 'MedPath made the entire counseling process so easy. We got the best guidance and my son is now in his dream medical college.',
    name: 'Priya Sharma',
    role: 'Parent',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'Is counseling important if I have a good rank?',
    answer: 'Absolutely! Even with a good rank, choosing the right college requires careful analysis of cutoffs, seat matrices, and preferences. Our expert counselors ensure you make the best possible choice and don\'t miss out on opportunities.',
  },
  {
    question: 'Which counseling do you provide for?',
    answer: 'We provide comprehensive counseling for AIQ (All India Quota), State Quota, Deemed Universities, Central Universities (AIIMS, JIPMER), and Private Medical Colleges across India.',
  },
  {
    question: 'How much do you charge for counseling?',
    answer: 'Our counseling packages are designed to be affordable and value-driven. We offer different tiers based on the level of support you need. Contact us for a free initial consultation to discuss your requirements.',
  },
  {
    question: 'When should I start the counseling process?',
    answer: 'Ideally, you should start right after your NEET results are out. However, we recommend reaching out even before results for preliminary guidance on the counseling process, documents required, and timeline planning.',
  },
];

export const FOOTER_QUICK_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Our Services', href: '#services' },
  { label: 'Colleges Covered', href: '#colleges' },
  { label: 'Success Stories', href: '#testimonials' },
  { label: 'FAQs', href: '#faq' },
];

export const FOOTER_SERVICES = [
  { label: 'NEET UG Counseling', href: '#' },
  { label: 'College Selection', href: '#' },
  { label: 'Choice Filling Support', href: '#' },
  { label: 'Admission Assistance', href: '#' },
];

export const CONTACT_INFO = {
  phone1: '+91 90430 03083',
  email: 'info@medpath.in',
  address: 'Chennai, India',
  phoneIcon: PhoneOutlined,
  emailIcon: MailOutlined,
  addressIcon: EnvironmentOutlined,
  workingHours: {
    weekday: 'Mon - Sat: 10:00 AM - 7:00 PM',
    weekend: 'Sunday: 10:00 AM - 2:00 PM',
  },
};
