# frontend-boilerplate
frontend boilerplate.

## How to use
1. `git clone https://github.com/remew/frontend-boilerplate.git PROJECT_DIR`
1. `cd PROJECT_DIR`
1. `rm -rf .git`
1. `npm install`
1. `npm start`
1. Edit files in `src` directory.

## Task list
- `npm run clean`
  - Delete all files in `dist` directory
- `npm run build`
  - Copy `src/**/*.html` and `src/styles/**/*.css` to `dist` directory, compile `src/scripts/main.ts` and output to `src/scripts/app.bundle.js`.
- `npm start`
  - Start simple server. Browser will auto reload when you edit files in `src` directory.

