## ✅ Guia per actualitzar la meva web Quartz

### 🔁 PAS 1: Fer els canvis

* Escriu o modifica els teus arxius dins la carpeta `content/`, en qualsevol dels idiomes (`ca`, `es`, `en`, etc.).
* També pots modificar la configuració a `quartz.config.ts` o `package.json`.

---

### ⚙️ PAS 2: Compilar la web localment

Per veure els canvis abans de pujar-los:

```bash
npx quartz build --serve -d docs
```

Obre [http://localhost:8080](http://localhost:8080) i comprova que tot funciona bé.

---

### 🏗️ PAS 3: Generar la versió final per publicar

Només cal fer aquest pas si **NO** has fet servir `--serve` abans (o vols estar segur que la carpeta `docs/` s'ha generat correctament):

```bash
npx quartz build -d docs
```

---

### 📂 PAS 4: Preparar els arxius per pujar a GitHub

1. Afegeix tots els canvis (inclosos els de `docs/`):

   ```bash
   git add .
   ```

2. Fes el commit:

   ```bash
   git commit -m "Actualització de contingut Quartz"
   ```

3. Pujar a GitHub:

   ```bash
   git push origin main
   ```

---

### 🌐 PAS 5: Publicació automàtica a GitHub Pages

* Després de pujar, GitHub actualitza automàticament la web publicada (pot trigar entre 30 segons i 2 minuts).
* Assegura’t que a GitHub (Settings > Pages) tens seleccionat:

  * **Branch:** `main`
  * **Folder:** `docs/`

---

### ⚠️ NOTA ESPECIAL: Si canvies `quartz.config.ts` o `package.json`

Segueix el mateix procés, però:

1. **Comprova primer que funciona en local amb:**

   ```bash
   npx quartz build --serve -d docs
   ```

2. **Després genera la versió pública (si no ho has fet al pas anterior):**

   ```bash
   npx quartz build -d docs
   ```

3. **Finalment, puja-ho tot com sempre:**

   ```bash
   git add .
   git commit -m "Actualització de configuració Quartz"
   git push origin main
   ```

---

