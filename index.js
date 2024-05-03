var tag = document.createElement('script');
      var button = document.getElementById('btn');

      button.disabled = true; // Desabilita o botão

    // Este código carrega o código da API do IFrame Player de forma assíncrona.
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // Esta função cria um <iframe> (e um player do YouTube) após o download do código API.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          videoId: '8DYbf1I7IW8',
          events: {
            'onStateChange': onPlayerStateChange    
          }
        });
      }

      // A API chamará esta função quando o player de vídeo estiver pronto.
      function onPlayerReady(event) {
        event.target.playVideo();
        
      }

      // A API chama esta função quando o estado do jogador muda. O player indica o final do vídeo e o botão fica disponível para clicar.
       
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
            button.disabled = false;
        }
      }

        // Adiciona um link ao botão
        button.addEventListener("click", function() {
            window.location.href = "https://www.google.com";
        });

      function stopVideo() {
        player.stopVideo();
      }