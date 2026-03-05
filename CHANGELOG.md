<!-- =====================================================================
CHANGELOG.md

Copyright © 2025-2026 Network Pro Strategies (Network Pro™)
SPDX-License-Identifier: CC-BY-4.0 OR GPL-3.0-or-later
This file is part of Network Pro.
====================================================================== -->

<!-- markdownlint-disable MD024 -->

# Changelog

All notable changes to this project will be documented in this file.

This project follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Version numbers use a **SemVer-inspired** `MAJOR.MINOR.PATCH` format, with
version increments reflecting both user-visible and operational impact.

---

## [Unreleased]

---

## [1.4.3] - 2026-03-04

### Changed

- Bumped project version to `v1.4.3`.
- Updated front-end tooling dependencies:
  - `autoprefixer` `^10.4.23` → `^10.4.27`
  - `postcss` `^8.5.6` → `^8.5.8`
  - `globals` `^17.1.0` → `^17.4.0`
  - `stylelint` `^17.0.0` → `^17.4.0`
  - `@eslint/js` `^9.39.2` → `^10.0.1`
  - `@eslint/json` `^0.14.0` → `^1.0.1`
  - `eslint` `^9.39.2` → `^10.0.2`
  - `markdownlint-cli2` `^0.20.0` → `^0.21.0`
- Updated Python dependencies:
  - `mkdocs-material` `9.7.1` → `9.7.4`

---

## [1.4.2] - 2026-01-22

### Changed

- Updated all headers to read `© 2025-2026`, indicating continuing development.
- Updated `.github/workflows/publish.yml` to utilize **npm** `v11.7.0`.
- Updated GitHub workflow action versions (`actions/checkout`,
  `actions/upload-artifact`, and `actions/download-artifact`) to the latest
  available versions.
- Refreshed timestamps in `src/sitemap.xml`.
- Updated `src/privacy.md` and `src/terms-use.md` to accurately mirror the
  verbiage of the official versions on our main website.
- Bumped project version to `v1.4.2`.
- Updated dependencies:
  - `mkdocs-material` `9.7.0` → `9.7.1`
  - `globals` `^17.0.0` → `^17.1.0`
  - `prettier` `3.7.4` → `3.8.1`
  - `stylelint` `^16.26.1` → `^17.0.0`
  - `stylelint-config-recommended` `^17.0.0` → `^18.0.0`

---

## [1.4.1] - 2026-01-01

### Changed

- Updated `README.md` to better reflect the company’s current mission, focus,
  and messaging.
- Bumped project version to `v1.4.1`.

---

## [1.4.0] – 2026-01-01

### Added

- Added `vercel.json` to define Vercel build configuration and security headers.
- Added Vercel as a supported deployment target for this site.
- Added `VERSIONING.md` to document the project’s versioning strategy.
- Added `runtime.txt` to specify the project's Python runtime version.

### Changed

- Updated `dev` script in `package.json` to enable hot reloading of content
  (`--livereload`).
- Corrected formatting of `contributing.md` with Prettier.
- Updated home page (`src/index.md`) to better reflect the company’s current
  mission, focus, and messaging.
- Migrated static site deployment from Netlify to Vercel.
- Converted Netlify build configuration (`netlify.toml`) to Vercel-equivalent
  settings.
- Updated MkDocs build invocation to use `python -m mkdocs` for improved
  compatibility in CI environments.
- Explicitly configured the build output directory as `build/`.
- Preserved existing Content Security Policy (CSP), reporting endpoints, and
  security headers under Vercel.
- Bumped project version to `v1.4.0`.
- Updated frontend tooling dependencies:
  - `@eslint/js` `^9.39.1` → `^9.39.2`
  - `autoprefixer` `^10.4.22` → `^10.4.23`
  - `browserslist` `^4.28.0` → `^4.28.1`
  - `eslint` `^9.39.1` → `^9.39.2`
  - `globals` `^16.5.0` → `^17.0.0`
  - `markdownlint` `^0.39.0` → `^0.40.0`
  - `markdownlint-cli2` `^0.19.0` → `^0.20.0`
  - `prettier` `3.6.2` → `3.7.4`
  - `stylelint` `^16.25.0` → `^16.26.1`
  - `stylelint-order` `^7.0.0` → `^7.0.1`

### Removed

- Removed `netlify.toml`, as Netlify is no longer the active deployment
  platform.
- Removed reliance on Netlify-specific header configuration in favor of Vercel
  headers.

---

<!-- Link references -->

[Unreleased]: https://github.com/netwk-pro/docs/compare/v1.4.3...HEAD
[1.4.3]: https://github.com/netwk-pro/docs/releases/tag/v1.4.3
[1.4.2]: https://github.com/netwk-pro/docs/releases/tag/v1.4.2
[1.4.1]: https://github.com/netwk-pro/docs/releases/tag/v1.4.1
[1.4.0]: https://github.com/netwk-pro/docs/releases/tag/v1.4.0
