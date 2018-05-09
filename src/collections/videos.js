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
        key: window.YOUTUBE_API_KEY,
        type: 'video',
        videoEmbeddable: true
      },
      success: function(data) {
        videoCollection.set(data.items);
      }
    });
  },
});
