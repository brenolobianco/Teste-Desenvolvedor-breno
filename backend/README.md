<h1>CRUD de cadastro de contatos</h1>


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
# Rotas que precisam de autenticação(usuario logado):
- Criaçao de contato
- Atualizaçao de contato
- Deleção de contato
