var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.videos.search();
    this.listenTo(this.videos, 'update', this.render);
    
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    new SearchView({el: this.$('.search'), collection: this.videos}).render();
    new VideoPlayerView({el: this.$('.player'), collection: this.videos, model: this.videos.models[0]});
    new VideoListView({el: this.$('.list'), collection: this.videos}).render();
    // this.videos.models[0].select();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
