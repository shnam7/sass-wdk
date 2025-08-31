# Sass WDK - Sass Web Development Kit

Sass programming library extension for web style developers.
Importing any part of this library will not generate any CSS output. It just provides functions and mixins helping sass programming.

Modules included:

-   Constants

    -   color.constants: assorted color names
    -   font.constants: assorted font names
    -   mq.constants: assorted media query names
    -   tf.constants: timing function constants (cubic-bezier)

-   Function modules

    -   color: color handling functions
    -   font: font handling functions
    -   string: string handling functions
    -   list: list data structure
    -   map: map data structure
    -   reg: configuration data handling, registry model setting and getting data with path name
    -   type: sass type conversion functions
    -   util: misc functions

-   Mixins modules for UI
    -   border: mixins for drawing borders
    -   media-query: mixins for handling media queries
    -   shape: mixins for drawing shapes such as circle, pattern, hamburger bar, etc.
    -   misc: miscellaneous mixins including clearfix, align, visibility control, etc.
    -   svg: mixins to handle svg handling
    -   theme: mixins for handling themes
    -   z-index: z-index constants and utilities

## Installation

```bash
npm install sass-wdk

# or with pnpm:
pnpm add sass-wdk

# or with yarn:
yarn add sass-wdk
```

## Usage

In your scss file, just import 'wdk':

```scss
@use 'sass-wdk/wdk' as wdk;
```

or add **./node_modules/sass-wdk** to loadPath of your sass compiler:

```scss
@use 'wdk/color';
@use 'wdk/font';
@use 'wdk/ui/media-query' as mq;
```

## Documentation

**[API Documentation](./docs/API.md)** provides brief introduction.
For the details, refer tot he source code in wdk/ directory.

### Quick Examples

```scss
@use 'sass-wdk/wdk/color';
@use 'sass-wdk/wdk/ui/media-query' as mq;

.example {
    // Smart color contrast
    color: color.yiq-color(#333);

    // Responsive design
    @include mq.media(tablet) {
        font-size: 1.2rem;
    }
}
```

For comprehensive examples and detailed API reference, see the [complete documentation](./docs/API.md).

## Development

Development environment is set using Vitest unit test module.

### Available Scripts

```bash
# Start development mode with watch
pnpm run dev

# Run tests once
pnpm run test

# Run linting
pnpm run lint

# Build (lint check)
pnpm run build
```

If changing \*.scss test file does not trigger test rerun, then press 'a' in the vitest watch mode.

### Testing

The library uses [sass-true](https://github.com/oddbird/true) for unit testing Sass functions and mixins. Test files are located in the `test/` directory.

## Credits

Thanks to the authors:

http://www.htmlcsscolor.com<br>
http://hugogiraudel.com/2013/08/08/advanced-sass-list-functions/<br>
https://css-tricks.com/snippets/sass/deep-getset-maps<br>
http://www.sassmeister.com/gist/7525f0546479acd1d6e1<br>
https://24ways.org/2010/calculating-color-contrast<br>
https://css-tricks.com/snippets/sass/power-function/<br>
https://codepen.io/jakob-e/pen/doMoML<br>
http://hugogiraudel.com/2014/01/27/casting-types-in-sass/<br>
https://css-tricks.com/snippets/sass/str-replace-function/<br>
https://github.com/zurb/foundation-sites/blob/master/scss/util/_mixins.scss

<br>
<div align="center">
  <p align=center>Copyright &copy; 2019-2025, under <a href="./LICENSE">MIT</a></p>
</div>
