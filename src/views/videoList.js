var VideoListView = Backbone.View.extend({
  
  el: '.list',
  
  initialize: function() {
    this.render();
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    // this.collection.models.forEach(this.renderVideo, this);
    this.collection.models.forEach(function(video) {
      new VideoListEntryView({model: video});
    })
    return this;
  },
  
  // renderVideo: function(video) {
  //   var VideoListEntryView = new VideoListEntryView({model: video});
  //   this.$el.append(VideoListEntryView.render());
  // }

  template: templateURL('src/templates/videoList.html')

});
