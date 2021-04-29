# Lavalink Heroku-Server Filters Enable!

Versão do lavalink: **v1.3.74** FUNCIONANDO!!

Quer apoiar o projeto ? faça uma doação por [aqui](https://picpay.me/brunoh_dev)

##### Atenção!

A instalação automática irá reiniciar seu servidor, portanto tenha consciência de que o repositorio está aberto ao publico para uso livre, não assumirei nenhuma responsabilidade por danos ocorridos, para aplicativos ja usado na mesma instancia!!

### Instalação com um clique: - Continue lendo abaixo !!
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/HellpMe/Lavalink-Heroku-24-7/tree/master)

- Buildpacks devem ser adicionados automaticamente, você pode alterar a variável `PASS` durante a instalação para alterar a senha do servidor.

## Erros/Advertências:
1. Após alterar o `PASS`, você deve expandir novamente ou clicar no menu` More` e clicar em **Restart all dynos**.
2. Se o Heroku não puder configurar buildpacks automaticamente, vá para as configurações de seus projetos no site do Heroku e adicione `java e nodejs.`

Atenção, entenda que seu servidor lavalink está **sem memória**. Se você estiver fazendo uma atualização, deve alterar **- Xmx** em `JAVA_TOOL_OPTIONS` para a nova quantidade de RAM disponivel em seu servidor

## ATENÇÃO!!
- Para funcionar 24/7 na heroku você devera fazer um fork desse repositorio e editar as seguintes partes 
- URL dentro do arquivo `lavalink.js` linha 15
- Onde está `seu_nome_aqui` colocar seu usuario do github, para funcionar você deve fazer um fork desse repositorio!!

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/seu_nome_aqui/Lavalink-Heroku-24-7/tree/master)

- Caso queira contribuir com o projeto envie uma pull request <3

### Meu servidor Lavalink
- Host: lavalink-heroku-prcojs.herokuapp.com
- Password: PrCoJs
