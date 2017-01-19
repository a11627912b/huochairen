/**
 * Created by Wan on 2016/12/23.
 */

/*全局作用域中定义变量，就是全局变量
* 全局变量就是window的属性。*/

//DOM:document object model.
//document,body,image,input button,form,link,object

//BOM:browser object model.
//window,navigator


// var uti="util";
// window.util="util";


(function (window) {
    window.util=window.util||{};
    util.tree={};
    util.tree.node= {
        id: "",
        title:"",
        isOpen:0,
        icon:"",
        pId:-1,
        type:1
    };
    util.tree.GenerateNode=function (id,title) {
            this.id=id;
            this.title=title;
    };
    util.tree.GenerateNode.prototype=util.tree.node;
    var node=new util.tree.GenerateNode(0);
    node.title="董事长";

    var node2=new util.tree.GenerateNode(1);
    node2.title="CFO";
    node2.pId=0;
    var node3=new util.tree.GenerateNode(2);
    node3.title="CTO";
    node3.pId=0;
    var node4=new util.tree.GenerateNode(3);
    node4.title="CEO";
    node4.pId=0;

    function nodeClicked(e) {
        e.stopPropagation();
        var ele=e.currentTarget;
        var isOpen=ele.getAttribute("is-open");
        if(!isOpen || isOpen=="0"){
            ele.style.height="80px";
            ele.style.transition="height 0.5s";
            ele.setAttribute("is-open","1");
        }else {
            ele.style.height="20px";
            ele.setAttribute("is-open","0");
        }
    }

    var nodes=[node,node2,node3,node4];
    util.tree.create=function (selecter) {
        var container=document.querySelector(selecter);

        function fasGenerate(contain,pid) {
            var roots=[];
            for(var i=0;i<nodes.length;i++){
                if(nodes[i].pId==pid){
                    roots.push(nodes[i]);
                    var ele=document.createElement("div");
                    ele.innerText=nodes[i].title;
                    ele.setAttribute("class","node");
                    ele.addEventListener("click",nodeClicked);
                    contain.appendChild(ele);
                    fasGenerate(ele,nodes[i].id);
                }
            }
        }
        fasGenerate(container,-1);
    };


    //new 关键字执行的步骤
    // var obj={};
    // obj.__proto__=util.tree.GenerateNode.prototype;/*prototype原型属性赋值给对象的prototype*/
    // util.tree.GenerateNode.call(obj);
    // var g=obj;



})(window);