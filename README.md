# 🛫 &nbsp; Aero logic kata

[![Nik Sumeiko](https://img.shields.io/badge/Nik_Sumeiko-0762C8?logo=LinkedIn)](https://www.linkedin.com/in/niksumeiko/) &nbsp; ![Awesome](https://awesome.re/badge.svg)

> A kata project to practice Test Driven Development with Nextjs.

&nbsp;
### Project description
The app enables its users to solve air traffic control riddles in favour to be always up-to-date with important knowledge about the domain.

&nbsp;
### Getting started
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The auto-updates are enabled in favour to see made code changes as you edit files.

&nbsp;
### Testing
The project is configured for different types of tests.

**Unit tests** (vitest) will execute files matching `__tests__/*.test.ts` pattern:
```shell
pnpm test:unit
```

**Integration tests** (cypress) will pick files matching `__tests__/*.integration.ts` pattern:
```shell
pnpm test:integration
```

ℹ For integration tests, a separate instance of the app will be running in the background with the `NEXT_PUBLIC_PHASE=test` environmental variable.