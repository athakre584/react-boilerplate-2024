import React from 'react';
import styles from './BoilerplatePage.module.scss';

const BoilerplatePage = () => {
  return (
    <div className={styles.container}>
      <header>
        <h1>React Boilerplate with CRA</h1>
        <p className={styles.subtitle}>
          A powerful, flexible, and efficient boilerplate for React development
        </p>
      </header>

      <section>
        <h2>Features</h2>
        <ul>
          <li>
            <strong>Built with Create React App (CRA)</strong> – a quick, easy
            setup with React&apos;s most recommended setup.
          </li>
          <li>
            <strong>Commit Message Rules</strong> – Husky is used to enforce
            conventional commit messages with pre-commit and pre-push hooks.
          </li>
          <li>
            <strong>Custom Fonts</strong> – Easily configurable font setup using
            Google Fonts. Roboto as the primary font for the app.
          </li>
          <li>
            <strong>Sass + Bootstrap Integration</strong> – Bootstrap for
            responsive design and Sass for custom, modular styling.
          </li>
          <li>
            <strong>Linter & Stylelint Setup</strong> – Ensuring consistent code
            quality with ESLint for JavaScript and Stylelint for SCSS.
          </li>
          <li>
            <strong>Test Setup</strong> – Fully integrated testing setup using
            Jest, React Testing Library, and other testing utilities for
            efficient unit and integration tests.
          </li>
        </ul>
      </section>

      <section>
        <h2>Setup Instructions</h2>
        <p>Follow these steps to get started with this React Boilerplate:</p>
        <ol>
          <li>
            <strong>Clone the repository</strong>:{' '}
            <code>
              git clone <em>your-repo-url</em>
            </code>
          </li>
          <li>
            <strong>Install dependencies</strong>: <code>npm install</code> or{' '}
            <code>yarn install</code>
          </li>
          <li>
            <strong>Run the project</strong>: <code>npm start</code> to start
            the development server.
          </li>
        </ol>
      </section>

      <section>
        <h2>Commit Rules</h2>
        <p>Enforce commit message conventions with Husky hooks:</p>
        <ul>
          <li>
            <strong>Pre-commit:</strong> Checks for linting issues before
            committing.
          </li>
          <li>
            <strong>Pre-push:</strong> Ensures tests pass before pushing to the
            repository.
          </li>
          <li>
            <strong>Commit Message Format:</strong> Follow conventional commits
            format (e.g., <code>feat: add new component</code>).
          </li>
        </ul>
      </section>

      <section className={styles.fonts}>
        <h2>Font Setup</h2>
        <p>
          This boilerplate uses <strong>Roboto</strong> as the primary font:
        </p>
        <pre>
          <code>{`
@font-face {
  font-family: 'Roboto';
  src: url('assets/fonts/Roboto-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Roboto';
  src: url('assets/fonts/Roboto-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}

:root {
  --font-primary: 'Roboto', sans-serif;
  --font-secondary: 'Arial', sans-serif;
}
          `}</code>
        </pre>
      </section>

      <section className={styles.sassBootstrap}>
        <h2>Sass & Bootstrap</h2>
        <p>
          This boilerplate comes with Bootstrap for responsive design and Sass
          for custom styling:
        </p>
        <pre>
          <code>{`
/* Importing Bootstrap */
@import 'bootstrap/scss/bootstrap';

/* Custom Styles */
body {
  font-family: var(--font-primary);
  background-color: #f4f4f4;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}
          `}</code>
        </pre>
      </section>

      <section className={styles.linting}>
        <h2>Linter & Stylelint</h2>
        <p>
          We use ESLint to ensure consistent JavaScript code quality and
          Stylelint to check SCSS styles:
        </p>
        <pre>
          <code>{`
module.exports = {
  "extends": ["react-app", "eslint:recommended", "plugin:react/recommended", "prettier"],
    "plugins": ["react"],
    "rules": {
      "react/prop-types": "off",
      "no-console": "warn",
      "no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off" 
    }
};
          `}</code>
        </pre>
        <pre>
          <code>{`
module.exports = {
  extends: ["stylelint-config-standard"],
    ignoreFiles: [
        "dist/**/*",
        "node_modules/**/*",
        "src/styles/ignore-this.css",
        "src/styles/**.scss",
        "build/**/*",
        "coverage/**/*"
    ],
    rules: {
      "declaration-empty-line-before": "never"
    },
};
          `}</code>
        </pre>
      </section>

      <section className={styles.tests}>
        <h2>Tests Setup</h2>
        <p>React Testing Library and Jest are pre-configured to run tests:</p>
        <pre>
          <code>{`
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
          `}</code>
        </pre>
      </section>
    </div>
  );
};

export default BoilerplatePage;
