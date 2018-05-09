var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.listenTo(this.videos, 'update', this.render);
    this.videos.search();
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    new SearchView({el: this.$('.search'), collection: this.videos}).render();
    new VideoPlayerView({el: this.$('.player'), collection: this.videos});
    new VideoListView({el: this.$('.list'), collection: this.videos}).render();
    this.videos.models[0].select();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
