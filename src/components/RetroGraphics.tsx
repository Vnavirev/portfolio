import React from 'react';

/**
 * Reusable retro cinema decorative SVG components matching the 1960s/70s poster aesthetic.
 */

interface StarburstProps {
  className?: string;
  points?: number;
  outerRadius?: number;
  innerRadius?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  children?: React.ReactNode;
}

export const Starburst: React.FC<StarburstProps> = ({
  className = '',
  points = 18,
  outerRadius = 100,
  innerRadius = 75,
  fill = '#FF300F',
  stroke = '#171719',
  strokeWidth = 4,
  children,
}) => {
  const center = 110;
  const pathD = React.useMemo(() => {
    let d = '';
    const angleStep = (Math.PI * 2) / (points * 2);
    for (let i = 0; i < points * 2; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const r = i % 2 === 0 ? outerRadius : innerRadius;
      const x = center + r * Math.cos(angle);
      const y = center + r * Math.sin(angle);
      d += i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
    }
    d += ' Z';
    return d;
  }, [points, outerRadius, innerRadius]);

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 220 220"
        className="w-full h-full drop-shadow-[5px_5px_0px_#171719]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d={pathD} fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="miter" />
      </svg>
      {children && <div className="absolute inset-0 flex items-center justify-center">{children}</div>}
    </div>
  );
};

export const ClapperboardIcon: React.FC<{ className?: string; width?: number; height?: number }> = ({
  className = '',
  width = 54,
  height = 46,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 64 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    aria-hidden="true"
  >
    {/* Clapper Top Board */}
    <g transform="rotate(-8 6 18)">
      <rect x="2" y="4" width="58" height="15" rx="2" fill="#171719" stroke="#171719" strokeWidth="2" />
      {/* Chevron Stripes */}
      <polygon points="12,4 20,4 12,19 4,19" fill="#FFF0C7" />
      <polygon points="26,4 34,4 26,19 18,19" fill="#FFF0C7" />
      <polygon points="40,4 48,4 40,19 32,19" fill="#FFF0C7" />
      <polygon points="54,4 58,4 50,19 46,19" fill="#FFF0C7" />
    </g>
    {/* Clapper Body */}
    <rect x="4" y="20" width="56" height="30" rx="3" fill="#FFF8E8" stroke="#171719" strokeWidth="3" />
    {/* Chalk Lines */}
    <line x1="8" y1="34" x2="56" y2="34" stroke="#171719" strokeWidth="2" />
    <line x1="28" y1="20" x2="28" y2="34" stroke="#171719" strokeWidth="2" />
    <line x1="42" y1="20" x2="42" y2="34" stroke="#171719" strokeWidth="2" />
    <text x="11" y="30" fontFamily="'DM Sans', sans-serif" fontSize="7" fontWeight="bold" fill="#171719">
      SCENE
    </text>
    <text x="32" y="30" fontFamily="'DM Sans', sans-serif" fontSize="7" fontWeight="bold" fill="#171719">
      TAKE
    </text>
    <text x="47" y="30" fontFamily="'DM Sans', sans-serif" fontSize="7" fontWeight="bold" fill="#FF300F">
      ROLL
    </text>
    <text x="14" y="45" fontFamily="'DM Sans', sans-serif" fontSize="8" fontWeight="bold" fill="#007F86">
      DIR. VAISHNAVI
    </text>
  </svg>
);

export const VintageCameraIcon: React.FC<{ className?: string; width?: number; height?: number }> = ({
  className = '',
  width = 56,
  height = 46,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 64 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    aria-hidden="true"
  >
    {/* Top Turret & Flash */}
    <rect x="18" y="4" width="14" height="8" rx="1.5" fill="#FF741F" stroke="#171719" strokeWidth="2.5" />
    <rect x="36" y="7" width="8" height="5" rx="1" fill="#171719" />
    <circle cx="48" cy="8" r="4" fill="#FF300F" stroke="#171719" strokeWidth="2" />
    {/* Camera Body */}
    <rect x="4" y="12" width="56" height="36" rx="4" fill="#FFB879" stroke="#171719" strokeWidth="3" />
    <rect x="8" y="16" width="48" height="28" rx="2" fill="#FFF8E8" stroke="#171719" strokeWidth="2" />
    {/* Leather Texture Line */}
    <line x1="8" y1="28" x2="56" y2="28" stroke="#FF741F" strokeWidth="3" />
    {/* Lens Barrel */}
    <circle cx="32" cy="30" r="13" fill="#171719" />
    <circle cx="32" cy="30" r="10" fill="#007F86" stroke="#FFF0C7" strokeWidth="2" />
    <circle cx="32" cy="30" r="5" fill="#FF300F" />
    <circle cx="30" cy="28" r="2" fill="#FFFFFF" />
  </svg>
);

export const FilmStripSeparator: React.FC<{ className?: string; text?: string }> = ({
  className = '',
  text = 'VAISHNAVI REVADKAR ⋆ RETRO CINEMA PRODUCTION ⋆ ACTOR & CODER ⋆ SCENE 2026',
}) => {
  return (
    <div className={`w-full overflow-hidden bg-[#171719] text-[#FFF0C7] py-2 border-y-4 border-[#171719] select-none ${className}`}>
      <div className="flex items-center gap-6 whitespace-nowrap animate-[marquee_25s_linear_infinite]">
        <div className="flex items-center gap-4 text-xs font-mono-code font-bold tracking-widest uppercase">
          {/* Perforations */}
          <div className="flex gap-2">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="inline-block w-3 h-2 bg-[#FFF0C7] rounded-xs" />
            ))}
          </div>
          <span className="text-[#FF741F] font-display text-sm">35MM FILM</span>
          <span className="text-[#70B9AF]">✦</span>
          <span>{text}</span>
          <span className="text-[#FF300F]">★</span>
          <span>C ⋆ PYTHON ⋆ JAVA</span>
          <span className="text-[#70B9AF]">✦</span>
          <span className="text-[#FFB879]">TAKE ONE</span>
          <div className="flex gap-2">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="inline-block w-3 h-2 bg-[#FFF0C7] rounded-xs" />
            ))}
          </div>
          <span className="text-[#FF741F] font-display text-sm">DIRECTOR'S CUT</span>
          <span className="text-[#70B9AF]">✦</span>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};

export const RetroStar: React.FC<{
  size?: number;
  color?: string;
  className?: string;
}> = ({ size = 24, color = '#FF300F', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    aria-hidden="true"
  >
    <path
      d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z"
      fill={color}
      stroke="#171719"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const ConcentricCircles: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 180,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="100" cy="100" r="90" stroke="#FF741F" strokeWidth="4" strokeDasharray="10 8" />
    <circle cx="100" cy="100" r="70" fill="#FFB879" stroke="#171719" strokeWidth="3" opacity="0.85" />
    <circle cx="100" cy="100" r="48" fill="#FFF0C7" stroke="#171719" strokeWidth="3" />
    <circle cx="100" cy="100" r="26" fill="#007F86" stroke="#171719" strokeWidth="2.5" />
    <circle cx="100" cy="100" r="10" fill="#FF300F" />
  </svg>
);

export const WaveRibbon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 600 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full ${className}`}
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    {/* Teal wave band */}
    <path
      d="M0,45 C150,15 350,75 600,30 L600,55 C350,100 150,40 0,70 Z"
      fill="#007F86"
      stroke="#171719"
      strokeWidth="2.5"
    />
    {/* Turquoise wave band */}
    <path
      d="M0,25 C150,-5 350,55 600,10 L600,30 C350,75 150,15 0,45 Z"
      fill="#70B9AF"
      stroke="#171719"
      strokeWidth="2.5"
    />
    {/* Vermilion accent wave */}
    <path
      d="M0,10 C150,-20 350,40 600,-5 L600,10 C350,55 150,-5 0,25 Z"
      fill="#FF741F"
      stroke="#171719"
      strokeWidth="2"
      opacity="0.9"
    />
  </svg>
);
