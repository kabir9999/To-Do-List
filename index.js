const inp = document.querySelector('#input_area');
const btn_e = document.querySelector('#btn_enter');
const btn_d = document.querySelector('#btn_delete');
const lst = document.querySelector('#list');
btn_e.addEventListener('click',function(){
    const data = document.createElement('li');
   data.innerText = inp.value;
   if(inp.value != ""){
       lst.appendChild(data);
       inp.value = "";

   }
    // console.log(inp.value);
})

btn_d.addEventListener('click',()=>{
    lst.removeChild(lst.firstElementChild);
})



