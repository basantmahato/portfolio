const fs = require('fs');
const path = require('path');

// Simple SVG-based placeholder generator
const projects = [
  { name: 'dental-clinic.svg', color: '#3b82f6', label: 'DC' },
  { name: 'portfolio.svg', color: '#9333ea', label: 'PF' },
  { name: 'snapnews.svg', color: '#10b981', label: 'SN' },
  { name: 'twoleaf.svg', color: '#f59e0b', label: 'TL' }
];

const projectsDir = path.join(__dirname, '..', 'public', 'projects');

// Ensure directory exists
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

projects.forEach(({ name, color, label }) => {
  const svg = `<svg width="600" height="360" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
        <stop offset="100%" style="stop-color:#1f2937;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grad)"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">${label}</text>
  </svg>`;

  const svgPath = path.join(projectsDir, name);
  fs.writeFileSync(svgPath, svg);
  console.log(`Created: ${svgPath}`);
});

console.log('Placeholder images generated!');
