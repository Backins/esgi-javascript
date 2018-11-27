function type_check_v1(params, type)
{
    if(typeof params === type){
        return true;
    } else {
        return false
    }
}

// For best result visibility
// ->Result<-
console.log(type_check_v1("1", "string"));
