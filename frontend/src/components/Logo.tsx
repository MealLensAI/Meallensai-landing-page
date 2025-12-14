import React from 'react';

interface LogoProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    variant?: 'light' | 'dark'; // light for dark backgrounds, dark for light backgrounds
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '', variant = 'dark' }) => {
    const sizeConfig = {
        sm: { height: 24, fontSize: 14 },
        md: { height: 32, fontSize: 18 },
        lg: { height: 40, fontSize: 22 },
        xl: { height: 48, fontSize: 26 }
    };

    const config = sizeConfig[size];
    const fillColor = variant === 'light' ? 'white' : '#0E3E77';
    const textColor = variant === 'light' ? 'text-white' : 'text-gray-900';

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            {/* Dot pattern icon */}
            <svg 
                width={config.height} 
                height={config.height} 
                viewBox="0 0 40 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Outer arc dots */}
                <circle cx="20" cy="4" r="2" fill={fillColor} />
                <circle cx="28" cy="6" r="2" fill={fillColor} />
                <circle cx="34" cy="12" r="2" fill={fillColor} />
                <circle cx="36" cy="20" r="2" fill={fillColor} />
                <circle cx="34" cy="28" r="2" fill={fillColor} />
                <circle cx="28" cy="34" r="2" fill={fillColor} />
                <circle cx="20" cy="36" r="2" fill={fillColor} />
                <circle cx="12" cy="34" r="2" fill={fillColor} />
                <circle cx="6" cy="28" r="2" fill={fillColor} />
                <circle cx="4" cy="20" r="2" fill={fillColor} />
                <circle cx="6" cy="12" r="2" fill={fillColor} />
                <circle cx="12" cy="6" r="2" fill={fillColor} />
                
                {/* Inner arc dots */}
                <circle cx="20" cy="10" r="1.5" fill={fillColor} opacity="0.7" />
                <circle cx="26" cy="12" r="1.5" fill={fillColor} opacity="0.7" />
                <circle cx="30" cy="18" r="1.5" fill={fillColor} opacity="0.7" />
                <circle cx="30" cy="24" r="1.5" fill={fillColor} opacity="0.7" />
                <circle cx="26" cy="28" r="1.5" fill={fillColor} opacity="0.7" />
                <circle cx="20" cy="30" r="1.5" fill={fillColor} opacity="0.7" />
                <circle cx="14" cy="28" r="1.5" fill={fillColor} opacity="0.7" />
                <circle cx="10" cy="24" r="1.5" fill={fillColor} opacity="0.7" />
                <circle cx="10" cy="18" r="1.5" fill={fillColor} opacity="0.7" />
                <circle cx="14" cy="12" r="1.5" fill={fillColor} opacity="0.7" />
                
                {/* Center dots */}
                <circle cx="20" cy="16" r="1.2" fill={fillColor} opacity="0.5" />
                <circle cx="24" cy="20" r="1.2" fill={fillColor} opacity="0.5" />
                <circle cx="20" cy="24" r="1.2" fill={fillColor} opacity="0.5" />
                <circle cx="16" cy="20" r="1.2" fill={fillColor} opacity="0.5" />
                <circle cx="20" cy="20" r="1.2" fill={fillColor} opacity="0.4" />
            </svg>
            
            {/* Text */}
            <span 
                className={`font-semibold ${textColor}`}
                style={{ 
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontSize: `${config.fontSize}px`,
                    letterSpacing: '-0.02em'
                }}
            >
                MealLensAI
            </span>
        </div>
    );
};

export default Logo;
