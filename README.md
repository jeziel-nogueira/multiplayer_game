# Jogo Multiplayer - Desenvolvimento Server-Side
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

Este projeto é um estudo prático utilizando o framework Node.js com uma arquitetura orientada a eventos e comunicação em tempo real, projetado para proporcionar uma experiência de usuário fluida e interativa.

## Visão Geral
![mmo_server_structure](https://github.com/user-attachments/assets/4cb7e52c-f147-4ede-888c-73953e6f4833)

## Recursos
> ### Back-end
> + **Servidor**: Implementado em Node.js com o framework Express, responsável por gerenciar rotas HTTP e garantir uma estrutura modular e eficiente.
> + **Comunicação em Tempo Real**: Utilizando Socket.IO para possibilitar a troca de dados em tempo real entre cliente e servidor, permitindo uma comunicação eficiente para o multiplayer.
> ### Front-end
> + **Interface do Usuário**: Desenvolvida com HTML, CSS e JavaScript para uma interface simples e funcional.
> + **Padrão Observer**: A aplicação segue o padrão de design Observer, o que permite que o cliente se inscreva em eventos e seja notificado de atualizações em tempo real, proporcionando uma experiência dinâmica.
> ### Hospedagem e Deploy
> + **Serviço de Hospedagem**: O projeto está hospedado em uma instância Ubuntu no Amazon Lightsail.
> + **Proxy Reverso**: Utilização do Nginx como proxy reverso, gerenciando as requisições e redirecionando-as ao servidor Node.js.
> + **Gerenciamento de Processos**: O PM2 foi configurado para garantir a disponibilidade do servidor e para gerenciar os processos, facilitando a reinicialização automática e monitoramento.

## Como Executar Localmente
> 1. Clone o repositório:
>    ```bash
>    git clone https://github.com/jeziel-nogueira/multiplayer_game.git
> 
> 2. Acesse a pasta do projeto:
>    ```bash
>    cd multiplayer_game
> 
> 3. Instale as dependências:
>    ```bash
>    npm install
> 4. Inicie o servidor:
>    ```bash
>    npm start
> O servidor estará rodando em http://localhost:3000. Para testar a comunicação em tempo real, abra múltiplas abas no navegador e faça interações como coletar os itens ou enviar mensagens no chat.

## Tecnologias Utilizadas
> + Node.js
> + Express
> + Socket.IO
> + HTML/CSS/JavaScript
> + Nginx
> + PM2
> + Amazon Lightsail


## Resultado Final:
![Captura de Tela (68)](https://github.com/user-attachments/assets/f29632f6-8dd5-442c-8456-27f1fe3ff6fd)
### Equipe
> + Jeziel<br>
> + Pedro<br>
> + Vinicius<br>
> + Santhiago

## License
Este projeto está sob a licença [MIT](https://opensource.org/licenses/MIT).
