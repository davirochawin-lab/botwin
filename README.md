# Bot Win Double — site estático

Clone estático (HTML + CSS + JS puros) da página https://botwin.com.br/teste-gratis/

## Estrutura
```
index.html
favicon.ico
robots.txt
netlify.toml
_redirects
assets/
  css/style.css
  js/main.js
  img/      (logo em 300x300 e 1080x1080)
  emoji/    (ícones SVG usados no texto)
  video/    (coloque aqui um vídeo .mp4 se quiser hospedar local)
```

## Deploy no GitHub + Netlify
1. Suba o conteúdo desta pasta na raiz de um repositório no GitHub.
2. No Netlify: "Add new site" → "Import an existing project" → selecione o repo.
3. Build command: deixe vazio. Publish directory: `.` (raiz).
4. Deploy. Pronto.

## Adicionar o vídeo
- **YouTube (recomendado):** abra `assets/js/main.js` e preencha
  `var YOUTUBE_ID = "SEU_ID_AQUI";`. O espaço reservado vira o player automaticamente.
- **Vídeo próprio:** coloque o arquivo em `assets/video/` e substitua a `div#video-slot`
  do `index.html` por `<video src="assets/video/seu-video.mp4" controls playsinline></video>`.

## Botão
O botão "ENTRAR NO GRUPO OFICIAL" aponta para https://t.me/+ITis4GeiufE3NGZh
