# foco-na-rotina

O que é o Foco no Estudo?
O Foco no Estudo é um aplicativo de monitoramento de estudos que utiliza o poder da Inteligência Artificial (IA) para transformar a forma como estudantes se organizam e aprendem. Ele vai além de uma agenda, oferecendo um sistema adaptativo para otimizar o tempo e a retenção do conhecimento.

Para Quem Serve? (Público-Alvo)
O aplicativo é voltado para qualquer pessoa que precise de disciplina e acompanhamento claro no aprendizado. 

Nosso público principal inclui:
Estudantes (Ensino Médio e Superior).

Concurseiros e candidatos a processos seletivos.

Pessoas que estudam de forma autônoma (cursos online, idiomas).

O foco é em usuários que enfrentam a ansiedade da desorganização e a procrastinação por falta de um caminho estruturado.

## 🛠️ Tecnologias Utilizadas

| Categoria | Tecnologia |
| :--- | :--- |
| **Backend** | Node.js, Express, TypeScript |
| **Database** | MongoDB (via Mongoose) |
| **Frontend**| React |
| **CI/CD** | GitHub Actions |


# 🚀 API de Estudos (TypeORM + Express + MongoDB)

Uma API RESTful desenvolvida em Node.js com TypeScript, utilizando o TypeORM para mapeamento de objetos e MongoDB como banco de dados.

## 🌟 Recursos Principais

* **Padrão de Projeto:** Estrutura em Camadas (Controller -> Service -> Repository).
* **Banco de Dados:** Conexão e manipulação via TypeORM (MongoDB).
* **Rotas:** CRUD completo para a entidade `Study`.
* **Tecnologias:** TypeScript para segurança de tipos.

## ⚙️ Tecnologias Utilizadas

| Tecnologia | Versão/Tipo | Finalidade |
| :--- | :--- | :--- |
| **Node.js** | Ambiente de Execução | Servidor principal. |
| **TypeScript** | Linguagem | Superset tipado do JavaScript. |
| **Express** | Framework | Criação de rotas e manipulação de requisições HTTP. |
| **TypeORM** | ORM | Mapeamento de objetos (classes) para documentos MongoDB. |
| **MongoDB** | Banco de Dados | Persistência dos dados de estudo. |
| **Dotenv** | Configuração | Gerenciamento de variáveis de ambiente. |

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

1.  **Node.js e npm** (versão LTS recomendada).
2.  Um servidor **MongoDB** rodando localmente (ou uma instância na nuvem, como MongoDB Atlas).

## 🚀 Instalação e Execução

### 1. Clonar o Repositório
