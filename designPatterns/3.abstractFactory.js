// 抽象工厂方法
var VehicleFactory = function (subType, superType) {
  // 判断抽象工厂中是否有该抽象类
  if (typeof VehicleFactory[superType] === 'function') {
    // 缓存类
    function F() {
    }

    // 继承父类属性和方法
    F.prototype = new VehicleFactory[superType]();

    // 将子类 constructor 指向子类
    subType.constructor = subType;

    // 子类原型继承 "父类"
    subType.prototype = new F();
  } else {
    // 不存在该抽象类抛出异常
    throw  new Error('未创建该抽象类');
  }
};

VehicleFactory.Car = function () {
  this.type = 'car';
};

VehicleFactory.Car.prototype = {
  getPrice: function () {
    return new Error('抽象方法不能用');
  },
  getSpeed: function () {
    return new Error('抽象方法不能用');
  }
};

VehicleFactory.Bus = function () {
  this.type = 'bus';
};
VehicleFactory.Bus.prototype = {
  getPrice: function () {
    return new Error('抽象方法不能用');
  },
  getSpeed: function () {
    return new Error('抽象方法不能用');
  }
};

VehicleFactory.Truck = function () {
  this.type = 'truck';
};
VehicleFactory.Truck.prototype = {
  getPrice: function () {
    return new Error('抽象方法不能用');
  },
  getSpeed: function () {
    return new Error('抽象方法不能用');
  }
};

var BMW = function (price, speed) {
  this.price = price;
  this.speed = speed;
};
VehicleFactory(BMW, 'Car');
BMW.prototype.getPrice = function () {
  return this.price;
};
BMW.prototype.getSpeed = function () {
  return this.speed;
};

var Lamborghini = function (price, speed) {
  this.price = price;
  this.speed = speed;
};
VehicleFactory(Lamborghini, 'Car');
Lamborghini.prototype.getPrice = function () {
  return this.price;
};
Lamborghini.prototype.getSpeed = function () {
  return this.speed;
};

var Yutong = function (price, passengerNum) {
  this.price = price;
  this.passengerNum = passengerNum;
};
VehicleFactory(Yutong, 'Bus');
Yutong.prototype.getPrice = function () {
  return this.price;
};
Yutong.prototype.getPassengerNum = function () {
  return this.passengerNum;
};

var BenzTruck = function (price, trainLoad) {
  this.price = price;
  this.trainLoad = trainLoad;
};
VehicleFactory(BenzTruck, 'Truck');
BenzTruck.prototype.getPrice = function () {
  return this.price;
};
BenzTruck.prototype.getTrainLoad = function () {
  return this.trainLoad; // 装载量
};

var truck = new BenzTruck(450000, 10000);
console.log(truck.getPrice(), truck.type);
console.log(truck.getTrainLoad(), truck.type);