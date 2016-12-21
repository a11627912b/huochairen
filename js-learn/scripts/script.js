/**
 * Created by Wan on 2016/12/5.
 */
/*
*javascript 基本数据类型练习
* */
var varString ="abc"/*字符串类型*/  //string
var varNumber = 123/*数字类型*/  //number
var varUndefined = undefined;  //underfined;
var varBoolean = true;  //bool
var varNull = null;  //null

/*/
*javascript 变量类型检查
* */
var varType = typeof "abc";/*typeof判断类型，存入varType*/
document.writeln(varType);/*利用document显示变量类型*//*ln为空格*/
var varType = typeof 123;
document.write(varType);
document.write("<br>");/*换行*/
var varType = typeof undefined;
document.write(varType);
document.write("<br>");/*换行*/
var varType = typeof true;
document.write(varType);
document.write("<br>");/*换行*/
var varType = typeof null;
document.write(varType);
document.write("<br>");/*换行*/

varNumber2 = 8;
varNumber2 = varNumber2 + 12;
document.write(varNumber2);
document.write("<br>");

varEnumber = 2e3;
document.write(varEnumber);
document.write("<br>");

var numberInfi = 1/0;
document.write(numberInfi);
document.write("<br>")

var inflStr = typeof Infinity;
document.write(inflStr);
document.write("<br>")

var hello = "Hello word!";
var l = hello.length;
document.write(l);
document.write("<br>");

document.write(hello[0]);
document.write(hello[1]);
document.write(hello[2]);
document.write('...');
document.write(hello[hello.length - 1]);
document.write("<br>");

var helloPre = hello.substring(0,5);/*取0~5之间*/
document.writeln(helloPre);
document.write("<br>");

helloPre = hello.substr(0,5);
document.write(helloPre);
document.write("<br>");

var flag = true;
if(1 === 9/9){/*三个等号表示绝等于*/
    document.write("flag=true");
}else {
    document.write("flag=false")
}
document.write("<br>");

var undefinedVar;

/*类型转换String*/
var strNumberConvert = String(123);
document.write(typeof strNumberConvert);
document.write("<br>");

var dateStr = String(new Date());
document.write(dateStr);
document.write("<br>");

/*类型转换Number*/
var nVar = Number("1234");
document.write(typeof nVar);
document.write("<br>");

var bNumber = Number(true);
document.write(bNumber);
document.write("<br>");

var nNmber = Number(null);
document.write(nNmber);
document.write("<br>");

var unNumber = Number(undefined);
document.write(unNumber);
document.write("<br>");

/*一元运算*/
var y = "5";
var x =2;
x += y;
document.write(x);
document.write("<br>");

/*object对象类型*/
var person = {
    name:"Bob",
    age:20,
    tag:['js','web','mobile'],
    city:"beijing",
    hasCar:true,
    zipcode:null
};
document.write(person.name);
document.write(person.age);
document.write("<br>");


/*JavaScript数组*/
