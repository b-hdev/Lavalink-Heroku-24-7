# Lavalink Heroku-Server Filters Enable!

Versão do lavalink: **v1.3.74** FUNCIONANDO!!

Quer apoiar o projeto ? faça uma doação por [aqui](https://picpay.me/brunoh_dev)

##### Atenção!

A instalação automática irá reiniciar seu servidor, portanto tenha consciência de que o repositorio está aberto ao publico para uso livre, não assumirei nenhuma responsabilidade por danos ocorridos!!

### Установка в один клик:
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/HellpMe/Lavalink-Heroku-24-7/tree/master)

- Buildpacks devem ser adicionados automaticamente, você pode alterar a variável `PASS` durante a instalação para alterar a senha do servidor.

## Erros/Advertências:
1. Após alterar o `PASS`, você deve expandir novamente ou clicar no menu` More` e clicar em ** Restart all dynos **.
2. Se o Heroku não puder configurar buildpacks automaticamente, vá para as configurações de seus projetos no site do Heroku e adicione java e nodejs.

Atenção, entenda que seu servidor lavalink está **sem memória**. Se você estiver fazendo uma atualização, deve alterar **- Xmx** em `JAVA_TOOL_OPTIONS` para a nova quantidade de RAM disponivel em seu servidor

# ATENÇÃO!!
- Edite o arquivo `keep-alive.js` em `app.json` e modifique o URL para seu servidor criado na heroku!!

- Caso queira contribuir com o projeto envie uma pull request <3

