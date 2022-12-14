function reverse(string){
	let bag;
	for(let i=string.length-1; i>=0; i--){
		bag+=string[i];
	}
	return bag;
}
let rev=reverse(string);
if(string==rev){
	console.log("Palindrome");
}
else
	console.log("NA");
}