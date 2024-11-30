# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [VS Code](https://code.visualstudio.com/)

## VS Code Recommended Extensions

1. ESLint (`dbaeumer.vscode-eslint`)
2. Prettier (`esbenp.prettier-vscode`)
3. Tailwind CSS IntelliSense (`bradlc.vscode-tailwindcss`)
4. TypeScript + JavaScript (`ms-vscode.vscode-typescript-next`)

## Installation Steps

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   ```

2. Open the project in VS Code:
   ```bash
   cd portfolio
   code .
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/     # React components
├── App.tsx        # Main App component
├── main.tsx       # Application entry point
└── index.css      # Global styles
```

## Customization

1. Update personal information in:
   - `src/components/Hero.tsx`
   - `src/components/About.tsx`
   - `src/components/ContactInfo.tsx`

2. Modify projects in:
   - `src/components/Projects.tsx`

3. Update skills in:
   - `src/components/Skills.tsx`