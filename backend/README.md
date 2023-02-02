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
- cadastro e login
- cadastro,ediçao e deleçao de contato
- listagem de contatos cadastrados

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
# Rotas que precisa de autentiação(usuario logado):
- criaçao de contato
- atualizaçao de contato
- deleção de contato
