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

ℹ For integration tests, the app shall stopped (if currently running via the `pnpm dev`) and running in the background with the `NEXT_PUBLIC_PHASE=test` environmental variable:

```bash
NEXT_PUBLIC_PHASE=test pnpm dev
```

&nbsp;
### For my mentees

- [x] Fork this [aero-logic](https://github.com/niksumeiko/aero-logic) kata to your GitHub account:  
  _Here's how: [https://docs.github.com/…/fork-a-repo](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#forking-a-repository)_

- [x] Give me access to your `aero-logic` kata fork:  
  Settings > Collaborators > Manage Access > Add people > [niksumeiko](https://github.com/niksumeiko)  
  _Here's how: [https://docs.github.com…/inviting-collaborators-to-a-personal-repository](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository#inviting-a-collaborator-to-a-personal-repository)_

- [x] Navigate into your local mentorship repository  
  _The one we run discussions in_

- [x] Add your fork of the `aero-logic` kata as a submodule  
  _Here're more details, if necessary: https://github.blog/open-source/git/working-with-submodules_
```bash
$ submodule add git@github.com:YOUR_GITHUB_USERNAME/aero-logic.git
```

- [x] Commit and push changes to your local mentorship repository
>ℹ️ If you want, you can make a fork of the `aero-logic` repo private. From our collaboration perspective, it doesn't matter whether it's public or private because we both will have access to your fork (even if it's private).