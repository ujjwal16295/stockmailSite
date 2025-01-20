/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		keyframes: {
		  // Shimmer Effect (moving light)
		  shimmer: {
			"0%": { backgroundPosition: "-200% 0" },
			"100%": { backgroundPosition: "200% 0" },
		  },
		  // Four Bounces with Fixed Top
		  bounceInFixedTop: {
			"0%": { transform: "translateY(0)", opacity: "0" },
			"20%": { transform: "translateY(-10px)", opacity: "1" },
			"40%": { transform: "translateY(5px)", opacity: "1" },
			"60%": { transform: "translateY(-5px)", opacity: "1" },
			"80%": { transform: "translateY(2px)", opacity: "1" },
			"100%": { transform: "translateY(0)", opacity: "1" },
		  },
		  // Rotate in a Circle on Hover (for text)
		  rotateInCircle: {
			"0%": { transform: "rotate(0deg)" },
			"100%": { transform: "rotate(360deg)" },
		  },
		  // New Animations for sliding in
		  slideInTop: {
			"0%": { transform: "translateY(-100%)", opacity: "0" },
			"100%": { transform: "translateY(0)", opacity: "1" },
		  },
		  slideInBottom: {
			"0%": { transform: "translateY(100%)", opacity: "0" },
			"100%": { transform: "translateY(0)", opacity: "1" },
		  },
		  slideInLeft: {
			"0%": { transform: "translateX(-100%)", opacity: "0" },
			"100%": { transform: "translateX(0)", opacity: "1" },
		  },
		  slideInRight: {
			"0%": { transform: "translateX(100%)", opacity: "0" },
			"100%": { transform: "translateX(0)", opacity: "1" },
		  },
		  // Subtle Wave Animation
		  wave: {
			"0%, 100%": { transform: "translateY(0)" },
			"50%": { transform: "translateY(-5px)" },
		  },
		  // Green Soothing Flash Animation
		  greenFlash: {
			"0%, 100%": { backgroundColor: "transparent", opacity: "0" },
			"50%": { backgroundColor: "rgba(0, 255, 0, 0.5)", opacity: "1" },
		  },
		// Red Flash Animation
		  redFlash: {
			"0%, 100%": { backgroundColor: "transparent", opacity: "0" },
			"50%": { backgroundColor: "rgba(255, 0, 0, 0.5)", opacity: "1" },
		   },
		},
		animation: {
		  shimmer: "shimmer 1.5s linear infinite",
		  bounceInFixedTop: "bounceInFixedTop 1s ease-in-out 1",
		  rotateInCircle: "rotateInCircle 4s linear infinite",
		  slideInTop: "slideInTop 0.5s ease-out",
		  slideInBottom: "slideInBottom 0.5s ease-out",
		  slideInLeft: "slideInLeft 0.5s ease-out",
		  slideInRight: "slideInRight 0.5s ease-out",
		  wave: "wave 1.5s ease-in-out infinite",
		  greenFlash: "greenFlash 1s ease-in-out infinite",
		  redFlash: "redFlash 1s ease-in-out infinite",
		},
		boxShadow: {
		  custom: "0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.05)",
		},
		borderRadius: {
		  xl: "1.25rem",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  