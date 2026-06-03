# 📋 TaskBoard
[![React](https://img.shields.io/badge/React-19.2.5-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0.10-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![React Router](https://img.shields.io/badge/React_Router-7.15.0-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.76.0-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)](https://react-hook-form.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.3.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![JSON Server](https://img.shields.io/badge/JSON_Server-1.0.0--beta.15-323330?style=for-the-badge&logo=json&logoColor=white)](https://github.com/typicode/json-server)

O **TaskBoard** é uma aplicação web interativa desenvolvida em React, funcionando como um organizador de tarefas e notas inspirado no estilo visual e funcional do Google Keep. Cumprindo requisitos essenciais de navegação entre páginas, formulários controlados com validação, listagem dinâmica e gerenciamento de estado compartilhado.

Os usuários podem criar novas anotações, definir títulos e descrições, escolher cores de fundo para os cartões e visualizar todas as suas ideias em um painel responsivo estruturado em estilo alvenaria (*masonry grid*).

## 🚀 Tecnologias Utilizadas
Com base nas configurações do projeto, as seguintes tecnologias e bibliotecas foram utilizadas:
* **React 19** - Biblioteca principal para construção da interface de usuário.
* **Vite** - Ferramenta de build e servidor de desenvolvimento.
* **React Router DOM 7** - Gerenciamento de rotas e navegação (Páginas: Início, Nova Tarefa e Minhas Tarefas).
* **React Hook Form** - Construção e validação do formulário de criação de tarefas.
* **Context API** - Gerenciamento de estado global da aplicação.
* **TailwindCSS 4** - Estilização baseada em classes utilitárias e design responsivo.
* **JSON Server** - Simulação de uma API REST (mock) para consumo e persistência dos dados localmente.

## ⚙️ Instruções de Execução

Siga os passos abaixo para rodar o projeto localmente em sua máquina.

### Pré-requisitos
* Ter o [Node.js](https://nodejs.org/) instalado.

### 1. Instalação das dependências
Na raiz do projeto (onde está o arquivo `package.json`), abra o terminal e instale as dependências executando:

```bash
npm install
````

### 2. Rodar a API Mockada (Backend)
Para que a listagem e criação de tarefas funcionem corretamente, é necessário iniciar o servidor falso que servirá e modificará os dados do arquivo db.json. Em um terminal, execute o script configurado:

````bash
npm run server
````
O JSON Server estará rodando e escutando na porta http://localhost:3001.

### 3. Rodar a Aplicação (Frontend)
Abra um novo terminal (mantenha o terminal da API rodando) e inicie o servidor de desenvolvimento do Vite:

````bash
npm run dev
````
Acesse o link gerado no terminal (geralmente http://localhost:5173) no seu navegador.

✨ Principais Funcionalidades
Roteamento: Navegação sem recarregamento da página através do React Router.

Validação de Formulário: O cadastro exige título obrigatório e limites de caracteres, com feedback visual de erros.

Painel Dinâmico: As tarefas cadastradas formam cards coloridos num layout responsivo que se ajusta em celulares e desktops.

Exclusão de Tarefas: Exclusão interativa com modal de confirmação.

Estado Sincronizado: As alterações via formulário atualizam a API fake e o estado da aplicação simultaneamente usando Context API.

👥 Autores
Este projeto foi desenvolvido como trabalho prático para a disciplina de Construção de FrontEnd da faculdade pelos acadêmicos:
* [@Mari1434](https://github.com/Mari1434)
* [@Arth123Luther](https://github.com/Arth123Luther)
