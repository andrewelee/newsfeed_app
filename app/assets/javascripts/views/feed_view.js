NewsReader.Views.FeedView = Backbone.View.extend({
  initialize: function(options) {
    this.feed = options.feed;
  },

  events: {
    'click #refresh' : 'refresh'
  },

  template: JST['feed'],

  render: function() {
    var content = this.template({feed: this.feed});
    this.$el.html(content);
    var that = this;
    NewsReader.feeds.each(function(entry){
      var entryView = new NewsReader.Views.EntryView({entry: entry});
      $('#entries').append(entryView.render().$el);
    });

    return this;
  },

  // render: function() {
  //   var content = this.template({ feed: this.feed });
  //   this.$el.html(content);
  //   return this;
  // },

  refresh: function(event) {
    var that = this;
    event.preventDefault();
    $(event.currentTarget).attr("disabled", true);

    this.feed.entries().fetch({
      success: function(collection) {
        that.render();
      }
    });
  }
});