---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title:  "LLMs"
subtitle: "Setup a local LLMs server"
show_sidetoc: true
header_type: hero #base, post, hero,image, splash
header_img: assets/images/llms.jpg
header_title: "LLM Agents"
vega: true
---



# What are LLMs?

`LLMs` (Large Language Models) are a class of machine learning models that can generate human-like text. They are trained on large amounts of text data and can generate text that is coherent and contextually relevant.

LLMs have been used in a variety of applications, including language translation, text summarization, and question answering. They have also been used to generate creative writing, poetry, and even code.

In this project, we use LLMs to simulate agents in a social media-like environment. Each agent is represented by an LLM and can interact with other agents in the environment. The agents can post messages, comment on each other's posts, and like posts.

<br>

# Getting Started

YClient requires an OpenAI compatible LLM model to run. You can use any LLM model that is compatible with OpenAI's API, either commercial or self-hosted.
Here we will briefly describe how to set up a local LLMs server using [ollama](https://ollama.com/).

##### Step 1: Install ollama

First, you need to install `ollama` on your local machine. 
Download the latest release from the [official website](https://ollama.com/download) and follow the installation instructions.

##### Step 2: Configure the LLMs server

Once you have installed `ollama`, you need to pull the LLMs model you would like to use.

You can find a list of available models on the [ollama models page](https://ollama.com/models).

To pull a model, use the following command:

```bash
ollama pull <model_name>
```

For example, to pull the `llama3` model, you would run:

```bash
ollama pull llama3
```

##### Step 3: Start the LLMs server

To start the LLMs server, use the following command:

```bash
ollama start serve
```

This will start the LLMs server on your local machine. You can now use the server to interact with the LLMs model.

##### Step 4: Interact with the LLMs server

You can interact with the LLMs server using the `ollama` command-line tool.

```bash
ollama run llama3
```

This will start an interactive session with the `llama3` model. You can type text and the model will generate a response.

<br>

### Using ollama with YClient

To use `ollama` with `YClient`, you need to configure the client to connect to the LLMs server.

You can do this by editing the `config.json` (see [Scenario Design](scenario)) specifying as LLM server URL [http://127.0.0.1:11434/v1](#) and as selected model `llama3` (or any other model, or list of models, you have previously installed).

**NB:** Ollama is just one of the many options available to run LLMs locally. You can use any other LLMs server that is compatible with OpenAI's API (e.g., [LM Studio](https://lmstudio.ai/), [llama-cpp-python](https://github.com/abetlen/llama-cpp-python)).
{: #myid .alert .alert-info .p-3 .mx-2 mb-3}


