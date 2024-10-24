# Vefforritun 1 - 2024, Hópverkefni 1

Í þessu verkefni áttum við að gera skalanlega vefsíðu samkvæmt hönnun sem við fengum
á Figma. 

---

## Hvernig skal keyra verkefnið

1. Sækja verkefnið:
 - Smelltu á græna "Code" takkann á GitHub síðunni til að sækja zip skránna eða
 notaðu `git clone`.

```bash
git clone git@github.com:MonSteroids/vef1-2024-h1.git
cd < slóð á möppu >
# Dæmi cd C:/verkefni/vef1-2024-h1
```

2. Setja upp "node modules"
 - Eftir að þú hefur sótt kóðann, keyrðu eftirfarandi skipun til að setja upp "node modules".
    
```bash
npm install
```

3. Keyra verkefni
 - Eftir að "node modules" hafa verið sótt getur þú notað eftirfarandi skipanir til þess
 að keyra forritið.

```bash
npm run dev
```
eða
```bash
npm start
```

---

## Skipulag verkefnis
Verkefninu er skipt niður í eftirfarandi möppur:

- **fonts/** - Inniheldur öll letur sem eru notuð.
- **myndir/** - Inniheldur allar myndir og tákn sem eru notuð.
- **node_modules/** - Inniheldur alla npm pakka sem eru notaðir til að keyra forritið.
- **pages/** - Inniheldur þrjár síður: `recipe.html`, `recipes.html`, og `videos.html`
- **styles/** - Inniheldur allar SCSS skrár sem við höfum skrifað fyrir verkefnið.

Auk þess eru "Höfuðskrár" í rót verkefnisins:
- **grid.scss** - Inniheldur stillingar til að fylgjast með skölun á verkefni.
- **index.html** - Aðalsíða verkefnis.
- **scripts.js** - Inniheldur allan JavaScript kóða.
- **styles.css** - Samansafn af öllum SCSS skrám.
- **styles.css.map** - Inniheldur kóða sem tengir CSS skránna við SCSS skrárnar.
- **styles.scss** - Inniheldur "import" á öllum SCSS skrám til að þýða yfir í CSS.

---

## Nemendur sem unnu að hópverkefni 1 - Hópur 12:

|  Nafn                        | Netfang         | Github       |
| :--------------------------- | :-------------: | :----------: |
| Eggert Örn Sigurðsson        | eos13@hi.is     | eggigeggi1   |
| Elfar Oliver Sigurðarson     | eos35@hi.is     | elfaroliver  |
| Snæfríður Ebba Ásgeirsdóttir | sea28@hi.is     | snaefi       |
| Veigar Ágúst Hafþórsson      | vah29@hi.is     | MonSteroids  |
