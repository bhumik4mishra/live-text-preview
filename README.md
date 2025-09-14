# Live Text Preview

A tiny JavaScript demo that shows whatever you type in an input field instantly in a paragraph below.  
This is a basic DOM-manipulation exercise to understand how `addEventListener` and element properties like `innerText` work.

## Features
- Live preview of text as you type.
- Uses vanilla JavaScript only (no frameworks).
- Clean and minimal HTML/CSS.

## How it Works
The script listens for the `input` event on an `<input>` element.  
Every time you type, it updates the `<p>` element’s text using:

```js
p.innerText = inp.value;
# live-text-preview
