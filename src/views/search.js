var SearchView = Backbone.View.extend({
  
  events: {
    'click button': 'handleSearch',
    'keyup .form-control': 'handleSearchEnter'
  },
  
  handleSearch: function() {
    this.collection.search();
  },
  
  handleSearchEnter: function() {
    if (event.keyCode == 13) {
      this.collection.search();
    }
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
