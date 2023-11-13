# [Atkinson Hyperlegible Pro](https://jacobxperez.github.io/atkinson-hyperlegible-pro/)

An updated and extended version of [Atkinson Hyperlegible](https://github.com/googlefonts/atkinson-hyperlegible).

![banner](docs/banner.jpg)

## Getting Started

Install devDependencies on your machine with [npm](https://www.npmjs.com/)

    npm install

### Compile

On your terminal run these scripts to compile

- `npm run dev` serve current development build
- `npm run watch` watch for changes but does not start server
- `npm run build` makes current build

## Framework

We are using [Rams](https://github.com/jacobxperez/rams) as our website framework. Do **not** edit the [core](https://github.com/jacobxperez/atkinson-hyperlegible-pro/tree/website/src/css/core) files because they are part of the Rams core framework files. However, you can edit the [custom](https://github.com/jacobxperez/atkinson-hyperlegible-pro/tree/website/src/css/custom) folder files the [main.css](https://github.com/jacobxperez/atkinson-hyperlegible-pro/blob/website/src/css/main.css) or the [var.css](https://github.com/jacobxperez/atkinson-hyperlegible-pro/blob/website/src/css/var.css) if any change is accepted by the maintainers. Any new CSS file should be added in the [custom](https://github.com/jacobxperez/atkinson-hyperlegible-pro/tree/website/src/css/custom) folder then linked in the [main.css](https://github.com/jacobxperez/atkinson-hyperlegible-pro/blob/website/src/css/main.css) file for compiling.

## CSS Files

- [/css](https://github.com/jacobxperez/rams/tree/master/src/css/)
  - [core](https://github.com/jacobxperez/rams/tree/master/src/css/core) (important files for compiling)
  - [custom](https://github.com/jacobxperez/rams/tree/master/src/css/custom) (add custom modules here)
  - [main.css](https://github.com/jacobxperez/rams/blob/master/src/css/main.css) (compile to produce the final CSS)
  - [var.css](https://github.com/jacobxperez/rams/blob/master/src/css/var.css) (variables for font, colors, and more)

## LICENSE

Copyright (C) 2023 [Jacob Perez](https://jacobxperez.github.io/blog/)

### Code

Licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0) (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

<http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software

### Font

SIL Open Font License, v1.1. See [LICENSE.txt](LICENSE.txt) for details.

---

Learn more at [brailleinstitute.org/freefont](https://brailleinstitute.org/freefont).
