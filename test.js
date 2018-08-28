function helloWorld()
{
	var sToAlert = "";//Create the sToAlert String which should be written in Alert later.
	if(true)
	{
		sToAlert="The World is not Enough"; //Add some Text which should be written along with the Hello
	}
	alert("Hello "+sToAlert); //Open an Alert Window witch says something containing "Hello".
	
	return "success"; //Return some useless Stuff.
}