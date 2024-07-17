# SoBigData Master - Progettone Website Template

Per sviluppare il sito web del Progettone®, utilizzeremo un Generatore di Siti Statici (SSG), che consente di creare siti web rapidi da caricare senza la necessità di complessi sistemi backend o database.

In particolare, useremo uno dei SSG più diffusi, **Jekyll**.


# Per clonare questo tema in un proprio repository

Andare al seguente link:

```bash
https://github.com/new/import
```

e inserire il link del repository da clonare:

```bash
https://github.com/danielefadda/sbd-master-template.git
```

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

**aprite il browser all’indirizzo [http://127.0.0.1:4000](http://127.0.0.1:4000)** e utilizzare le indicazioni all'interno del sito stesso per creare il sito web del proprio progettone.
