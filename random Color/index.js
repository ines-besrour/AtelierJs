var l= document.getElementsByClassName("list");
const randomColor = Math.floor(Math.random()*16777215).toString(16);

for (let i=0;i<3;i++){
    l[i].addEventListener("click", (e)=>{
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.color="#" + randomColor
    } )
}


