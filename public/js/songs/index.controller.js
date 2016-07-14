"use strict";

(function(){
angular
.module("songs")
.controller("SongsIndexController", [
  "$firebaseArray",
  "$firebaseObject",
  ControllerFunction
])
function ControllerFunction($firebaseArray, $firebaseObject){
  var vm = this;
  var ref = firebase.database().ref().child("songs");
  $firebaseArray(ref).$loaded().then(function(songs){
    vm.songs = songs;
  })

  vm.play = function(song){
    vm.playSong = song;
    vm.playSong.encodedUrl = $sce.trustAsResourceUrl(song.audio_url);
  }
}

})();
