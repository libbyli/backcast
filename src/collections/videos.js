var Videos = Backbone.Collection.extend({

  model: Video,
  
  search: function() {
    var videoCollection = this;
    $.ajax({
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        part: 'snippet',
        q: $('.form-control').val(),
        maxResults: 5,
        key: 'AIzaSyC0Ki9aSX2m8xFZIUZAHpNVHu1SiYRV6cU'
      },
      success: function(data) {
        videoCollection.set(data.items);
      }
    });
  },
});
