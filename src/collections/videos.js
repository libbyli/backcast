var Videos = Backbone.Collection.extend({

  model: Video,
  
  initialize: function() {
    // this.model.on('select', this.render, this);
    this.listenTo(SearchView, 'search', this.search.bind(this));
  },
  
  search: function() {
    console.log('search function invoked')
    $.ajax({
      type: 'GET',
      data: {
        query: $('.form-control').val(),
        maxResults: 5,
        key: YOUTUBE_API_KEY
      },
      success: function(data) {
        console.log('success', data);
      }
    });
  }
});
