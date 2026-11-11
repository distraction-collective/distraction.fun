pnpm run build
ntl deploy --no-build -d dist --prod
git commit -m "deploy $(Get-Date -Format o)" --allow-empty
git push