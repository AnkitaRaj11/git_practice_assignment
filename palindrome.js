function reverse(string){

let bag="";
      for(let i=string.length-1;i>=0;i--)
      { 
       bag+=string[i];
                       }
       return bag;
}
   let rev=reverse(juhi);
      if(string==rev)
{
      console.log("palindrome");
}
       else
{
      console.log("NA");
}