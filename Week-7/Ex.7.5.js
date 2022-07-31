function nextLargerElement(arr, n)
{
	var stack = [];
	for (var i = 0; i < arr.length; i++)
	{
		while (stack.length > 0 && stack[stack.length - 1]["value"] < arr[i])
		{
			var d = stack.pop();
			arr[d["ind"]] = arr[i];
		}
		stack.push({"value": arr[i], "ind": i});
	}

	while (stack.length > 0)
	{
		d = stack.pop();
		arr[d["ind"]] = -1;

	}
	return arr;
	
}


var arr = [6, 8, 0, 1, 3];
var n = 5;


console.log(nextLargerElement(arr, n));

