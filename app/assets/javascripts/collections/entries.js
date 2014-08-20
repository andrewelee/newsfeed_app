NewsReader.Collections.Entries = Backbone.Collection.extend({
  model: NewsReader.Models.Entry,

  initialize: function(params) {
    this.feed = params.feed;
  },

  url: function() {
    return this.feed.url() + '/entries';
  }
});