# GitHub Portfolio

A clean, responsive portfolio website built with Next.js and Tailwind CSS, designed to be deployed on GitHub Pages.

## Features

- Responsive design that works on all devices
- Modern UI with shadcn/ui components
- Sections for projects, skills, and contact information
- Easy to customize and extend

## Local Development

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/github-portfolio.git
   cd github-portfolio
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This portfolio is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Setup

1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to your repository settings > Pages
4. Under "Build and deployment", select "GitHub Actions" as the source
5. The site will be automatically deployed when you push to the main branch

### Important Configuration

- Update the `basePath` and `assetPrefix` in `next.config.mjs` with your actual repository name
- Customize the content in `app/page.tsx` with your information

## Customization

- Update the content in `app/page.tsx` with your information
- Modify the styling using Tailwind CSS classes
- Add or remove sections as needed
- Change the color scheme by updating the Tailwind configuration

## License

MIT
