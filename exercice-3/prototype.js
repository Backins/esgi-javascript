function type_check_v1(params, type)
{
    switch(true){
        case typeof params === "number" && type === "number":
            return true;
        case typeof params === "string" && type === "string":
            return true;
        case typeof params === "boolean" && type === "number":
            return true;
        case typeof params === "object" && type === "object" && params != null:
            return true;
        case typeof params === "object" && type === "null":
            return true;
        default:
            return false;
    }
}

function testFunction(){}
// For best result visibility
// ->Result<-
console.log(type_check_v1(1, "number"));
console.log(type_check_v1("string", "number"));
console.log(type_check_v1(true, "number"));
console.log(type_check_v1({ "prop1": 1 }, "object"));
console.log(type_check_v1(null, "null"));
console.log(type_check_v1(null, "object"));
console.log(type_check_v1(undefined, "undefined"));
console.log(type_check_v1("string", "string"));
console.log(type_check_v1([1, 2, 3], "array"));
console.log(type_check_v1(testFunction(), "function"));
console.log(type_check_v1([1, 2, 3], "object"));




console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");
console.log("#########################################################################################");