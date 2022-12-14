function checkPrime(num){
	let counter=0;
	for(let i=1; i<=num; i++){
		if(num%i){
			counter++;
		}
	if(counter==2){
		return true;
	}
	return false;
}
checkPrime(13);