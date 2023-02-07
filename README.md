# Projeto Full-Stack de cadastro contatos

# Backend
### Funcionalidades:
- Cadastro e login de usuário
- Cadastro, edição e deleção de contato
- Listagem de contatos cadastrados.

## Campos Models de contato:
- nome
- contato
- email
- imagem

## Campos Models de usuario:
- name
- email
- password

### Funcionalidades:
- Cadastro e login de usuário
- Cadastro, edição e deleção de contato
- Listagem de contatos cadastrados.

## Tecnologias utilizadas:
<table>
<tr>
 <td>PHP</td>
 <td>Laravel</td>
 <td>Composer</td>
  <td>Sanctum</td>
  <td>MYSql</td>
</tr>
<tr>
<td>8</td>
<td>8.7</td>
<td>2.5</td>
<td>2.15</td>
<td>8</td>
 </tr>
</table>

### Como rodar a aplicação:
1. run shell: composer install(instalar composer)
2. crie um novo Schema MySql
3. crie o arquivo .env(copie o .env.example)
4. configure suas variaveris do banco de dados no .env
5. run shell: php artisan migrate
6. run shell: php artisan serve

## Especificações:

## Rotas que precisam de autenticação(usuario logado):
- Criaçao de contato
- Atualizaçao de contato
- Deleção de contato

# Frontend


### Funcionalidades:
- Cadastro e login
- Cadastro, ediçao e deleção de contato;
- listagem de contatos cadastrados baseado no mes em que foi criado.

## Tecnologias utilizadas:
<table>
<tr>
 <td>Vue </td>
 <td>Javascript</td>
 <td>HTML</td>
  <td>CSS</td>
  <td>Axios</td>

</tr>
<tr>
<td>3</td>
<td>6</td>
<td>6</td>
<td>3</td>

 </tr>
</table>

### Como rodar a aplicação:

1. Certifique que o backend esteja funcional(leia readme da pasta backend)
2. Em um terminal separado rode: php artisan serve
3. run shell:yarn install
4. run shell: npm run dev