var PanelStat = (function () {

var s; // private alias to settings

function somePrivateFunction() {
  alert("There are " + s. NumArticles + " articles");
}

return {
  settings: {
    // numArticles: 5,
    // articleList: $("#article-list"),
    // moreButton: $("#more-button")
  },

  init: function() {
    s = this.settings;
    this.bindUIActions();
    somePrivateFunction();
  },

  bindUIActions: function() {
    s.moreButton.on("click", function() {
    NewsWidget.getMoreArticles(s.numArticles);
  });

},

  getMoreArticles: function(numToGet) {
    // $.ajax or something
    // using numToGet as param
  }

  };

})();
