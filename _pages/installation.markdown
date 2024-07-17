---
layout: default
title: Installation
subtitle: Installation Guide
---

# Guida all’installazione di Jekyll

Per sviluppare il sito web del Progettone®, utilizzeremo un Generatore di Siti Statici (SSG), che consente di creare siti web rapidi da caricare senza la necessità di complessi sistemi backend o database.

In particolare, useremo uno dei SSG più diffusi, **Jekyll**.

Jekyll è un SSG open-source gratuito basato sul linguaggio di programmazione Ruby. **Non è necessario conoscere Ruby per utilizzare Jekyll**; è sufficiente avere Ruby installato sul proprio computer.
<hr>
I vantaggi di Jekyll sono molteplici:

**Facilità d'uso**: Jekyll utilizza file di testo semplice e sintassi markdown per creare e gestire i contenuti, quindi non è necessario avere conoscenze di HTML o CSS per iniziare.

**Velocità e sicurezza**: Jekyll non interagisce con database o script lato server, riducendo il rischio di vulnerabilità e attacchi. Genera file HTML statici, rendendo il sito incredibilmente veloce e sicuro.

**Personalizzabilità**: Jekyll è altamente personalizzabile, permettendo l'uso di layout e template o la creazione di plugin per estenderne le funzionalità.

**Facilità di distribuzione**: Jekyll genera file HTML statici che possono essere distribuiti su un server web o un provider di hosting senza necessità di un sistema di gestione dei contenuti dinamici.
<hr>
**Nella seguente guida troverete i prerequisiti per far funzionare Jekyll**

<br>
# Come installare Jekyll su Windows

Per installare Ruby e Jekyll su un computer Windows, dovete usare il RubyInstaller. Questo può essere fatto scaricando e installando una versione di Ruby+Devkit da [RubyInstaller Downloads](https://rubyinstaller.org/downloads/) e **utilizzando le opzioni predefinite per l’installazione e prendendo l’ultima versione consigliata**
(lasciate selezionato  quello che trovate, soprattutto **MSYS2**) .

Questa operazione richiederà qualche minuto.

Nell’ultima fase dell’installazione guidata, eseguite <code>ridk <strong>install </strong></code>(come consigliato), che serve per installare le gemme. Per saperne di più, consultate la [Documentazione di RubyInstaller](https://github.com/oneclick/rubyinstaller2#using-the-installer-on-a-target-system).

al termine dell’installazione vi apparirà questo prompt:

![Ruby Installer on windows]({{site.baseurl}}/assets/images/RubyInstaller.png "image_tooltip")



Tra le opzioni, scegliete **MSYS2** and **MINGW development toolchain** (3 Enter). 

Questa operazione richiede qualche minuto, è normale che compaiano degli alert.

Aprite una nuova finestra del **prompt dei comandi** e installate Jekyll e Bundler con il comando seguente:


```
gem install jekyll bundler
```


Verificare che Jekyll sia installato correttamente:


```
jekyll -v
```


Se vedete il numero di versione, significa che Jekyll è installato e funziona correttamente sul vostro sistema. **Ora tutto è pronto per iniziare a usare Jekyll!**

<br>
# Come Installare Jekyll su macOS

Per impostazione predefinita, Ruby è preinstallato su macOS, ma non è possibile usare questa versione di Ruby per installare Jekyll, perché è vecchia. Per esempio, su Ventura, la versione di Ruby preinstallata è la 2.6.10, mentre attualmente l’ultima versione è la 3.1.3

Per risolvere questo problema, dovete installare Ruby correttamente usando un gestore di versioni come **chruby**. 

### Homebrew
Per prima cosa dovete installare **Homebrew** (nel remoto caso in cui non l’abbiate ancora fatto)

Per controllare se homebrew è installato eseguite il comando 


```
brew -v
```


nel caso sia già installato vi apparirà il numero di versione.

**per installare Homebrew** sul vostro Mac eseguire il comando seguente nel vostro terminale:


```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```


il sistema potrebbe richiedervi di accettare i termini di licenza di homebrew, seguite le indicazioni che vi appaiono:


```bash
sudo xcodebuild -license
```


e dopo aver scorso i termini di licenza digitate 


```bash
agree
```


per accettare.

Una volta completata l’installazione, configurate la vostra shell per usare automaticamente brew: per poter utilizzare brew dal vostro terminale dovrete aggiungerlo a PATH,**il programma vi dirà nel dettaglio come fare** al termine dell’installazione, si tratta di scrivere qualcosa del tipo: \



```bash
(echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> /Users/nomeutente/.zprofile
    eval "$(/opt/homebrew/bin/brew shellenv)
```


Una volta che l’installazione è andata a buon fine,**uscite e riavviate il terminale**, quindi verificate se Homebrew è pronto per l’uso eseguendo questo comando:


```bash
brew -v
```

### Chruby e Ruby-install
Se avete visualizzato la versione di Homebrew potete passare all’installazione di **chruby** e ruby-install con il comando seguente.

Proseguite con l’installazione di chruby e ruby-install utilizzando il seguente comando:


```bash
brew install chruby ruby-install
```


Ora potete installare l’ultima versione di ruby, la 3.1.3, usando il pacchetto ruby-install appena installato:


```bash
ruby-install 3.1.3
```


L’operazione richiederà diversi minuti. 

Una volta completata l’installazione, configurate la vostra shell per usare automaticamente chruby con il comando seguente:


```bash
echo "source $(brew --prefix)/opt/chruby/share/chruby/chruby.sh" >> ~/.zshrc
echo "source $(brew --prefix)/opt/chruby/share/chruby/auto.sh" >> ~/.zshrc
echo "chruby ruby-3.1.3" >> ~/.zshrc
```


<div class="alert alert-warning" role="alert">
  <strong>Attenzione!</strong> Se state usando un terminale bash invece di zsh, il comando è lo stesso, salvo puntare al tipo di terminale differente: <code>~/.bash_profile</code>

N.B. nel caso usiate come terminale bash invece di zsh il comando è lo stesso, salvo puntare al tipo di terminale differente: <code>~/.bash_profile</code>
</div>

```bash
echo "source $(brew --prefix)/opt/chruby/share/chruby/chruby.sh" >> ~/.bash_profile
echo "source $(brew --prefix)/opt/chruby/share/chruby/auto.sh" >> ~~/.bash_profile
echo "chruby ruby-3.1.3" >> ~/.bash_profile
```


A questo punto potete **uscire e rilanciare il Terminale**, quindi verificare che tutto funzioni eseguendo questo comando:


```bash
ruby -v
```


Dovrebbe esserci scritto **<code>ruby 3.1.3.</code>**

### Jekyll e Bundler
Avete installato l’ultima versione di Ruby sul vostro computer, quindi potete procedere all’installazione dell’ultima gemma di Jekyll e di bundler:


```bash
gem install jekyll bundler
```


Verificate che Jekyll sia installato correttamente


```bash
jekyll -v
```


Se vedete il numero di versione, significa che Jekyll è installato e funziona correttamente sul vostro sistema. **Ora tutto è pronto per iniziare a usare Jekyll!**



<br>
# Test di creazione del sito

Premessa importante: si consiglia di sviluppare il sito internet utilizzando un editor tipo Visual Studio Code o PyCharm (editor utilizzato dai docenti del corso).
<hr>
Per creare un nuovo sito che funzionerà in locale nella cartella my-progettone digitate:


```bash
jekyll new my-progettone
```


entrare nella cartella


```bash
cd my-progettone
```


eseguire 


```bash
bundle exec jekyll serve
```


aprite il browser all’indirizzo [http://127.0.0.1:4000](http://127.0.0.1:4000) (come indicato nel terminale)

Complimenti, se siete arrivati fino a qui dovreste visualizzare un sito web con gli elementi minimi.

ATTENZIONE! nel caso di installazioni con **windows**, è possibile che la gemma **wdm **restituisca un errore che impedisce la compilazione del sito stesso.

in questo caso aprite il file Gemfile creato durante l’esecuzione di <code>jekyll <strong>new</strong> my-progettone</code>

commentare la riga utilizzando il carattere **#**


```bash
# gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
```


salvate il file e eseguite: 


```bash
bundle update
```


rilanciate il sito con 


```bash
bundle exec jekyll serve
```


**aprite il browser all’indirizzo [http://127.0.0.1:4000](http://127.0.0.1:4000)**

<br>
# Per clonare questo progetto in un proprio repository

**È necessario (e sufficiente) che questa operazione sia fatta da una persona sola del gruppo** 

Andate al seguente link:

```bash
https://github.com/new/import
```

Inserire il link del repository da clonare:

```bash
https://github.com/danielefadda/sbd-master-template.git
```

Invitare gli altri componenti del gruppo di lavoro
<hr>

A questo punto aprite **tutti** il vostro terminale, nella cartella dove avete i vostri progetti
```bash
git clone https://github.com/danielefadda/g0-2024-website.git
```

Nella cartella appena clonata eseguite: 

```bash
bundle install
```

Nel caso di errori relativi a **wdm** commentate la riga nel file **Gemfile** e rilanciate il comando **bundle install**

```bash
# gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
```

lanciate il sito con il comando bundle
```bash
bundle exec jekyll serve
```

**aprite il browser all’indirizzo [http://127.0.0.1:4000](http://127.0.0.1:4000)**

---
# Come pubblicare il sito su GitHub Pages

Per pubblicare il sito su GitHub Pages, è necessario creare un repository su GitHub con il nome **username.github.io**, dove **username** è il vostro nome utente GitHub.

Una volta creato il repository e clonato il progetto, editate il file di configurazione `_build_config.yml` con i vostri dati.

Per pubblicare il sito, eseguite i seguenti comandi:

```bash
url: "https://nomeutente.github.io" # ad esempio "https://danielefadda.github.io"
baseurl: "/nome-del-repository/" # ad esempio "/g0-2024-website/"
destination: "docs"
```
Andate sul terminale nella cartella del progetto e digitate:

```bash
bundle exec jekyll build --config _config.yml,_build_config.yml
```

A questo punto potete fare il commit e il push del progetto sul vostro repository GitHub. Nel momento in cui lanciate il comando qui sopra si creerà una cartella **docs** con il sito pronto per essere pubblicato.
La definizione di **baseurl** è fondamentale per il corretto funzionamento del sito su GitHub Pages. Ogni qualvolta si voglia scrivere un link assoluto, è necessario utilizzare la variabile **site.baseurl** nell'indirizzo.

Per esempio, per linkare la pagina **about** si dovrà scrivere:

{% raw %}
```html
<a href="{{ site.baseurl }}/about">About</a>
```
{% endraw %}

### Configurazione di GitHub Pages

Per pubblicare il sito su GitHub Pages, è necessario configurare il repository.

Andate su **Settings** e scorrete fino a ** Pages** nella barra laterale.

Source: **deploy from a branch**. Selezionate il branch **main** e la cartella **/docs**.

A questo punto il vostro sito sarà visibile all'indirizzo

`https://username.github.io/nome-del-repository/`

Ad esempio: [https://danielefadda.github.io/sbd-master-template/](https://danielefadda.github.io/sbd-master-template/)

