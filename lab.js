let ls=prompt("chose your leisures(games or drinks)");

while (ls != "games" && ls != "drinks"){
ls=prompt("chose your leisures(games or drinks)");
}


let res='';
if(ls=="games"){
    res = '<img style="width:200px;height:300px" src="gm.jpg" alt="witcher 3">'
} else{
    res = '<img style="width:200px;height:300px" src="dr.jpeg" alt="red wine">'
}


let num = prompt("how many do you need?");
let order='';
for(var c =0; c<num; c++){
order+=document.write(res);
}