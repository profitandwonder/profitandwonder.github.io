# profitandwonder.github.io

Website for the [Profit and Wonder](https://www.youtube.com/@profitandwonder) YouTube channel: home page and privacy policy (the privacy page is linked from the Google sign-in screen of our YouTube tool). Static HTML/CSS, hosted on GitHub Pages.

## Getting Started
Open `index.html` in a browser, or run `bunx serve .` and go to http://localhost:3000. Push to `main` to publish.

Art comes from the channel banner (`brand/profit-and-wonder/final/` in the marketing-shorts repo). Fonts: Outfit and Nunito (SIL OFL, licences in `fonts/`).

## Video pages (generated)
`v/`, `videos/`, `t/`, `media/v/`, `v.js`, `sitemap.xml`, `robots.txt`, `llms.txt` and the Latest videos block in `index.html` (between the `site-build:videos` markers) are written by `bun run site-build` in the marketing-shorts repo's `renderer/` folder. Do not edit them by hand: change `content/site/<slug>.md` there and rebuild, then commit and push here. `bun run site-build --check` reports problems without writing. The video player loads only after a click (youtube-nocookie.com); see `privacy.html#video`.
