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
