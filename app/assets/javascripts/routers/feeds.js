NewsReader.Routers.Feeds = Backbone.Router.extend({
  initialize: function($content) {
    this.$content = $content;
  },

  routes: {
    '': 'index',
    'feeds/:id': 'show'
  },

  index: function() {
    var indexView = new NewsReader.Views.FeedsIndexView();
    this.$content.html(indexView.render().$el);
  },

  show: function(id) {
    var feed = NewsReader.feeds.getOrFetch(id);
    var feedView = new NewsReader.Views.FeedView({ feed: feed });
    this.$content.html(feedView.render().$el);
  }

});