function testifyStr(str)
{
	if(typeof str === "string" && str.length > 0) {
		return true;
	} else {
		return false;
	}
}

function ucfirst(str)
{
	if(testifyStr(str)){
		return str[0].toUpperCase() + str.slice(1);
	} else {
		return "";
	}
}

function lcfirst(str)
{
	if(testifyStr(str)){
		return str[0].toLowerCase() + str.slice(1);
	} else {
		return "";
	}
}

function capitalize(str)
{
	if(testifyStr(str)){
		str = str.toLowerCase();
		var tmp = str.split(" "), streturn = "";
		for (i in tmp){
			streturn += ucfirst(tmp[i]);
			if(i < tmp.length - 1) {
				streturn += " ";
			}
		}
		return streturn;
	} else {
		return "";
	}
}

function camelCase(str)
{
	if(testifyStr(str)){
		str = str.replace(/[\W_]+/g," ");
		str = capitalize(str).split(" ").join("");
		str = str.replace("_",' ');
		return str;
	} else {
		return "";
	}
}

function snake_case(str)
{
	if(testifyStr(str)){
		return str.split(" ").join("_").toLowerCase();
	} else {
		return "";
	}
}

function leet(str)
{
	if(testifyStr(str)){
		let tmp = "";
		for(var l in str){
			switch(str[l].toUpperCase()){
				case "A":
					tmp += "4";
					break;
				case "E":
					tmp += "3";
					break;
				case "I":
					tmp += "1";
					break;
				case "O":
					tmp += "0";
					break;
				case "U":
					tmp += "(_)";
					break;
				case "Y":
					tmp += "7";
					break;
				default:
					tmp += str[l];
					break;
			}
		}
		return tmp;
	} else {
		return "";
	}
}

function verlan(str)
{
	if(testifyStr(str)){
        return str.split("").reverse().join("");
	} else {
		return "";
	}
}

function yoda(str)
{
	if(testifyStr(str)){
        return str.split(" ").reverse().join(" ");
	} else {
		return "";
	}
}

// For best result visibility
// ->Result<-
console.log("->"+yoda(null)+"<-");
