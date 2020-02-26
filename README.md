# Executando a aplicação

## JSON Server

```bash
npm install -g json-server
```

No diretório raiz da aplicação executar o comando 

```
json-server -p 4000 --watch db.json
```
>Utilizamos a porta 4000, pois nossa aplicação react irá excutar na porta 3000.

A api que iremos consumir irá iniciar:

```
  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:4000/users

  Home
  http://localhost:4000

  Type s + enter at any time to create a snapshot of the database
  Watching...
```

## Inciando a aplicação react

Basta acessar a pasta ./webapp do projeto e executar os comandos:

```

cd webapp

#baixar a dependências do projeto
npm install

#Iniciando o projeto
npm start
```
> A aplicação será inicializada no endereço:

```link
http://localhost:3000/
```

![Site](https://i.imgur.com/rEjbeDJ.png)

