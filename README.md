Front-end:

Link: https://github.com/Insigthfy/front
Branch de entrega final: main
Ciclo de branchs: criação de Pull Requests com aprovação de outro membro a partir de uma branch nomeada com a descrição da tarefa.
Descrição do repositório: Projeto destinado ao front-end do Insightfy, que conta com a aplicação Next.js. Projeto é divido em pastas e contém arquivos para instalação de pacotes e configurações do projeto em sua raiz.

Back-end:

Link: https://github.com/Insigthfy/back
Branch de entrega final: main
Ciclo de branchs: criação de Pull Requests com aprovação de outro membro a partir de uma branch nomeada com o padrão definido. (feat/descricaoTarefa)
Descrição do repositório: Projeto destinado ao back-end do Insightfy, que conta com a aplicação Nest. Projeto é divido em pastas e contém arquivos para instalação de pacotes e configurações do projeto em sua raiz. Segue o modelo de Module, Controller, Service padrão do Nest e utiliza o mongoose como ORM.


Como usar a aplicação?
Para que você possa utilizar a aplicação, é preciso que ambos os projetos (front e back) estejam sendo executados. Dessa maneira ao abrir sua aplicação front-end no navegador ela estará disponível para navegação. A utilização do cabeçalho permite ir para a página principal (/home), a qual você consegue explorar tudo que temos para oferecar, bases, formulários e dashboard.

# Readme


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Instal o node caso ainda não tenha: 

Instale os pacotes da aplicação:
[LINK](https://nodejs.org/en/download/package-manager)

```bash
npm install
```

## Importante
Para que o projeto possa realizar chamadas API ele deve conter a .env configurada. O modelo a ser seguido está no arquivo .env.example

Qualquer problema com a configuração da .env, falar com a equipe do Insightfy.

Para rodar no modo de desenvolvimento use:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador e veja o resultado.

Esse projeto usa [`next/font`](https://nextjs.org/docs/basic-features/font-optimization).

## Learn More

Docs:

- [Next.js Documentation](https://nextjs.org/docs) - Next.js features e API.
- [Learn Next.js](https://nextjs.org/learn) - Next.js tutorial.
