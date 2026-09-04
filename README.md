# Krabuś, Krówka i ich wędrówka

Mały, jednostronicowy blog w Astro o przygodach Krabusia, Krówki i spółki. Wszystkie wpisy są wyświetlane w całości na stronie głównej, od najnowszego do najstarszego.

## Tryb developerski

```bash
npm install
npm run dev
```

Strona będzie dostępna pod `http://localhost:4321`. Produkcyjny build sprawdzisz przez:

```bash
npm run build
npm run preview
```

## Dodawanie wpisów

Najwygodniej użyć [Pages CMS](https://app.pagescms.org):

1. wypchnij repozytorium na GitHub,
2. zaloguj się do Pages CMS kontem GitHub,
3. zainstaluj aplikację tylko dla tego repozytorium,
4. otwórz kolekcję „Opowieści” i wybierz „New”.

Edytor korzysta z konfiguracji `.pages.yml`, zapisuje Markdown bezpośrednio w `src/content/posts` i ma tryb rich-text (WYSIWYG). Zdjęcia trafiają do `public/images/posts`.

Bez CMS-a możesz skopiować dowolny plik z `src/content/posts`, podać tylko `title`, `date` i treść Markdown, a potem zapisać commit.

## Publikacja na GitHub Pages

Workflow jest gotowy w `.github/workflows/deploy.yml`.

1. Utwórz repozytorium na GitHubie i wypchnij branch `main`.
2. W `Settings → Pages → Build and deployment` wybierz `GitHub Actions`.
3. Każdy zapis z Pages CMS tworzy commit i automatycznie uruchamia nowy deploy.

Konfiguracja Astro sama rozpoznaje nazwę repozytorium podczas GitHub Action i ustawia poprawny `base`, także dla adresów typu `uzytkownik.github.io/nazwa-repo`.

Przy publikacji na Cloudflare Pages ustaw `SITE_URL` na pełny publiczny adres strony (np. `https://blog.example.com`) oraz `BASE_PATH=/`. Dzięki temu canonical URL, Open Graph, RSS, robots.txt i sitemap wskazują właściwą domenę.

Projekt generuje automatycznie `/rss.xml`, `/robots.txt`, `/sitemap-index.xml`, metadane Open Graph/Twitter oraz dane strukturalne Schema.org. Grafika udostępniania znajduje się w `public/og-image.png`.

## Personalizacja

- Teksty strony głównej: `src/pages/index.astro`
- Kolory i styl: `src/styles/global.css`
- Nazwa strony: `src/layouts/BaseLayout.astro`
