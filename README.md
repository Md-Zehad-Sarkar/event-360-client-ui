# Project overview and setup for Event_360

- project name : Event_360

- ui live link : https://event-360-client.netlify.app/


- Server Repository link : https://github.com/Md-Zehad-Sarkar/event-360-servers.git

- Client Repository link : https://github.com/Md-Zehad-Sarkar/event-360-client-ui.git

- Technologies : React, typescript, tailwind css, shadcn, react-hook-form, tanstack query, framer motion ,AOS, Axios.

# project Overview
- This is a typescript base project. where a landing page focused on frontend. basic dashboard impliment. need.data facing using tanstack query and axios.

# project setup 

## Prerequisites
- Node.js - Ensure that Node.js is installed on your machine.
- npm or Yarn - Choose your preferred package manager.

## Installation React with Typescript

### Create a new React project with TypeScript template
npx create-vite@latest my-react-project --template typescript

### Navigate to the project directory
cd my-react-router-app

### Install React Router
npm install react-router-dom

### OR, if you prefer Yarn
yarn add react-router-dom

### Run the project,  command this
npm run dev



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
