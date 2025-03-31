# Projekt Next.js z shadcn/ui i komponentem z v0.dev

Projekt zawiera aplikację Next.js korzystającą z komponentów shadcn/ui oraz gotowy do implementacji komponentu z v0.dev.

## Uruchomienie w GitHub Codespaces

Aby uruchomić projekt w GitHub Codespaces:

1. Kliknij przycisk "Code" na głównej stronie repozytorium
2. Wybierz zakładkę "Codespaces"
3. Kliknij "Create codespace on main"

Po uruchomieniu Codespaces:

```bash
# Zainstaluj zależności
npm install

# Uruchom aplikację w trybie deweloperskim
npm run dev
```

## Implementacja komponentu z v0.dev

Aby zaimplementować komponent z v0.dev:

1. Otwórz link do v0.dev w przeglądarce: 
   ```
   https://v0.dev/chat/b/b_qAAIFfcBBL3?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..ArJt3ihu2SjXwEBS.EwU03std9IIm2shPrjfnLWpwdm86ugRgY_Q50-nU_e8-kpb4WS-F1vEDygA.b2MJobSewBX8EA9H30QG3Q
   ```

2. Skopiuj kod komponentu

3. Zmodyfikuj plik `src/components/v0-component.tsx` zastępując jego zawartość kodem z v0.dev

4. Jeśli potrzebne są dodatkowe komponenty shadcn/ui, zainstaluj je ręcznie:
   ```bash
   npx shadcn-ui@latest add [nazwa-komponentu]
   ```

5. Upewnij się, że wszystkie zależności są zainstalowane:
   ```bash
   npm install
   ```

6. Uruchom aplikację:
   ```bash
   npm run dev
   ```

## Struktura projektu

- `/src/app` - Strony aplikacji (App Router)
- `/src/components/ui` - Komponenty shadcn/ui
- `/src/components/v0-component.tsx` - Komponent z v0.dev
- `/src/lib` - Funkcje pomocnicze