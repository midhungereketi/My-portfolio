# Midhun Gereketi — Portfolio

Personal portfolio of Midhun Gereketi, B.Tech Cyber Security student at VIT Vellore.

**Live:** https://midhungereketi.vercel.app

A monochrome, editorial single-page site with five case studies, each covering what was built, my role, and measured results:

| Project | What it is | Links |
| --- | --- | --- |
| PhishGuard | ML phishing detection for URLs and emails, with a browser extension | [Code](https://github.com/midhungereketi/phishing-detector) · [Demo](https://phishing-detector-pink.vercel.app) |
| Intelligent Cybersecurity Log Management | SOC platform: log ingestion, detection, alerts and incidents (team of 3) | [Code](https://github.com/midhungereketi/Intelligent-Cybersecurity-Log-Management-Systems) |
| Predictive Deadlock Lab | OS research lab that deadlocks real threads and warns before it happens (team of 3) | [Code](https://github.com/midhungereketi/predictive-deadlock-lab) · [Demo](https://predictive-deadlock-lab.vercel.app) |
| Smart School ERP | Eight role-based portals on React + Supabase, with an Android build | Private — walkthrough on request |
| DP-FCFS | Predictive cloud task scheduler (in progress) | [Code](https://github.com/midhungereketi/DP-FCFS) |

## Stack

React 19, TypeScript, Vite and plain CSS. Fonts are Archivo and IBM Plex Mono from Google Fonts. Deployed on Vercel from `main`.

## Run locally

```bash
npm install
npm run dev
```

`npm run build` type-checks and builds to `dist/`.

## Editing content

All text, projects, experience and links live in [`src/data/portfolioData.ts`](src/data/portfolioData.ts). Each project carries `role`, `outcome`, `metrics` and an optional `metricsNote`, which appear in its case study. Setting `credentialUrl` (experience) or `verifyUrl` (certificates) turns that row into a link.

The social preview image `public/og.png` is generated from [`scripts/og-source.html`](scripts/og-source.html). The command to regenerate it is in that file.
