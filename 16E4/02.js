function checkStrInObject(obj, str) {
  return (str in obj)
}

const obj1 ={a:'1'};
obj2=Object.create(obj1);
obj2.b='2';
console.log(checkStrInObject(obj2,'a'));