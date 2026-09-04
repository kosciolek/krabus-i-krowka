# Notatki projektowe

## Czcionki

Aktualnie używany krój to **Cardo** (propozycja nr 8 z testera).

Dwie zachowane alternatywy:

1. **Newsreader** — propozycja nr 1
   - CSS: `--serif: 'Newsreader', Georgia, serif;`
   - Google Fonts: `https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500&display=swap`
2. **Alegreya** — propozycja nr 3
   - CSS: `--serif: 'Alegreya', Georgia, serif;`
   - Google Fonts: `https://fonts.googleapis.com/css2?family=Alegreya:wght@400;500&display=swap`

Aby przywrócić jeden z tych krojów, trzeba zmienić `--serif` w `src/styles/global.css` oraz adres arkusza Google Fonts w `src/layouts/BaseLayout.astro`.
