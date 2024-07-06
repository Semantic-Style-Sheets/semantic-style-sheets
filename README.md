# Semantic Style Sheets
 
A css library built for writing semantic html

## Dev
Run `npm run dev` to start development mode. This will compile any SCSS to a main.css file located in the [/dev/output](./dev/output) folder when changes are made.

## Build 
Run `npm run build` to build the project. This will compile all SCSS into a main.css file aswell as a minified main.min.css file. Built files will be placed in the [/build](./build) folder.

## Table of contents

- ### [HTML Elements](#html-elements)
- ### [Utility classes](#utility-classes)
- ### [CSS reset](#css-reset)

## HTML Elements
Located in [./src/semantic](./src/semantic).

Contains updated default stylings for html elements outlined in the [mdn web docs HTML elements reference
](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), e.g `<button>`. 

All html elements are styled using the `:where` psuedo to ensure a specifity of 0, allowing styling from classes to take precedent when needed. 

Some elements contains multiple different styles depending on attributes or arias. Such as `<input type="file">` or `<button aria-busy="true">` which are differently styled from their respective `<button>` and `<input>` elements.

On top of the already defined HTML elements there are some custom made elements, e.g `<grid>` which defines a grid layout. 

## Utility classes
Located in [./src/utility](./src/utility).

Utility classes are based on CSS properties outlined in the [mdn web docs CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference).

As of release 0.1.0 all properties which require a `<length>` value are defined using `rem` with values ranging from .25 - 5.  Classnames for theese properties are set to the value multiplied by 100.

> **_NOTE:_**  `<percentage>` values are not yet supported

For example: 
```css
.margin-y-100 {
    margin-block: 1rem;
}
```   

## CSS reset
Located in [./src/reset](./src/reset). 

A pretty straight forward css reset. I mean why would i not use `box-sizing: border-box;`.
