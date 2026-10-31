#!/bin/sh
# Baut die App und veröffentlicht dist/ auf dem gh-pages-Zweig (GitHub Pages).
set -e
cd "$(dirname "$0")/.."
bun run build
TMP=$(mktemp -d)
cp -R dist/. "$TMP"/
touch "$TMP/.nojekyll"
cd "$TMP"
NAME=$(git -C "$OLDPWD" config user.name); MAIL=$(git -C "$OLDPWD" config user.email)
git init -q -b gh-pages
git config user.name "$NAME"; git config user.email "$MAIL"
git add -A
git commit -qm "Deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)"
git remote add origin "$(git -C "$OLDPWD" remote get-url origin)"
git push -f origin gh-pages
rm -rf "$TMP"
