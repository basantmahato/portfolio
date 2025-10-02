A responsive and dynamic personal portfolio website designed to showcase projects, skills, and professional experience with a focus on clean, high-contrast, and modern design principles.

✨ Features
Dynamic Hero Section: Engaging introduction with a dynamic job title cycling between Coder, Editor, and Designer.

Sticky Navigation: A centered, capsule-style navbar that remains fixed at the top for easy navigation.

Responsive Design: Fully optimized layouts for desktop, tablet (@media (max-width: 768px)), and mobile (@media (max-width: 600px)).

Minimalist Theme: High-contrast black, white, and purple accent color scheme.

Interactive Components: Smooth scrolling, engaging button hovers, and subtle CSS animations (@keyframes) for a polished user experience.

🛠️ Tech Stack
This project is built using the following core technologies:

Category	Technology	Purpose
Frontend	React	Core library for building the user interface.
Styling	CSS3	Custom, modular styling using CSS variables for a maintainable theme.
Icons	React Icons	Simple, modern icons for buttons and social media links (e.g., FaGithub, IoArrowForward).
Deployment	(e.g., Vercel / Netlify)	[Customize this with your hosting provider]
📁 Component Structure
The portfolio is logically separated into reusable React components:

Component	File	Description
Navbar	Navbar.jsx, Navbar.css	Fixed, centered navigation with responsive links and contact info.
ProfileCard	ProfileCard.jsx, ProfileCard.css	The main hero section featuring the profile image and dynamic text.
AboutMe	AboutMe.jsx, AboutMe.css	Details professional summary, core statistics, and tech stack icons.
Projects	Projects.jsx, Projects.css	Displays portfolio items in a responsive grid format.
ContactFooter	ContactFooter.jsx, ContactFooter.css	Final call-to-action, contact details, and social media links.
NextSection	NextSection.jsx, NextSection.css	A general template for subsequent content sections (e.g., Experience).
💻 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine.

Prerequisites
Node.js (LTS version recommended)

npm or yarn

Installation
Clone the repository:

Bash

git clone https://github.com/yourusername/your-portfolio-repo.git
cd your-portfolio-repo
Install dependencies:

Bash

npm install
# or
yarn install
Run the development server:

Bash

npm start
# or
yarn start
The application will be available at http://localhost:3000.

⚙️ Customization
To personalize this portfolio, focus on updating these key areas:

Content: Edit text in ProfileCard.jsx, AboutMe.jsx, and Projects.jsx with your personal information and project details.

Images: Replace the placeholder images (/pf.jpg path) with your own assets.

Color Theme: Adjust the CSS variables in the root of any .css file (e.g., ProfileCard.css) to change the primary accent color:

CSS

:root {
  --accent-color: #9333ea; /* Your new primary accent color */
}
Links: Update all links (href attributes) in the Navbar, ProfileCard, and ContactFooter components with your actual GitHub, LinkedIn, and email addresses.