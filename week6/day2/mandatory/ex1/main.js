// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);// =3

}

// =3

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);	// a =0


}


//#3
function q3() {
    window.a = "hello";	

}

function q32() {
    alert(a);
}

// if q32 is called undefined
// if q3 and then q32 is called hello



//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);//test


}

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);//5
}
alert(a);//2