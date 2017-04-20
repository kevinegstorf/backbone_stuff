// Creating a Collection

var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
    model: Song
});

var songs = new Songs([
  new Song({ title: "song2"}),
  new Song({ title: "song3"}),
  new Song({ title: "song4"}),
]);

songs.add(new Song({ title: 'song5'}));

songs.add(new Song({ title: 'song1', genre: 'Jazz', downloads: 100}), {at: 0});

songs.push(new Song({ title: 'song5', genre: 'Jazz', downloads: 120}));

var jazzSongs = songs.where({ genre: 'Jazz'});

var firstJazzSong = songs.findWhere({ genre: 'Jazz'});

console.log('Jazz Songs', jazzSongs);
console.log('First Jazz Song', firstJazzSong);

var filteredSongs = songs.where({ genre: 'Jazz', title: 'song5'});
console.log('Filtered Songs', filteredSongs);

var topDownloads = songs.filter(function(song){
  return song.get("downloads") >= 100;
});

console.log("Top Downloads", topDownloads);

songs.each(function(song){
  console.log(song);
});