
document.querySelector('ol').addEventListener('click',
    (e)=>{
        e.target.parentNode.replaceChild(newNod,e.target);}
)