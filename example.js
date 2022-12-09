function displayvalue(){
    let a = "hello worlld";
    console.log("a");
}
function displayvalueon()
{
    let b = 1234;
    document.write(b);
}
function callfunctionpara(para1,para2)
{
console.log("hey","there....!");
}
callfunctionpara();
function funwitfun(){
    const app={
        projectid:123345,
        name:'joe',
        age:23,
        add:"usa"
     }
     function showproductid()
     {
      let productId=12345;
     console.log('in showproductId',productId);
       function fix()
       {
          let productId = 45678;
          console.log('in fixId',productId);
       }
     fix();
     
     }
     showproductid();
}
function dowhile()
{
    let temp = "";

    let i = 0;
    do{
        temp += i;
        i ++ ;
}
    while(i < 10);
}
 function ifloop(){
    const hour = new Date().getHours(); 
    let greeting;
    
    if (hour < 18) {
      greeting = "Good day";
      console.log(greeting);
    } else {
      greeting = "Good evening";
      console.log(greeting);
    }
 }
 function obj()
  {
    let product={
        name:"Watch",
        prize:22000,
        model:"Apple",
        year:2021,
         };
         console.log(product);
  }
  function basicmethod(){
    let apps=["web","social","tools","e-comm","educational"];
    console.log(apps);
    console.log(apps.shift());
    console.log(apps);
    console.log(apps.unshift());
    console.log(apps);
    console.log(apps.pop());
    console.log(apps);
    console.log(apps.push("share"));
    console.log(apps);
  }
  
