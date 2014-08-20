NewsReader.Views.FeedsIndexView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(
      NewsReader.feeds, 'sync remove add reset', this.render
    );
  },

  events: {
    'click .delete' : 'destroy',
    'submit form' : 'submit'
  },

  template: JST['feeds_index'],

  render: function() {
    var content = this.template({ feeds: NewsReader.feeds });
    this.$el.html(content);
    return this;
  },

  destroy: function(event) {
    event.preventDefault();
    var id = $(event.target).attr('data-id');

    NewsReader.feeds.get(id).destroy({
      success: function() {
        NewsReader.feeds.remove({ id: id });
      }
    });
  },

  submit: function(event) {
    event.preventDefault();
    var that = this;
    var feedData = $(event.target).serializeJSON();
    NewsReader.feeds.create(feedData);
  }
});