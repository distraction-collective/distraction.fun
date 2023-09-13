# Distraction Collective

Paris-based collective pushing the boundaries of digital experiences and advocating for the legitimity of video games as an art form

This repo manages our website

- live on [distraction.fun](https://distraction.fun)
- hosting with [netlify](https://app.netlify.com/sites/distraction-collective/overview)
- dns with [namecheap](https://ap.www.namecheap.com/domains/domaincontrolpanel/distraction.fun/domain)

Dev:

```sh
pnpm install
pnpm run dev
```

Deploy:

```sh
pnpm run build
pnpm add -g netlify-cli
ntl login
ntl deploy -d dist --prod
```
