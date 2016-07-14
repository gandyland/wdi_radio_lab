"use strict";

(function(){
  angular
    .module("songs", [
      "ui.router",
      "firebase",
      "songs"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ])

    function RouterFunction($stateProvider){
      $stateProvider
        .state("Welcome", {
          url: "",
          templateUrl: "js/greetings.html"
        })
        .state("songs", {
          url: "/songs",
          templateUrl: "js/songs/index.html",
          controller: "SongsIndexController",
          controllerAs: "SongsIndexViewModel"
        })
    }
}());
