const btn = document.querySelector('.btn');
const clrbtn =  document.querySelector('#clrbtn');
const logbtn  = document.querySelector('#subbtn');

clrbtn.addEventListener('click', (e) => {
    document.querySelectorAll('.logtext').value = '';
});

logbtn.addEventListener('click', (e) =>{
    e.preventDefault();
});

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const textloc = document.querySelector('#textlocation');
    const textdi = parseInt(textloc.value);
        document.querySelector('#logform').style.transform = 'rotate(' + textdi + 'deg)';

    // if(document.querySelector('#logform').style.transform === 'rotate(90deg)' )
    // {
    //     document.querySelector('#logform').style.transform = 'rotate(-0deg)'; 
    // }
    // else
    // {
    //     document.querySelector('#logform').style.transform = 'rotate(90deg)';  
    // }

});