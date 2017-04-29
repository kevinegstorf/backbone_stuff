describe("Song", function(){
  var song;

  beforeEach(function() {
    song = new Song();
  });

  it('should have a urlRoot like /api/songs', function() {
    expect(song.urlRoot).toEqual('/api/songs');
  });

  it('should have 0 by default for the numberOfPlays attribute.', function() {
    expect(song.get('numberOfPlays')).toEqual(0);
  });
  
  it('should have a title', function() {
    expect(song.isValid()).toBeFalsy();

    song.set('title', 'Blue in Green');
    expect(song.isValid()).toBeTruthy();
  })
  
  it('should increment the numberOfPlays.', function() {
    song.play();
    
    expect(song.get('numberOfPlays')).toEqual(1);
  });
});
