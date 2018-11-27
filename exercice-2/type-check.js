function type_check_v1(params, type)
{
    switch(typeof params){
        case "number":
            return true;
        case "string":
            return true;
        case "object":
            return true;
        default:
            return false;
    }
}

// For best result visibility
// ->Result<-
console.log(type_check_v1(null, "null"));
