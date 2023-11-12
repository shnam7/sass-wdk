# Sass WDK - Sass Web Development Kit

Sass programming library extension for web style developers.
Importing any part of this library will not generate any CSS output. It just provides functions and mixins helping sass programming.

Modules included:

* Constants
    - color.constants: assorted color names
    - font.constants: assorted font names
    - mq.constants: assorted media query names
    - z-index: z-index constants

* Fuction moidules
    - color: color handling functions
    - font: font handling functions
    - string: string handling functions
    - list: list data structure
    - map: map data structure
    - reg: configuration data handling, registry model setting and getting data with path name.
    - type: sass type conversion functions
    - util: misc functions

* Mixins modules for UI
    - border: mixins for drawing borders
    - media-query: mixins for handling media qqueries
    - shape: mixins for drawing shapes such as circle, pattern, hamberger bar, etc.
    - misc: miscellaneus mixins inclding clearfix, align, visbility control, etc.
    - svg: mixins to handle svg handling
    - theme: mxins for handling themes


## Installation

```bash
npm install sass-wdk
```

## Usage

In your scss file, just import 'wdk'.

```scss
@use 'node_modules/sass-wdk/wdk';
//...
```

## Documentation

Not available yet. See the source codes comments for now.

## Development

Development environment is set using Jest unit test module.

```bash
pnpm run dev
```

If changing \*.scss test file does not trigger test rerun, then press 'a' in the jest watch mode.

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
  <p align=center>Copyright &copy; 2019, under <a href="./LICENSE">MIT</a></p>
</div>
