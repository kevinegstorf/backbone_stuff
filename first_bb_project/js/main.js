// var Song = Backbone.Model.extend({
//   validate: function(attrs){
//     if (!attrs.title)
//       return "Title is required";
//   }
// });
// 
// var song = new Song;


// var Song = Backbone.Model.extend();


// var song = new Song({
//   title: 'Blue in Green',
//   artist: 'Miles Davis',
//   publishYear: 1959
// });
// song.set('title', 'Blue in Green');
// song.set({
//   artist: 'Miles Davis',
//   publishYear: 1959
// });

var Animal = Backbone.Model.extend({
  walk: function(){
    console.log("Animal walking...");
  }
});

var Dog = Animal.extend({
    walk: function(){
      Animal.prototype.walk.apply(this);
      console.log("Dog walking...");
    }
  }
);

var dog= new Dog();

dog.walk();
