//piece of code that does one or more actions
//do not repeat yourself (DRY)


/*
function go(name, age){
	alert(name);
	alert(age);
}

go('Mike', 23);
go('Devina', 23);


function add(first, second){
	return first+second;
}

alert(add(1,2));
*/
/*arrays and loops
function go(){
	alert('hi');
}

var myList = ['apples', 'oranges', 'bananas'];

//myList.shift pops beggining off so itll be oranges, bananas
//myList.pop removes bananas

myList.forEach(function(value, index){
	alert('I have '+value+' in my shopping bag.');
});
*/
//for each is newer method you have to use older way for looping through list
//loops
//-------------------------------------------------------
//while
/*--------------------------------------------------------
var times = 0;
while(times < 10){
	console.log('tried it', times);
	//times = times+1;
	times++;
}
//------------------------------------------------------------
//do while
//-----------------------------------------------------------------
*/
/*
var times = 0
do {
	console.log('tried it', times)
	times++;
}while(times <10);
*/
//--------------------------------------------------------------------
//for loop
//---------------------------------------------------------------------
var myList = ['Apples', 'Oranges', 'Bananas'];

for(var i=0;i<myList.length;i++){
	alert('you have '+myList[i]+' in your basket.');
}
//----------------------------------------------------------------------






