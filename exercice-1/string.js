function testifyStr(str)
{
	if(typeof str == "string" && str.length > 0) {
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
		str = capitalize(str).split(" ").join("");
		str = str.replace(/[^a-z0-9]/gi,'');
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
		var tmp = "";
		for(l in str){
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


console.log(ucfirst(null));
console.log(capitalize("hello world !"));
console.log(camelCase("Hello world WAHOU!"));
console.log(snake_case("hello world !"));
console.log(leet("a b c d e f g h i j k l m n o p q r s t u v w x y_z"));
