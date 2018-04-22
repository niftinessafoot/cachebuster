# ![Cachebuster Extension Icon](dist/i/48.png) Cachebuster
A Chrome extension for appending a page’s URL with a cache-busting querystring. :punch:

Tired of manually appending the URL over and over in my latest work project, I build a Chrome extension to do the lifting for me. This is the source code.

It works by pushing the POSIX time onto the querystring and then reloading the page.

## Design Considerations
This is my first Chrome extension, so first I needed to figure out *how* to build one.

Functionally, I want it out of the way. Clicking the extension button works, but I’ve assigned <kbd>alt+r</kbd> to run it as well.

It doesn’t pollute the browser history. Buy using `history.replaceState`, Cachebuster overwrites the existing page and then calls `document.reload` as a callback.

## Authors
Matthew Smith - [@niftinessafoot](https://twitter.com/niftinessafoot)

## Shoutouts
Boxing Glove by [Iyyuk Papa](https://thenounproject.com/mohkamil001) via the Noun Project

## License
MIT © [Matthew Smith](http://www.niftinessafoot.com)
