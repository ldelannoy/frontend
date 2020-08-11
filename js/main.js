//les variables
//anciennes variables à ne plus utiliser
var test1 = 'test1';


//nouvelles variables à utiliser
const order1 = 'test2';

let order2 = 'TEST3';

const action = true;

//conditions
if(action === true){
    console.log('ok');
}else{
    console.error('KO!!!');
}

//selecteurs javascript

//document.getElementById()
//document.getElementByClass()
//document.getElementByTag()
//document.querySelector('.test')
//document.querySelector('#test')
//document.querySelector('body')
//document.querySelectorAll()

//addEventListener
let toggle = true;

document.getElementById('button').addEventListener('click',function(){
    toggle = !toggle;
    if(toggle){
    document.getElementById('test-lo').style = "font-size: 200px;";}
    else{
        document.getElementById('test-lo').style = "font-size: 10px;";   
    }
});
let rotation = 0;
  
document.getElementById('rotation').addEventListener('click',function rotateElem() { 
    rotation += 30;
    
        document.querySelector('#carre').style.transform 
               = 'rotate('+rotation+'deg)'; 

}); 
let masker = document.getElementById('visibility');
masker.addEventListener('click',function(){
    if(getComputedStyle(carre).display != 'none' ){
        carre.style.display = 'none';
    }else{
        carre.style.display = 'block';
    }
});
let replace = document.getElementById('replace');
replace.addEventListener('click',function(){
    //document.getElementById('carre').style.marginLeft = '0px';
    document.getElementById('carre').style.marginLeft += '100px';
    carre.style.marginLeft = (parseInt(carre.style.marginLeft.split('px')[0]) + 100) + 'px';
});