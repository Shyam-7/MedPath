const MedPathLogo: React.FC<{ dark?: boolean }> = ({ dark = false }) => (
  <svg width="180" height="44" viewBox="0 0 180 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Stethoscope M icon */}
    <rect x="2" y="6" width="32" height="32" rx="6" fill={dark ? '#2E7D52' : '#1B5E3B'} />
    <text x="18" y="30" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="22">M</text>
    {/* Text */}
    <text x="42" y="22" fill={dark ? '#FFFFFF' : '#1A1A2E'} fontFamily="Inter, sans-serif" fontWeight="800" fontSize="22">
      Med
    </text>
    <text x="88" y="22" fill={dark ? '#2E7D52' : '#1B5E3B'} fontFamily="Inter, sans-serif" fontWeight="800" fontSize="22">
      Path
    </text>
    <text x="42" y="37" fill={dark ? '#94A3B8' : '#6B7280'} fontFamily="Inter, sans-serif" fontWeight="500" fontSize="9" letterSpacing="1.5">
      GUIDING FUTURE DOCTORS
    </text>
  </svg>
);

export default MedPathLogo;
