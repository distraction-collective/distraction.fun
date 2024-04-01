#!/bin/sh
pnpm run build
ntl deploy -d dist --prod
git commit -m "deploy $(date -Ins)" --allow-empty
git push
