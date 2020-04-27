function localScopeTest() {
    var myVar = "Hello Cunt!";
    console.log(myVar);
}

localScopeTest();
console.log(myVar); /// undefined sice VAR was declared within localScopeTest function