var Song = Backbone.Model.extend({
    urlRoot: '/api/songs',

    defaults: {
        numberOfPlays: 0
    },

    validate: function(attrs) {
        if (!attrs.title)
            return 'Title is required.';
    },

    play: function() {
        var numberOfPlays = this.get('numberOfPlays');
        this.set('numberOfPlays', numberOfPlays + 1);
    }
});

var Album = Backbone.Collection.extend({
    model: Song,

    url: '/api/songs',

    getPopularSong: function() {
        if (this.length == 0)
            return undefined;
        var sortedSongs = this.sortBy(function(song) {
            return song.get('numberOfPlays');
        });

        return sortedSongs[sortedSongs.length - 1];

    }
});