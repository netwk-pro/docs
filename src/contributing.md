---
date:
  created: 2023-12-31
  updated: 2025-05-30
title: Contributing to Network Pro™
summary: Instructions for getting involved and contributing to Network Pro Strategies.
authors:
  - team
tags:
  - networkpro
  - contributing
---

<a name="top"></a>

<sup>[SPDX-License-Identifier](https://spdx.dev/learn/handling-license-info):
`CC-BY-4.0 OR GPL-3.0-or-later`</sup>

# Contributing to Network Pro™

♥ [Network Pro Strategies](https://netwk.pro/) and want to get involved?
Thanks! We're actively looking for folks interested in helping out and there
are plenty of ways you can help!

Please take a moment to review this document in order to make the contribution
process easy and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of
the developers managing and developing this open source project. In return,
they should reciprocate that respect in addressing your issue or assessing
patches and features.

## Using the issue tracker

The [issue tracker](https://github.com/netwk-pro/netwk-pro.github.io/issues) is
the preferred channel for [bug reports](#bugs), [features requests](#features)
and [submitting pull requests](#pull-requests), but please respect the following
restrictions:

- Please **do not** use the issue tracker for personal support requests (use
  [Stack Overflow Teams](https://stack.neteng.pro/), [Discussions](https://discuss.neteng.pro), or [Discord](https://discord.neteng.pro/)).

- Please **do not** derail or troll issues. Keep the discussion on topic and
  respect the opinions of others.

<sub>[Back to top](#top)</sub>

<a name="bugs"></a>

## Bug reports

A bug is a _demonstrable problem_ that is caused by the code in the repository.
Good bug reports are extremely helpful - thank you!

Guidelines for bug reports:

1. **Use the GitHub issue search** &mdash; check if the issue has already been
   reported.

2. **Check if the issue has been fixed** &mdash; try to reproduce it using the
   latest `master` or development branch in the repository.

3. **Isolate the problem** &mdash; ideally create a [reduced test
   case](https://css-tricks.com/reduced-test-cases/) and a live example.

A good bug report shouldn't leave others needing to chase you down for more
information. Please try to be as detailed as possible in your report. What is
your environment? What steps will reproduce the issue? What browser(s) and OS
experience the problem? What would you expect to be the outcome? All these
details will help people to fix any potential bugs.

Example:

> Short and descriptive example bug report title
>
> A summary of the issue and the browser/OS environment in which it occurs. If
> suitable, include the steps required to reproduce the bug.
>
> 1. This is the first step
> 2. This is the second step
> 3. Further steps, etc.
>
> `<url>` - a link to the reduced test case
>
> Any other information you want to share that is relevant to the issue being
> reported. This might include the lines of code that you have identified as
> causing the bug, and potential solutions (and your opinions on their
> merits).

<sub>[Back to top](#top)</sub>

<a name="features"></a>

## Feature requests

Feature requests are welcome. But take a moment to find out whether your idea
fits with the scope and aims of the project. It's up to _you_ to make a strong
case to convince the project's developers of the merits of this feature. Please
provide as much detail and context as possible.

<sub>[Back to top](#top)</sub>

<a name="pull-requests"></a>

## Pull requests

Good pull requests - patches, improvements, new features - are a fantastic
help. They should remain focused in scope and avoid containing unrelated
commits.

**Please ask first** before embarking on any significant pull request (e.g.
implementing features, refactoring code, porting to a different language),
otherwise you risk spending a lot of time working on something that the
project's developers might not want to merge into the project.

Please adhere to the coding conventions used throughout a project (indentation,
accurate comments, etc.) and any other requirements (such as test coverage).

Adhering to the following process is the best way to get your work
included in the project:

<code><strong>1.</strong></code> [Fork](https://help.github.com/articles/fork-a-repo/) the project, clone your fork, and configure the remotes:

```bash
# Clone your fork of the repo into the current directory
git clone https://github.com/<your-username>/netwk-pro.github.io.git

# Navigate to the newly cloned directory
cd netwk-pro.github.io

# Assign the original repo to a remote called "upstream"
git remote add upstream https://github.com/netwk-pro/netwk-pro.github.io.git
```

<code><strong>2.</strong></code> If you cloned a while ago, get the latest changes from upstream:

```bash
git checkout master
git pull upstream master
```

<code><strong>3.</strong></code> Create a new topic branch (off the master project development branch) to
contain your feature, change, or fix:

```bash
git checkout -b <topic-branch-name>
```

<code><strong>4.</strong></code> Install locked dependencies:

```bash
npm ci
```

Ensure that your `node` and `npm` versions are compatible with the `engines`
specification in `package.json`.

<code><strong>5.</strong></code> Lint your code locally. As reflected in the `devDependencies`, the following
linting and formatting tools &mdash; or equivalent &mdash; should be used:

- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [markdownlint](https://github.com/DavidAnson/markdownlint) and
  [markdownlint2](https://github.com/DavidAnson/markdownlint-cli2)
- [Stylelint](https://stylelint.io/)

<code><strong>6.</strong></code> Commit your changes in logical chunks. Please adhere to these [git commit
message guidelines](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
or your code is unlikely be merged into the main project. Use Git's
[interactive rebase](https://help.github.com/articles/about-git-rebase/)
feature to tidy up your commits before making them public.

<code><strong>7.</strong></code> Locally merge (or rebase) the upstream development branch into your topic branch:

```bash
git pull [--rebase] upstream master
```

<code><strong>8.</strong></code> Update any applicable test cases and run tests:

```bash
npm run test
```

Tests must cover changes and pass to be accepted.

<code><strong>9.</strong></code> Run build and commit changes to build:

```bash
npm run build
git add build/
git commit
```

   <!-- markdownlint-disable MD029 -->

<code><strong>10.</strong></code> Push your topic branch up to your fork:

```bash
git push origin <topic-branch-name>
```

<code><strong>11.</strong></code> [Open a Pull Request](https://help.github.com/articles/using-pull-requests/)
with a clear title and description.

<!-- markdownlint-enable MD029 -->

&nbsp;

**IMPORTANT**: By submitting a patch, you agree to allow the project
owners to license your work under the terms of [CC BY 4.0](https://docs.netwk.pro/legal/#cc-by) and the [GNU GPL](https://docs.netwk.pro/legal/#gnu-gpl).

<sub>[Back to top](#top)</sub>

---

<span style="font-size: 12px; text-align: center;">

<p>Network Pro&trade;, the shield logo, and the "Locking Down Networks...&trade;" slogan are <a href="https://docs.netwk.pro/legal/#trademark" target="_self">trademarks</a> of Network Pro Strategies.</p>

<p>Licensed under <a href="https://docs.netwk.pro/legal/#cc-by" target="_self"><strong>CC BY 4.0</strong></a> and the <a href="https://docs.netwk.pro/legal/#gnu-gpl" target="_self"><strong>GNU GPL</strong></a>, as published by the <a rel="noopener noreferrer" href="https://fsf.org" target="_blank">Free Software Foundation</a>, either version 3 of the License or (at your option) any later version.</p>

</span>
