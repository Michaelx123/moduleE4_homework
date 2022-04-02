function Device(name,power){
  this.name = name;
  this.isPlugged = false;
  this.power = power;
}

//Вкл или Выкл прибор
Device.prototype.plug = function(myAction){
  this.isPlugged = myAction;
}

//Текущее потребление прибора
Device.prototype.getCurrentPower = function(){
  if (this.isPlugged)
    return this.power;
  else
    return 0;
}

function DiveceLamp(cordLength){
  this.cordLength=cordLength
}

DiveceLamp.prototype = new Device ('Lamp',40);


function DiveceComputer(processorType){
  this.processorType=processorType  
}

DiveceComputer.prototype = new Device ('Computer',400);

DiveceComputer.prototype.getSpecification = function(){
  return `${this.name} основан на платформе ${this.processorType}.`;
}



const lamp = new DiveceLamp('2м');
const computer = new DiveceComputer('AMD');



//Включаем лампу и смотрим потребление
lamp.plug(true);

console.log(lamp.getCurrentPower());
console.log(computer.getCurrentPower());

//Выключаем лампу смотрим потребление
lamp.plug(false);
console.log(lamp.name+' потребляет '+lamp.getCurrentPower());

//Включаем компьютер смотрим спецификацию и потребление
computer.plug(true);
console.log(computer.getSpecification());
console.log(computer.name+' потребляет '+computer.getCurrentPower());

console.log(lamp);
console.log(computer);