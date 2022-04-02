class Device{
  constructor (name,power)
     {
       this.name = name;
       this.isPlugged = false;
       this.power = power;
    }


//Вкл или Выкл прибор
  plug(myAction){
     this.isPlugged = myAction;
  }

//Текущее потребление прибора
   getCurrentPower (){
     if (this.isPlugged)
        return this.power;
     else
        return 0;
   }

}


class DiveceLamp extends Device{
  constructor (cordLength){
    super('Lamp',40);
    this.cordLength=cordLength;
  }  
}


class DiveceComputer extends Device{
  constructor (processorType){
    super('Computer',400);
    this.processorType=processorType;
  }
  
 getSpecification(){
    return `${this.name} основан на платформе ${this.processorType}.`;
  }
  
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