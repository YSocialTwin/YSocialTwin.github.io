# YSocialTwin.github.io

This repository hosts the **Y Social** project website.

**🌐 Visit the website:** [https://ysocialtwin.github.io](https://ysocialtwin.github.io)

**📦 Looking for Y Social installation?** See the [main Y Social repository](https://github.com/YSocialTwin/YSocial)

---

## Website Development

This section is for website contributors who need to set up Jekyll to develop the website.

Nella cartella appena clonata eseguire: 

```bash
bundle install
```

Nel caso di errori relativi a **wdm** commentare la riga nel file **Gemfile** e rilanciare il comando **bundle install**

```bash
# gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
```

lanciare il sito con il comando bundle
```bash
bundle exec jekyll serve
```

**aprite il browser all’indirizzo [http://127.0.0.1:4000](http://127.0.0.1:4000)**.


---

## Anteprima locale del sito v4.0.0

Il branch `v4.0.0` contiene il nuovo sito (stile del login di YSocial, tema scuro con interruttore chiaro/scuro, contenuti per la release 4.0.0). **Non è compilato né pubblicato**: la cartella `docs/` (servita da GitHub Pages) non viene toccata, quindi il sito online resta quello attuale.

### Requisiti

- Ruby 3.x con Bundler (`ruby -v`, `bundle -v`)
- Accesso a internet al primo avvio (gem, Font Awesome e Bootstrap sono caricati da CDN)

### Passi

```bash
git fetch origin            # solo se il branch è stato pubblicato
git checkout v4.0.0
bundle install              # su Windows, in caso di errori su wdm, vedi sopra
bundle exec jekyll serve --livereload
```

Poi aprire [http://127.0.0.1:4000](http://127.0.0.1:4000). Le modifiche a pagine, CSS e JS vengono ricaricate da sole. `_config.yml` invece si rilegge solo riavviando il comando.

**Importante:** usare il comando qui sopra *senza* `--config _config.yml,_build_config.yml`. Quella configurazione scrive in `docs/` ed è riservata alla pubblicazione. Con il comando di anteprima l'output va in `_site/` (ignorato da git).

### Cosa guardare

- Home: hero con rete animata e feed simulato; pulsante in alto a destra per passare da tema scuro a chiaro (la scelta resta salvata nel browser).
- Menu: Get started, Inside YSocial (con la nuova pagina *Plugins*), ySights, Resources, Blog, About.
- Nuove pagine: `/whats_new` e `/plugins` (dati in `_data/plugins.yml`).
- Download: rileva il sistema operativo e evidenzia l'installer; versione mostrata da `ysocial_version` in `_config.yml`.
- Blog: contenuti invariati, solo lo stile cambia (CSS).
- Provare anche da telefono: aprire `http://<ip-del-computer>:4000` con `bundle exec jekyll serve --host 0.0.0.0`.

### Problemi comuni

- *Porta 4000 occupata:* `bundle exec jekyll serve --port 4001`.
- *Stile vecchio dopo un aggiornamento:* ricaricare senza cache (Ctrl/Cmd+Maiusc+R).
- *`bundle install` fallisce su wdm:* commentare la riga `wdm` nel `Gemfile`, senza committare la modifica.
- *Icone mancanti nel menu:* servono i CDN di Font Awesome, controllare la connessione.

### Per pubblicare (quando deciderete)

```bash
bundle exec jekyll build --config _config.yml,_build_config.yml   # riscrive docs/
```

poi commit di `docs/` e merge su `main`. Fino ad allora non serve farlo.
