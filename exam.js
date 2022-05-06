let a=document.getElementById('container')
let b=document.getElementById('container2')
let btn=document.getElementById('add')
function update(){
  
   var c= document.getElementsByClassName(event.target.className)
  console.log(c);
   var x=event.target.value;
   console.log(x)
   for(var i=0;i<c.length;i++)   
{
   c[i].value=x;

}



}
function addnewfield(){
  let label=document.getElementById('newinputlabel').value
 var f=  document.getElementById("options")
  let type = f.options[f.selectedIndex].value;
  var p=document.createElement('p')
  var field=document.createElement('input')
  field.setAttribute("type", `${type}`)
  field.setAttribute("class",`"class${Math.random()}"`)
  field.setAttribute('onkeypress','update()')
  p.innerText=`${label} :`;
  p.appendChild(field)
  console.log(p)
  console.log(a)
  console.log(b)
  var clone= p.cloneNode(true)
  b.appendChild(p)
  a.appendChild(clone)
}
function addclasss(){
 
let x=document.getElementById('popup')
if (x.style.display === "none") {
    x.style.display = "flex";
    x.style.alignItems="center";
    x.style.justifyContent="center";
    let p=document.getElementById('container3')
    p.style.backgroundColor="lightgreen";
    

  } else {
    x.style.display = "none";
  }
}
