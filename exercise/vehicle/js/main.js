var Vehicle = Backbone.Model.extend({

  idAttribute: 'registrationNumber',

  urlRoot: '/api/vehicles',
  
  validate: function(attrs){
    if (!attrs.registrationNumber)
      return 'Vehicle is not valid.'
  },

  start: function(){
    console.log('Vehicle started');
  }
});

var Car = Vehicle.extend({
  start: function(reg){
    console.log('Car with registration number' +  this.get('registrationNumber') + "started.");
  }
});

var car = new Car({
  registrationNumber: 'XLI887',
  color: 'Blue'
})

car.unset('registrationNumber');

car.set('registrationNumber', 'XLI887');

if (!car.isValid())
  console.log(car.validationError);

car.start();

var Cars = Backbone.Collection.extend({
  model: Car
})

var cars = new Cars([
  new Car( { registrationNumber: 'XLI887', color: 'Blue' }),
  new Car( { registrationNumber: 'ZNP123', color: 'Blue' }),
  new Car( { registrationNumber: 'XUV456', color: 'Gray' })
]);

var blueCars = cars.where({color: 'Blue'});
console.log('Blue Cars', blueCars);

var registrationCar = cars.where({registrationNumber: 'XLI887'});
console.log('XLI887', registrationCar);

cars.pop({ registrationNumber: 'XLI887', color: 'Blue' });

console.log(cars.toJSON());

cars.each(function(car){
  console.log(car);
});

