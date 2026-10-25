# Emma Lk — Fiction for the Curious

An English-language author portfolio containing **18 catalogued stories** across four collections. The public catalogue is maintained in [books.json](books.json), and the static site is [index.html](index.html).

## Wattpad catalogue status

Author profile: https://www.wattpad.com/user/user34912981

The 18 records were compiled from this repository's existing portfolio, **not directly verified against Wattpad**. Each record includes `verifiedOnWattpad: false` and `wattpadStoryUrl: null` until an actual story URL can be confirmed. Do not claim that these are all currently published Wattpad works.

On the site, story links take visitors to the author's profile and provide a **title search on Wattpad**, not a verified direct story page. Search results might include other authors' works.

To complete an accurate sync:
1. Obtain the public Wattpad story URLs from the author's profile or export.
2. Match each published story against `books.json` by title and author; add missing titles only when verified.
3. Set `wattpadStoryUrl` to the confirmed direct link and `verifiedOnWattpad` to `true`.
4. Update `index.html` and the original source together so its links stay consistent.

## GitHub Pages

In **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/(root)`. The root `index.html` is the static page. Book covers are stored in `site-source/public/`. All 18 catalogued cover paths currently match repository files.

The public GitHub Pages deployment has not been independently verified.

## Source

`site-source/` contains the original web app source, configuration and assets.
