var a = {

    text : "hello",

    num1 : 2,
    num2 : 3,

    log : function(){
        console.log(this.num1 + this.num2);
    }
};
a.log();



