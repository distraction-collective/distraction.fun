pnpm run build
ntl deploy -d dist --prod
git commit -m "deploy $(Get-Date -Format o)" --allow-empty