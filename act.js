function JSON(){

	let x= XMLHTTPRequest();

	let data= get.ElementbyId("values");

	xhttp.onreadystate=function(){
	if (xhttp.onreadystate=4 && xhttpstatus=200)
	{
		let data =JSON.parse(xhttp.response);

		for (let i=0,i<data.lenght, i++);


	}
xhttp.open("Get", "https://jsonplaceholder.typicode.com/todos", true);
xhttp.send();

}
}