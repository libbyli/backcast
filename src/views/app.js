var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
    var videoList = new VideoListView({collection: this.collection});
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
