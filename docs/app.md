# Podcast Manager

### Dominio

Podcasts feitos em video

### Descricao

Um app ao estilo netflix, aonde possa centralizar diferentes eps podcast separodos por categorias

### Features
- Listar os eps podcasts em sessoes de categorias
 - [saude, fitness, mentalidade, humor]
-  Filtrar episodios por nome de podcasts

## Como

#### Featues
- Listar os eps podcasts em sessoes de categorias

### Como vou implementar:
Vou retorna em uma api rest(json) o nome do podcast, nome do episodio, imagem de capa, link, categoria.

```js
[
{
    podcastName:"Smzinho",
    episode: "MONSTER HUNTER WORLD PT#05 - Chegamos no Anjanath",
    videoId:"F6tEDrHjLp8",
    cover: "https://i.ytimg.com/vi/F6tEDrHjLp8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBhhgtE5GG6obCdXSVF_2plmJIRXA",
    link:"https://youtu.be/F6tEDrHjLp8",
    category: ["saude", "gamer"]

},
{
    podcastName:"Smzinho",
    episode: "MONSTER HUNTER WORLD PT#05 - Chegamos no Anjanath",
    videoId:"F6tEDrHjLp8",
    cover: "https://i.ytimg.com/vi/F6tEDrHjLp8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBhhgtE5GG6obCdXSVF_2plmJIRXA",
    link:"https://youtu.be/F6tEDrHjLp8",
    category: ["saude", "gamer"]

},
{

    podcastName:"Smzinho",
    episode: "MONSTER HUNTER WORLD PT#05 - Chegamos no Anjanath",
    videoId:"F6tEDrHjLp8",
    cover: "https://i.ytimg.com/vi/F6tEDrHjLp8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBhhgtE5GG6obCdXSVF_2plmJIRXA",
    link:"https://youtu.be/F6tEDrHjLp8",
    category: ["saude", "gamer"]

}
]
```

