$(document).ready(function(){
  var $input=$("#input")
  //jQuery selecctor of the input value
  var $add=$("#add")
  //jQuery selecter for the button
  var $list_container=$("#list_container")
  //jQuery selecter for the list container
  var to_do = []
  // variable declaration of an array holding list items from the
  //input

  function printlist(){
    //sets the content of the list container to an emptied list
    $list_container.html("<ol id='list'></ol>")
    for(i = 0, l = to_do.length; i < l; i++){
      console.log(to_do[i])
      var li_task = "<li>" + to_do[i] +"</li>"
      $("#list").append(li_task)

    }
  }

  function add_task(){
    var task = $input.val()
    console.log(task)

//declaring the task variable to hold the value of the input field

    //verifies that the type of data entered into the task variable is a string
    if(typeof task == "string"){
      //varifing that the value fo the task variable is longer than two characters
      if(task.length > 2){
        //pushes the value of the task into the to do array
        to_do.push(task)
        console.log(to_do)
        //run printlist function to display list
        printlist()
      }
    }

  }

  $add.on("click", add_task)
  //running the add task function when the add button is clicked




})














// var numsArray = [];
// var total = 0;
//
// function beautiful(multiple1,multiple2,upwardBound){
//   	for(var n=0;n<=upwardBound;n++){
// 		if (n % multiple1 === 0 || n % multiple2 === 0){
// 			numsArray.push(n);
//   	}
// 	}
//   sum(numsArray);
// }
//
// 	function sum(multiArr){
// 		multiArr.forEach(function(a){
//       total += a;
//     });
//    console.log(total);
//   }
//
// beautiful(3,5,1000);
