# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## Project Structure

- `src/pages`: Route entrypoints organized by language (`english/`, `arabic/`)
- `src/components/ui`: Presentational primitives; named exports via `src/components/ui/index.ts`
- `src/layouts`: Global layout primitives; `AppLayout` re-exported from `src/layouts/index.ts`
- `src/hooks`: Reusable interaction hooks (`useDarkMode`, `useSmoothScroll`, `useSmoothSliderControls`)
- `src/lib/utils.ts`: Shared utilities
- `src/styles`: Global CSS (navbar, palette, variables, fluid grid, etc.)
- `public` and `src/assets`: Static assets and fonts

## Tailwind v4 Setup

- Tailwind is enabled via PostCSS plugin: `@tailwindcss/postcss` (see `postcss.config.js`)
- Config lives at project root: `tailwind.config.js`
- No `@tailwind base/components/utilities` directives are required in CSS; classes are compiled via the plugin and `content` globs
- Use utility classes directly in components; theme extensions (colors, typography, animations) are in `tailwind.config.js`

## i18n

- Current source of truth for copy is `src/contexts/LanguageContext.tsx` with an inline EN/AR dictionary
- Pages consume keys via `useLanguage().t(key)` and mirror EN/AR routes in `src/main.tsx`

## Automation (TRE)

- Architecture spec resides at `tools/trae/architecture-spec.json`
- Intended outputs:
  - `manifests/pages/`: Per-page manifests
  - `reports/pages/`: Dependency and asset reports
  - `patches/improve/pages/`: Proposed codemods
