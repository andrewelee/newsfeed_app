NewsReader.Views.EntryView = Backbone.View.extend({
  initialize: function(options) {
    this.entry = options.entry;
  },

  tagName: 'li',

  template: JST['entry'],

  render: function() {
    var content = this.template({entry: this.entry});
    this.$el.html(content);
    return this;
  }
});