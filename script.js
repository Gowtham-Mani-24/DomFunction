function label_create(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML = content;
    return ele;
}

function br_create(){
    var breal_ele = document.createElement("br");
    return breal_ele;
}

function input_create(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var input_ele = document.createElement(tagname);
    input_ele.setAttribute(attrname,attrvalue);
    input_ele.setAttribute(attrname1,attrvalue1);
    return input_ele;
}

function button_create(tagname,attrname2,attrvalue2,methodname,methodvalue,content){
    var button_ele = document.createElement(tagname);
    button_ele.setAttribute(attrname2,attrvalue2);
    button_ele.setAttribute(methodname,methodvalue);
    button_ele.innerHTML = content;
    return button_ele;
}

function result(){
    var res = document.getElementById("fname").value;
    var res1 = document.getElementById("mname").value;
    var res2 = document.getElementById("lname").value;
    var res3 = document.getElementById("email").value;
    var res4 = document.getElementById("pass").value;
    console.log(res,res1,res2,res3,res4);
}

var fname = label_create("label","for","fname","FirstName");
var line_break = br_create();
var fname_input = input_create("input","type","fname","id","fname");
document.body.append(fname,line_break,fname_input,br_create());

var mname = label_create("label","for","mname","MiddleName");
var line_break = br_create();
var mname_input = input_create("input","type","mname","id","mname");
document.body.append(mname,line_break,mname_input,br_create());

var lname = label_create("label","for","lname","LastName");
var line_break = br_create();
var lname_input = input_create("input","type","lname","id","lname");
document.body.append(lname,line_break,lname_input,br_create());

var email = label_create("label","for","email","Email");
var line_break = br_create();
var email_input = input_create("input","type","email","id","email");
document.body.append(email,line_break,email_input,br_create());

var pass = label_create("label","for","pass","Password");
var line_break = br_create();
var pass_input = input_create("input","type","password","id","pass");
document.body.append(pass,line_break,pass_input,br_create());

var submit_input = button_create("button","type","button","onclick","result()","Submit");
document.body.append(submit_input);