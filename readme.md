# Podcast Manager

## Descrição
O **Podcast Manager** é um aplicativo ao estilo Netflix, projetado para centralizar diferentes episódios de podcasts separados por categorias. O objetivo é facilitar o acesso e organização de conteúdos em formato de vídeo, permitindo aos usuários explorar e filtrar episódios de maneira intuitiva.

---

## Funcionalidades
- **Listar episódios de podcasts** em sessões de categorias (saúde, fitness, mentalidade, humor, entre outras).
- **Filtrar episódios por nome do podcast**, para uma busca mais eficiente.

---

## Domínio
Podcasts em formato de vídeo.

---

## Implementação

### Listar os episódios de podcasts em sessões de categorias
Os episódios são fornecidos por meio de uma API REST que retorna um objeto JSON. Cada episódio contém as seguintes informações:

- **Nome do podcast**
- **Nome do episódio**
- **Imagem de capa**
- **Link** (para reprodução do episódio)
- **Categoria** (uma ou mais categorias relacionadas ao episódio)

#### Exemplo de resposta JSON:
```json
[
    {
        "podcastName": "Smzinho",
        "episode": "MONSTER HUNTER WORLD PT#05 - Chegamos no Anjanath",
        "videoId": "F6tEDrHjLp8",
        "cover": "https://i.ytimg.com/vi/F6tEDrHjLp8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBhhgtE5GG6obCdXSVF_2plmJIRXA",
        "link": "https://youtu.be/F6tEDrHjLp8",
        "category": ["saude", "gamer"]
    },
    {
        "podcastName": "Smzinho",
        "episode": "MONSTER HUNTER WORLD PT#06 - Explorando novas áreas",
        "videoId": "A7tEDrHjLp9",
        "cover": "https://i.ytimg.com/vi/A7tEDrHjLp9/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBhhgtE5GG6obCdXSVF_2plmJIRYA",
        "link": "https://youtu.be/A7tEDrHjLp9",
        "category": ["humor", "gamer"]
    }
]
```

### Filtrar episódios por nome do podcast
Os usuários podem aplicar filtros para localizar episódios de um podcast específico. Essa funcionalidade utiliza parâmetros de consulta na API para retornar apenas os episódios correspondentes.

---

## Tecnologias Utilizadas
- **Backend:** Node.js com Express.js para criação da API REST
- **Banco de Dados:** MongoDB para armazenamento das informações dos podcasts
- **Frontend:** React para interface do usuário
- **Hospedagem:** AWS para implantação do sistema

---

## Como Executar o Projeto

### Backend
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/podcast-manager.git
   ```
2. Navegue até o diretório do backend:
   ```bash
   cd podcast-manager/backend
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor:
   ```bash
   npm start
   ```

### Frontend
1. Navegue até o diretório do frontend:
   ```bash
   cd podcast-manager/frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

---

## Contribuição
Contribuições são bem-vindas! Siga estas etapas para contribuir:
1. Faça um fork do repositório.
2. Crie uma branch para suas modificações:
   ```bash
   git checkout -b minha-branch
   ```
3. Envie suas alterações:
   ```bash
   git commit -m "Minha contribuição"
   git push origin minha-branch
   ```
4. Abra um Pull Request no repositório original.

---

## Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
