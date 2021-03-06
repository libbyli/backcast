var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.models.forEach(function(video) {
      var videoEntry = new VideoListEntryView({model: video});
      this.$('.video-list').append(videoEntry.render().el);
    });
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
