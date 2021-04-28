//2 methods to achieve this
//Method 1 : Use of Bind Method

const mul = (x, y) => {
  console.log(x * y);
};

mul(2, 3); // not Curried
const partial = mul.bind(this,2);
partial(3); //Curried

//---------------------------------------------------

//Mrthod 2 : Use Of Closures
const mul2 = (x)=>{
  return function fun(y){
    console.log(x*y);
  }
}

const partial2 = mul2(2);
partial2(3);//Curried
