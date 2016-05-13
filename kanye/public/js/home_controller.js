(function() {
  angular.module('homeController', ['kanyeFactory'])
  .controller('homeCtrl', homeCtrl)

  function homeCtrl(kanyeRest) {
    var hc = this;
    hc.name = "Home Controller";
    hc.albums={};
    hc.songs={};
    hc.track;
    hc.show = false;
    hc.reg = new RegExp('_','g')
    hc.getAlbumInfo = function(albumName) {
      kanyeRest.getAlbums(albumName)
        .then(function(res){
          hc.albums[albumName] = res.data.result
        })
    };

    hc.getLyrics = function(song) {
      kanyeRest.getTrack(song)
        .then(function(res) {
          hc.songs[song.replace(hc.reg, ' ')] = res.data.lyrics
          hc.track = song.replace(hc.reg,' ')
          hc.show = true
        })
    };


  };
}());
