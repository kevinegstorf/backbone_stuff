var Vehicle = Backbone.Model.extend();

var Vehicles = Backbone.Collection.extend({
  model: Vehicle
}) 

var VehicleView = Backbone.View.extend({
  tagName: 'li',

  
  render: function(){

    this.$el.html(this.model.get('registrationNumber') + ' ' + "<button class ='vehicle'> delete " + this.model.get('registrationNumber')+ '</button>');
    this.$el.attr("id", 'testing');

    return this;
  }
});

var VehiclesView = Backbone.View.extend({

  tagName: 'ul',
  events: {"click": "onClickDelete"},
  onClickDelete: function(e){
    self = this
    console.log(self);
    console.log('clickerdyclick');
  },
  initialize: function () {
    this.model.on("add", this.onVehicleAdded, this);
    this.model.on("remove", this.onVehicleRemoved, this);
  },

  onVehicleAdded: function(vehicle) {
    var vehicleView = new VehicleView({ model: vehicle});

    this.$el.append(vehicleView.render().$el);
  },

  onVehicleRemoved: function(vehicle){
    this.$el.find("li#" + vehicle.id).remove();
    
  },

  render: function(){
    var self = this;
    this.model.each(function(vehicle){
      var vehicleView = new VehicleView({ model: vehicle });
      self.$el.append(vehicleView.render().$el);
    });
  }
});

var vehicles = new Vehicles([
  new Vehicle( { registrationNumber: 'XLI887', color: 'Blue' }),
  new Vehicle( { registrationNumber: 'ZNP123', color: 'Blue' }),
  new Vehicle( { registrationNumber: 'XUV456', color: 'Gray' })
]);

var vehiclesView = new VehiclesView({ el: '#vehicle', model: vehicles});
vehiclesView.render();





































// var Vehicle = Backbone.Model.extend();
// 
// var Vehicles = Backbone.Collection.extend({
//   model: Vehicle
// }) 
// 
// 
// var VehicleView = Backbone.View.extend({
//   tagName: 'li',
//   className: 'vehicle',
// 
//   render: function(){
//     // var template = _.template($('#vehicleTemplate').html());
//     // var html = template(this.model.toJSON());
//     // this.$el.html(html);
//     // return this
//     // 
//     this.$el.html(this.model.get('registration number'));
//     this.$el.attr("id", this.model.id);
//     
//     return this;
//   }
// });
// 
// var VehiclesView = Backbone.View.extend({
// 
//   tagName: 'ul',
//   initialize: function () {
//     this.model.on("add", this.onVehicleAdded, this);
//     this.model.on("remove", this.onVehicleRemoved, this);
//   },
// 
//   onVehicleAdded: function(vehicle) {
//     var songView = new VehicleView({ model: vehicle});
// 
//     this.$el.append(vehicleView.render().$el);
//   },
// 
//   onVehicleRemoved: function(vehicle){
//     this.$el.find("li#" + vehicle.id).remove();
//     
//   },
// 
//   render: function(){
//     var self = this;
//     this.model.each(function(vehicle){
//       var vehicleView = new VehicleView({ model: vehicle});
//       self.$el.append(vehicleView.render().$el);
//     });
//   }
// });
// 
// var vehicles = new Vehicles([
//   new Vehicle( { registrationNumber: 'XLI887', color: 'Blue' }),
//   new Vehicle( { registrationNumber: 'ZNP123', color: 'Blue' }),
//   new Vehicle( { registrationNumber: 'XUV456', color: 'Gray' })
// ]);
// 
// var vehiclesView = new VehiclesView({ el: '.vehicles', model: vehicles});
// vehiclesView.render();