names_array = [];

function submit(){
    var name = document.getElementById("enter").value;
    names_array.push(name);
    var gname = "";
    console.log(name);
    for(var i=0; i<names_array.length; i++){
        console.log(names_array.length); 
        console.log(names_array[i]+ "  value of i = "+ i);
        gname = gname + names_array[i]+", ";
        console.log(gname);
    }
document.getElementById("entered").innerHTML = gname;
}   

function show(){
    var gname = "";
    var remove_commas_show = names_array.join(" ");
    for(var i=0; i<names_array.length; i++){
        console.log("show result ---" + names_array[i]);
        gname = gname + names_array[i];
        document.getElementById("show").innerHTML = gname;
    }
}

function sort(){
    names_array.sort();
    var remove_commas = names_array.join(" ");

    document.getElementById("sort").innerHTML = remove_commas;
}

function search(){
    searching = document.getElementById("search").value;
    var counter = 0;
    for(var i = 0; i<names_array.length; i++){
        if(searching == names_array[i]){
            counter++;
            document.getElementById("searched").innerHTML = "The number of time/s "+searching+" was found is"+counter;
        }
    }
}