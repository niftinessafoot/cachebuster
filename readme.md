# ![Cachebuster Extension Icon](dist/i/48.png) Cachebuster

A [Chrome extension](https://chrome.google.com/webstore/detail/cachebuster/afiinpbcebimbkifmejdieegbekceodk) for appending a page’s URL with a cache-busting querystring. :punch:

Tired of manually appending the URL over and over in my latest work project, I built a Chrome extension to do the lifting for me. This is the source code. The extension itself can be found at [https://chrome.google.com/webstore/detail/cachebuster/afiinpbcebimbkifmejdieegbekceodk](https://chrome.google.com/webstore/detail/cachebuster/afiinpbcebimbkifmejdieegbekceodk)

It works by pushing the POSIX time onto the querystring and then reloading the page.

## Design Considerations

This is my first Chrome extension, so first I needed to figure out _how_ to build one.

Functionally, I want it out of the way. Clicking the extension button works, but I’ve assigned <kbd>alt+r</kbd> to run it as well.

It doesn’t pollute the browser history. By using `history.replaceState`, Cachebuster overwrites the existing page and then calls `document.reload` as a callback.

## Authors

Matthew Smith - [@niftinessafoot](https://twitter.com/niftinessafoot)

## Shoutouts

Boxing Glove by [Iyyuk Papa](https://thenounproject.com/mohkamil001) via the Noun Project

## License

MIT © [Matthew Smith](http://www.niftinessafoot.com)
