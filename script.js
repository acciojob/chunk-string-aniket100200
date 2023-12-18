function stringChop(str, size) 
{
  // your code here
	let ans=[];
	for(let i=0;i<str.length;)
	{
		let last=str.length;
        if(last-i+1>=size){
            let x=size;
            let curr="";
            while(x-->0){
                curr+=str.charAt(i);
                i++;
            }
            ans.push(curr);
        }
        else{
            let x=size;
            let curr="";
            while(i<str.length){
                curr+=str.charAt(i);
                i++;
            }
            ans.push(curr);
        }
	}

    console.log(ans);

	return ans;
	
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
