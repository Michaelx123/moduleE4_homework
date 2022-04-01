function showOwnKey (obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(`${key}: ${obj[key]}`); 
    }   
   }
}

const obj1 ={a:1};
showOwnKey(obj1);

obj2=Object.create(obj1);
obj2.b=2;
showOwnKey(obj2);
