# 📚 Manual d'Instruccions per Actualitzar Quartz (Obsidian + GitHub Pages)

## 🔄 Flux de treball bàsic

```bash
# 1. desplaça't al lloc on tens la web amb 
cd Documents
cd web
# 2. Genera la versió estàtica
npm run deploy

# 3. (Opcional) Prova localment
npx serve docs
# (per acabar amb la previsualització, ctrl+C)
# 4. Puja els canvis a GitHub
git add docs/ content/
git commit -m "Actualització del contingut"
git push origin main
```

# 📝 Manual Ampliat per Canvis en Fitxers de Configuració de Quartz

**Inclou ara modificacions en fitxers com `quartz.layout.ts` i altres configs**

## 🔄 Flux Complet per Qualsevol Canvi

### Per canvis en:
- ✅ Arxius Markdown a `/content`
- ✅ Fitxers de configuració (`.ts`) com `quartz.layout.ts`
- ✅ Estils CSS
- ✅ Plantilles

```bash
# 1. Després de fer els canvis als arxius .ts o .css
npm run deploy

# 2. Verifica localment (opcional però recomanat)
npx serve docs

# 3. Puja TOTS els canvis a GitHub
git add .  # Això afegirà tots els fitxers modificats
git commit -m "Canvis en configuració i layout"
git push origin main