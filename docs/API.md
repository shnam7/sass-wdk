# Sass WDK API Documentation

This is a brief introduction. For the detailed usage, refer to the source codes in wdk/ folder.

## Module Overview

| Module             | Description         | Key Features                            |
| ------------------ | ------------------- | --------------------------------------- |
| **color**          | Color manipulation  | YIQ contrast, tint/shade, smart scaling |
| **string**         | String operations   | Replace, split, character access        |
| **list**           | List data structure | Insert, remove, slice, reverse          |
| **map**            | Map operations      | Deep get/set, merging                   |
| **reg**            | Registry system     | Global configuration storage            |
| **font**           | Font utilities      | px/rem conversion, scaling              |
| **type**           | Type conversion     | String, list, map, boolean conversion   |
| **util**           | Utilities           | Unit stripping                          |
| **ui/border**      | Border mixins       | Border properties and radius            |
| **ui/media-query** | Responsive design   | Breakpoint management                   |
| **ui/shape**       | Shape creation      | Triangles, circles, patterns            |
| **ui/misc**        | Miscellaneous UI    | Clearfix, alignment, text truncation    |
| **ui/svg**         | SVG utilities       | SVG to CSS conversion                   |
| **constants\***    | Pre-defined values  | Colors, timing functions, breakpoints   |

## Basic Usage

Import the entire library:

```scss
@use 'node_modules/sass-wdk/wdk' as wdk;
```

Or import specific modules:

```scss
@use 'node_modules/sass-wdk/wdk/color';
@use 'node_modules/sass-wdk/wdk/string' as str;
@use 'node_modules/sass-wdk/wdk/list';
@use 'node_modules/sass-wdk/wdk/ui/media-query' as mq;
```

## Available Modules

### Color Functions

```scss
@use 'sass-wdk/wdk/color';

.example {
    // Smart color contrast
    color: color.yiq-color(#333); // Returns white or black based on contrast

    // Color manipulation
    background: color.tint(#333, 20%); // Lighten color
    border-color: color.shade(#ccc, 10%); // Darken color

    // Grayscale
    box-shadow: 0 0 10px color.gray(50%); // 50% gray
}
```

**Available Functions:**

-   `yiq($color)` - Calculate YIQ value for color contrast
-   `yiq-color($color, $threshold, $black, $white)` - Get contrasting color (black/white)
-   `tint($color, $percent)` - Lighten color by mixing with white
-   `shade($color, $percent)` - Darken color by mixing with black
-   `gray($percent, $alpha)` - Generate grayscale color
-   `smart-scale($color, $scale, $threshold)` - Intelligently scale color brightness
-   `gradient($color, $gradient-level, $direction)` - Create CSS gradient

### String Functions

```scss
@use 'sass-wdk/wdk/string' as str;

$text: 'Hello World';
$result: str.replace($text, 'World', 'Sass'); // 'Hello Sass'
$starts: str.starts-with($text, 'Hello'); // true
$char: str.char-at($text, 1); // 'H'
```

**Available Functions:**

-   `char-at($string, $index)` - Get character at index
-   `starts-with($string, $search-str)` - Check if string starts with substring
-   `ends-with($string, $search-str)` - Check if string ends with substring
-   `contains($string, $search-str)` - Check if string contains substring
-   `replace($string, $search, $replace)` - Replace substring
-   `replace-batch($string, $replace-map)` - Replace multiple substrings
-   `split($string, $delimiters, $keep-empty)` - Split string by delimiters
-   `trim($string)` - Remove whitespace
-   `length($string)` - Get string length

### List Functions

```scss
@use 'sass-wdk/wdk/list';

$my-list: (a, b, c, d);
$first: list.first($my-list); // a
$last: list.last($my-list); // d
$inserted: list.insert-at($my-list, 2, 'x'); // (a, x, b, c, d)
$reversed: list.reverse($my-list); // (d, c, b, a)
```

**Available Functions:**

-   `first($list)` - Get first element
-   `last($list)` - Get last element
-   `last-index($list, $value)` - Get last index of value
-   `prepend($list, $value)` - Add element to beginning
-   `insert-at($list, $index, $value)` - Insert element at index
-   `remove-at($list, $index)` - Remove element at index
-   `replace($list, $old-value, $new-value, $recursive)` - Replace elements
-   `remove($list, $value, $recursive)` - Remove elements
-   `slice($list, $start, $end)` - Extract portion of list
-   `reverse($list, $recursive)` - Reverse list order
-   `to-string($list, $glue, $unquote, $flatten)` - Convert to string
-   `rotate($list, $count)` - Rotate elements
-   `trim($list, $recursive)` - Remove null values
-   `contains($list, $values...)` - Check if contains values

### Map Functions

```scss
@use 'sass-wdk/wdk/map';

$config: (
    theme: (
        primary: #007bff,
        secondary: #6c757d,
    ),
);

$primary: map.deep-get($config, (theme, primary)); // #007bff
$updated: map.deep-set($config, (theme, accent), #28a745);
```

**Available Functions:**

-   `deep-set($map, $keys, $value)` - Set nested value
-   `deep-get($map, $keys)` - Get nested value
-   `extend($map, $maps...)` - Deep merge maps
-   `trim($map, $recursive, $trim-keys, $trim-values)` - Remove null values

### Registry System

```scss
@use 'sass-wdk/wdk/reg';

// Store global configuration
@include reg.ssv('breakpoints', 'mobile', 768px);
@include reg.ssv('breakpoints', 'tablet', 1024px);

// Retrieve configuration
$mobile-bp: reg.gsv('breakpoints', 'mobile'); // 768px

// Alternative: Use with media queries
@use 'sass-wdk/wdk/ui/media-query' as mq;
@include mq.set-breakpoints(
    (
        mobile: 0,
        tablet: 768px,
        desktop: 1024px,
    )
);
```

**Available Functions & Mixins:**

-   `set($reg, $path, $value, $default)` - Set registry value
-   `get($reg, $path, $default-value)` - Get registry value
-   `merge($reg, $value-set, $path, $default)` - Merge registry data
-   `@mixin ssv($key, $path, $value, $default)` - Set system value
-   `gsv($key, $path, $default)` - Get system value
-   `@mixin msv($key, $path, $value-set, $default)` - Merge system value
-   `sys-registry()` - Get entire system registry

### Font Functions

```scss
@use 'sass-wdk/wdk/font';

.text {
    font-size: font.rem(16px); // Convert px to rem
    line-height: font.scale(1.2); // Scale font size
    margin-bottom: font.spacing(2); // Vertical rhythm spacing
}
```

**Available Functions:**

-   `scale($font-size, $scale-factor, $scaler, $down-scaler)` - Scale font size
-   `spacing($count, $unit)` - Calculate vertical rhythm spacing
-   `rem($values, $base)` - Convert px to rem
-   `px($values, $base)` - Convert rem to px

### Type Conversion Functions

```scss
@use 'sass-wdk/wdk/type';

$string-val: type.to-string(123); // "123"
$list-val: type.to-list('hello'); // ("hello")
$map-val: type.to-map('value', 'key'); // ("key": "value")
$bool-val: type.to-bool('true'); // true
```

**Available Functions:**

-   `to-string($value)` - Convert any type to string
-   `to-list($value)` - Convert any type to list
-   `to-map($value, $key)` - Convert value to map
-   `to-bool($value)` - Convert value to boolean

### Utility Functions

```scss
@use 'sass-wdk/wdk/util';

$unitless: util.strip-unit(16px); // 16
```

**Available Functions:**

-   `strip-unit($num)` - Remove unit from number

### UI Mixins

```scss
@use 'sass-wdk/wdk/ui/border';
@use 'sass-wdk/wdk/ui/media-query' as mq;
@use 'sass-wdk/wdk/ui/shape';
@use 'sass-wdk/wdk/ui/misc';

.card {
    @include border.set(#ccc, 1px, solid);
    @include border.set-radius(8px);
}

.responsive {
    @include mq.media(tablet) {
        font-size: 1.2rem;
    }
}

.hamburger-menu {
    @include shape.hamburger(20px, #333, 3px, 2px);
}

.centered-content {
    @include misc.align-center;
    @include misc.clearfix;
}
```

#### Border Mixins

-   `@mixin set($color, $width, $style, $where)` - Set border properties
-   `@mixin set-color($color, $where)` - Set border color
-   `@mixin set-radius($radius, $where)` - Set border radius
-   `@mixin set-style($style, $where)` - Set border style

#### Media Query Mixins

-   `@mixin set-breakpoints($breakpoints)` - Set breakpoint configuration
-   `@mixin media($name, $media-type)` - Apply media query
-   `mq-current-set()` - Get current breakpoint set
-   `mq-query-names()` - Get available query names

#### Shape Mixins

-   `@mixin triangle($size, $color, $direction)` - Create CSS triangle
-   `@mixin hamburger($width, $color, $height, $gap)` - Create hamburger menu icon
-   `@mixin circle($radius, $color)` - Create circle
-   `@mixin pattern($color, $pattern-name)` - Apply background patterns

#### Miscellaneous Mixins

-   `@mixin clearfix($ie8)` - Clear floats
-   `@mixin truncate-text($lines, $line-height)` - Truncate text
-   `@mixin align($direction, $display)` - Align content
-   `@mixin align-left`, `@mixin align-right`, `@mixin align-center` - Quick alignment
-   `@mixin visually-hidden` - Hide content visually but keep accessible

#### SVG Utilities

-   `to-cssurl($svg, $fill-to-replace, $new-fill)` - Convert SVG to CSS URL

### Constants

```scss
@use 'sass-wdk/wdk/constants/color.constants' as colors;
@use 'sass-wdk/wdk/constants/tf.constants' as timing;
@use 'sass-wdk/wdk/constants/mq.constants' as breakpoints;

.animation {
    color: colors.$red;
    transition: all 0.3s timing.$ease-out-cubic;
}

// Available breakpoint sets:
// - $w-breakpoints-bootstrap (xs, sm, md, lg, xl)
// - $w-breakpoints-foundation (mini, small, medium, large, xlarge, xxlarge)
// - $w-breakpoints-semantic-ui (mini, phone, tablet, computer, largeMonitor, wideMonitor)
// - $w-breakpoints-tailwind (__, sm, md, lg, xl, 2xl)
// - $w-breakpoints-simple (mobile, computer)

@use 'sass-wdk/wdk/ui/media-query' as mq;
@include mq.set-breakpoints(breakpoints.$w-breakpoints-bootstrap);

.responsive-content {
    @include mq.media(md) {
        padding: 2rem;
    }
}
```

#### Color Constants

Provides a comprehensive set of named colors including web-safe colors, material design colors, and custom color palettes.

#### Timing Function Constants

Pre-defined cubic-bezier timing functions for smooth animations:

-   `$ease-in-*` - Easing in functions (quad, cubic, quart, quint, sine, expo, circ, back)
-   `$ease-out-*` - Easing out functions
-   `$ease-in-out-*` - Easing in-out functions

#### Media Query Constants

Pre-configured breakpoint sets compatible with popular CSS frameworks:

-   **Bootstrap**: xs (0), sm (576px), md (768px), lg (992px), xl (1200px)
-   **Foundation**: mini (0), small (320px), medium (640px), large (1024px), xlarge (1200px), xxlarge (1440px)
-   **Semantic UI**: mini (0), phone (320px), tablet (768px), computer (992px), largeMonitor (1200px), wideMonitor (1920px)
-   **Tailwind**: \_\_ (0), sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
-   **Simple**: mobile (0), computer (960px)

#### Z-Index Constants

Predefined z-index levels with consistent spacing:

-   Shadow levels: `$shadow1` to `$shadow9` (negative values)
-   Regular levels: `$level1` to `$level9` (positive values)
-   Spacing interval: `$spacing` (1000)

## Advanced Usage

### Theme Integration

```scss
@use 'sass-wdk/wdk/ui/theme';

// Define theme configuration
@include theme.set-theme(
    (
        colors: (
            primary: #007bff,
            secondary: #6c757d,
        ),
        fonts: (
            base: 'Helvetica, Arial, sans-serif',
            heading: 'Georgia, serif',
        ),
    )
);

.component {
    color: theme.get('colors/primary');
    font-family: theme.get('fonts/heading');
}
```

### Custom Breakpoints

```scss
@use 'sass-wdk/wdk/ui/media-query' as mq;

// Define custom breakpoints
$my-breakpoints: (
    tiny: 0,
    small: 480px,
    medium: 768px,
    large: 1024px,
    huge: 1200px,
);

@include mq.set-breakpoints($my-breakpoints);

.responsive-component {
    @include mq.media(small) {
        font-size: 1.1rem;
    }

    @include mq.media(large) {
        font-size: 1.3rem;
    }
}
```

### Registry-based Configuration

```scss
@use 'sass-wdk/wdk/reg';

// Store configuration
@include reg.ssv('design-system', 'spacing/base', 1rem);
@include reg.ssv('design-system', 'spacing/small', 0.5rem);
@include reg.ssv('design-system', 'colors/brand', #ff6b6b);

// Use throughout your stylesheets
.card {
    padding: reg.gsv('design-system', 'spacing/base');
    border-color: reg.gsv('design-system', 'colors/brand');
}
```

---

For detailed function signatures and parameter descriptions, see the source code comments in each module file.
