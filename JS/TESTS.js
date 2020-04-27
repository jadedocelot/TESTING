function localScopeTest() {
    myVar = "Hello Cunt!";
    console.log(myVar);
}

localScopeTest();
console.log(myVar);