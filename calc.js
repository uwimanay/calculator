let inputOne="";
let inputTwo="";
let operation=null;
let result=null;
let display=document.getElementById("display");
//function getNumber(number)
const getNumber=number=>{
	console.log(number);
	//operations
	if(!operation && !inputTwo&&! result){
			value=inputOne+=number;

	}else if(inputOne&& operation&&!result){
		value=inputTwo+=number;
		
	}else if (result&&operation){
		inputTwo="";
		inputOne=result;
		value=inputTwo+=number;

	}

display.value=value;

	
};
const getOperation=op=>{
	console.log(op);
	// set operation
	operation=op
};
const getResult=()=>{
	console.log(inputOne,inputTwo,result,operation);
	switch(operation){
		case"addButton":
		return (display.value=result=parseInt(inputOne)+parseInt(inputTwo));

		case"subtractButton":
		return (display.value=result=parseInt(inputOne)-parseInt(inputTwo));

		case"multiplyButton":
		return (display.value=result=parseInt(inputOne)*parseInt(inputTwo));

		case"divideButton":
		return (display.value=result=parseInt(inputOne)/parseInt(inputTwo));

		default:
		return null;


	}
	

};
const resetAll=()=>{
	//console.log("Reset All");
inputOne='';
inputTwo="";
operation=null;
result=null;
display.value="";
 
};

 
           

