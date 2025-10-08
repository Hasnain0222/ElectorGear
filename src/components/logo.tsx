import { cn } from "@/lib/utils";

const Logo = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 50"
    className={cn("text-primary", className)}
    {...props}
  >
    <defs>
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="hsl(var(--primary))" />
        <stop offset="100%" stopColor="hsl(var(--accent))" />
      </linearGradient>
    </defs>
    
    {/* Gear Icon */}
    <g transform="translate(25, 25) scale(0.4)">
      <path
        fill="url(#logo-gradient)"
        d="M50,10A40,40,0,1,0,90,50,40,40,0,0,0,50,10ZM50,78a28,28,0,1,1,28-28A28,28,0,0,1,50,78Z"
      />
      <path
        fill="url(#logo-gradient)"
        d="M50,0,45,15h10ZM50,100l5-15H45ZM100,50l-15-5v10ZM0,50l15,5V45Z M17.6,17.6l10.6,4.7-4.7,10.6ZM82.4,82.4,71.8,77.7l4.7-10.6ZM17.6,82.4l4.7-10.6,10.6,4.7ZM82.4,17.6,77.7,28.2,71.8,22.9Z"
      />
      {/* Lightning Bolt */}
      <polygon fill="hsl(var(--background))" points="55,35 40,55 50,55 45,70 60,50 50,50" />
    </g>

    {/* Text */}
    <text
      x="55"
      y="32"
      fontFamily="var(--font-space-grotesk), sans-serif"
      fontSize="24"
      fontWeight="bold"
      fill="url(#logo-gradient)"
    >
      ElectroGear
    </text>
  </svg>
);

export default Logo;
