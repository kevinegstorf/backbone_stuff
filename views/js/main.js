var Song = Backbone.Model.extend();

var SongView = Backbone.View.extend({
  render: function () {
    var template = _.template($('#songTemplate').html());
    var html = template(this.model.toJSON());
    this.$el.html(html);
    return this
  }
});

var song = new Song({ title: "Blue in Green", plays: 10});

var songView = new SongView({ el: "#container", model: song});
songView.render();


















// var Song = Backbone.Model.extend();
// 
// var Songs = Backbone.Collection.extend({
//   model: Song
// }) 
// 
// var SongView = Backbone.View.extend({
//   tagName: 'li',
// 
//   render: function(){
// 
//     this.$el.html(this.model.get('title'));
//     this.$el.attr("id", this.model.id);
// 
//     return this;
//   }
// });
// 
// var SongsView = Backbone.View.extend({
// 
//   tagName: 'ul',
//   initialize: function () {
//     this.model.on("add", this.onSongAdded, this);
//     this.model.on("remove", this.onSongRemoved, this);
//   },
// 
//   onSongAdded: function(song) {
//     var songView = new SongView({ model: song});
// 
//     this.$el.append(songView.render().$el);
//   },
// 
//   onSongRemoved: function(song){
//     this.$el.find("li#" + song.id).remove();
//     
//   },
// 
//   render: function(){
//     var self = this;
//     this.model.each(function(song){
//       var songView = new SongView({ model: song });
//       self.$el.append(songView.render().$el);
//     });
//   }
// });
// 
// var songs = new Songs([
//   new Song({ id: 1, title: "Blue in Green"}),
//   new Song({ id: 2, title: "So What"}),
//   new Song({ id: 3, title: "All Blues"}),
// ]);
// 
// var songsView = new SongsView({ el: '#songs', model: songs});
// songsView.render();




















// var Song = Backbone.Model.extend({
//   defaults: {
//     listeners: 0
//   }
// });
// 
// var SongView = Backbone.View.extend({
//   initialize: function(){
//     this.model.on("change", this.onModelChange, this);
//   },
//   
//   onModelChange: function(){
//     this.$el.addClass('someClass');
//   },
//   render: function() {
//     this.$el.html(this.model.get("title") + " - Listeners " + this.model.get("listeners"));
//     return this;
//   }
// });
// 
// var song = new Song({ title: 'Blue in Green' });
// 
// var songView = new SongView({ el: "#container", model: song});
// songView.render();





















// var Song = Backbone.Model.extend();
// 
// var Songs = Backbone.Collection.extend({
//   model: Song
// }) 
// 
// var SongView = Backbone.View.extend({
//   tagName: 'span',
//   vehic
//   id: '1234',
//   attributes: {
//     'data-genre': 'Jazz'
//   },
//   render: function(){
// 
//     this.$el.html(this.model.get('title'));
// 
//     return this;
//   }
// });
// 
// var SongsView = Backbone.View.extend({
//   render: function(){
//     this.model.each(function(song){
//       var songView = new SongView({ model: song });
//       this.$el.append(songView.render().$el);
//     });
//   }
// });
// 
// var songs = new Songs([
//   new Song({ title: "Blue in Green"}),
//   new Song({ title: "So What"}),
//   new Song({ title: "All Blues"}),
// ]);
// 
// var songsView = new SongsView({ el: '#container', model: songs});
// var songView = new SongView({ el: '#container' });
// var songView = new SongView();

// songView.render();
// 
// $('#container').html(songView.$el);

// $('#container').html(songView.render().$el);




// songsView.render();
// 
// 
// var song = new Song({ title: 'Blue in Green' });
// var songView = new SongView({ el: '#container', model: song });
// songView.render();