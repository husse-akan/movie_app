# Movie App

En React-baserad webbapplikation där användare kan söka efter filmer, visa detaljerna och hantera en favoritlista. Applikationen använder OMDB API för att hämta filmdata och Redux toolkit för state management.

## Funktioner

- **Sökfunktion:** Hitta filmer genom att skriva in en titel.
- **Filmdetaljer:** Utforska detaljerad information om valda filmer inklusive handling, genre, och utgivningsår.
- **Favoritlista:** Spara och ta bort filmer från din egen favoritlista.
- **Lokal lagring:** Favoritlistan sparas lokalt i webbläsaren för att bevaras mellan sessioner.
- **Responsiv design:** Applikationen är optimerad för både mobila enheter, surfplattor och desktop.
- **SEO-funktionalitet:** Implementerade meta-taggar, sitemap och robots.txt för att förbättra SEO.
- **Händelsespårning:** Google Analytics och Google Tag Manager används för att spåra när en användare lägger till filmer i favoriter.
- **Tester:** Cypress används för end-to-end-tester.

## Teknologier som används

- **React**: Komponentbaserad struktur för gränssnittet.
- **Redux Toolkit**: Hantering av globalt state och API-anrop.
- **OMDb API / The Movie Database API**: Datakälla för filminformation.
- **Cypress**: För att genomföra end-to-end-tester.
- **Google Analytics & Google Tag Manager**: För att spåra användarinteraktioner.
- **Git**: Versionshantering och samarbete.

## Projektkrav & Funktioner som Uppfyllts

1. **React frontend**: Komponenter som `SearchBar`, `Layout`, `Navbar`, och `Header` är återanvändbara och props används för att skicka data mellan komponenter.
2. **Redux Toolkit**: Implementerat med flera slices för hantering av favoritlistan och API-anrop.
3. **API-hantering**: Integrerat med OMDb API för att söka efter filmer och visa detaljer. Async thunks hanterar asynkrona API-anrop.
4. **SEO-optimering**: Meta description, meta keywords, title, sitemap.xml och robots.txt implementerat. Applikationen är responsiv för olika enheter.
5. **Spårning**: Google Analytics och Tag Manager spårar användarinteraktioner, såsom tillägg av filmer i favoriter.
6. **Git & Versionshantering**: Minst tre commits per branch och korrekt branching-struktur.
7. **Testdriven utveckling**: Cypress används för att skriva end-to-end-tester.
