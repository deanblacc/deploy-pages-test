# deploy-pages-test

Basic Next.js app configured for static export and deployment to GitHub Pages at the `/deploy-pages-test` subpath.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000/deploy-pages-test` in your browser.

## Build static output

```bash
npm run build
```

The exported static site is generated in `out/`.

## GitHub Pages deployment

This repository includes a workflow at `.github/workflows/deploy.yml` that:

- Runs on pushes to `main`
- Builds the static export with Next.js
- Uploads `out/` as a Pages artifact
- Deploys to GitHub Pages

### One-time GitHub settings

1. Go to repository settings -> Pages.
2. Under Build and deployment, set Source to **GitHub Actions**.
3. Push to `main` and wait for the workflow to complete.

The deployed URL should be:

`https://deanblacc.github.io/deploy-pages-test/`
