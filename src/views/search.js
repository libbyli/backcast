var SearchView = Backbone.View.extend({
  
  events: {
    'click .btn': 'handleSearch'
  },
  
  handleSearch: function() {
    this.trigger('search', this)
  },
  
  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
