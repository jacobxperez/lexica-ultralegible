# Contributing

Welcome designers, help us improve Atkinson Hyperlegible Pro for everyone. Before you start contributing to this project, it's important to read the following sections to better understand it's vision. If you come across any [font issue](#font-issue) or have any [feature requests](#feature-requests), please use the [issue tracker](https://github.com/jacobxperez/atkinson-hyperlegible-pro/issues). You can also submit a project [proposal](#proposals) and engage with the community by opening a [discussion](https://github.com/jacobxperez/atkinson-hyperlegible-pro/discussions). Any contribution or feedback is welcome.

---

## Table of Contents

* [Project Scope](#project-scope)
* [Opening Up The Source Files](#opening-up-the-source-files)
* [Compile Website](#compile-website)
  * [Framework](#framework)
  * [CSS Files](#css-files)
* [Pull Requests](#pull-requests)
* [Issues](#issues)
  * [Help Us Fix An Issue](#help-us-fix-an-issue)
  * [Font issue](#font-issue)
  * [Feature Requests](#feature-requests)
  * [Proposals](#proposals)
* [Projects](#projects)

## Project Scope

The original typeface was specifically designed to improve character recognition
and legibility for low-vision readers, this was achieve by incorporating distinctive
and unambiguous letterform’s. Our aim is to continue to improve this typeface and to
provide a better reading experience to low-vision readers around the world.

## Opening Up The Source Files

We use [FontForge](https://fontforge.org/en-US/) which allows you to create and
modify postscript, truetype and opentype fonts. You can save fonts in many different
outline formats, and generate bitmaps.

Install devDependencies on your machine with [npm](https://www.npmjs.com/)

    npm install

## Compile Website

On your terminal run these scripts to compile

* `npm run dev` serve current development build
* `npm run watch` watch for changes but does not start server
* `npm run build` makes current build

### Framework

We are using [Rams](https://github.com/jacobxperez/rams) as our website framework. Do **not** edit the [core](https://github.com/jacobxperez/atkinson-hyperlegible-pro/tree/main/src/css/core) files because they are part of the Rams core framework files. However, you can edit the [custom](https://github.com/jacobxperez/atkinson-hyperlegible-pro/tree/main/src/css/custom) folder files the [main.css](https://github.com/jacobxperez/atkinson-hyperlegible-pro/blob/main/src/css/main.css) or the [var.css](https://github.com/jacobxperez/atkinson-hyperlegible-pro/blob/main/src/css/var.css) if any change is accepted by the maintainers. Any new CSS file should be added in the [custom](https://github.com/jacobxperez/atkinson-hyperlegible-pro/tree/main/src/css/custom) folder then linked in the [main.css](https://github.com/jacobxperez/atkinson-hyperlegible-pro/blob/main/src/css/main.css) file for compiling.

### CSS Files

* [/css](https://github.com/jacobxperez/atkinson-hyperlegible-pro/tree/master/src/css/)
  * [core](https://github.com/jacobxperez/atkinson-hyperlegible-pro/tree/master/src/css/core) (important files for compiling)
  * [custom](https://github.com/jacobxperez/atkinson-hyperlegible-pro/tree/master/src/css/custom) (add custom modules here)
  * [main.css](https://github.com/jacobxperez/atkinson-hyperlegible-pro/blob/master/src/css/main.css) (compile to produce the final CSS)
  * [var.css](https://github.com/jacobxperez/atkinson-hyperlegible-pro/blob/master/src/css/var.css) (variables for font, colors, and more)

## Pull Requests

Before embarking on any significant pull request, ask first by submitting an
[issue](https://github.com/jacobxperez/atkinson-hyperlegible-pro/issues/new/choose)
or starting a [discussion](https://github.com/jacobxperez/atkinson-hyperlegible-pro/discussions).
Otherwise, you may end up spending a lot of time working on something that we might
not want to merge into the project. Any contribution to this project will be subject
to the same terms and conditions of the [license agreement](https://github.com/jacobxperez/atkinson-hyperlegible-pro#license).
Be precise on your pull request, and do **not** try to submit changes that were
not agreed upon. When contributing to this project, ask yourself these questions:

* Is it essential?
* Will it add value?
* Is this change necessary?

## Issues

When submitting an issue, it is crucial to provide us with as much detail as
possible so that we can find the best solution to your problem. Please use the
[issue](https://github.com/jacobxperez/atkinson-hyperlegible-pro/issues/new/choose)
template that best describes your concern.

**note**: Submitting an issue does **not** guarantee that your issue will be solved.

## Help Us Fix An Issue

There might be a couple of [issues](https://github.com/jacobxperez/atkinson-hyperlegible-pro/issues)
that need your help. If no one is working on an issue, you can ask to get assigned one.

## Font Issue

Before submitting a font issue make sure your issue is not already reported on the
[issue](https://github.com/jacobxperez/atkinson-hyperlegible-pro/issues) tracker.
If not, use the font issue template to report any problem you may have encountered.

## Feature Requests

If you have an idea that you think will benefit the community but do not want to
work on it yourself, then use the feature request template. If your idea is approved,
we will work on it as soon as possible.

## Proposals

If you have an idea for an update or a feature that you would like to implement.
Then, using the proposal template is a great way to suggest your respective solution.
Please provide us with as much detail as possible because it is up to you to convince
the project maintainers to approve your implementation. Be ready to answer any questions
the project maintainers might have. If your proposal is approved, we will assign it to you.

## Projects

We might have a couple of [projects](https://github.com/jacobxperez/atkinson-hyperlegible-pro/projects?query=is%3Aopen)
open that need your help. Let us know if you want to contribute to any of them by opening
an [issue](https://github.com/jacobxperez/atkinson-hyperlegible-pro/issues/new/choose)
or starting a [discussion](https://github.com/jacobxperez/atkinson-hyperlegible-pro/discussions).
