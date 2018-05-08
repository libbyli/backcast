var VideoListEntryView = Backbone.View.extend({
  
  el: '.video-list',
  
  initialize: function() {
    this.render();
    console.log(this.model);
  },

  render: function() {
    this.$el.append(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
