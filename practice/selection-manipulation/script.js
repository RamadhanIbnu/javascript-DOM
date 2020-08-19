//get element with tag HTML name and manipuliton background style
const body = document.getElementsByTagName('body');
body[0].style.backgroundColor = 'whitesmoke';

//get element with ID and change HTML with innerHTML
const judul = document.getElementById('judul');
judul.innerHTML = "Ini Adalah Bagian Judul" ;
judul.style.textAlign = "center" ;

//get element with query selector and change style for paragraph
const paragraphSection1 = document.querySelectorAll('section#a p');
for(i = 0; i < paragraphSection1.length; i++){
    paragraphSection1[i].style.backgroundColor = 'salmon';
}

//get element with class name and manipulation attribute with setAttribute
const link = document.getElementsByClassName('instagram');
link[0].setAttribute ('href', 'https://www.instagram.com/?hl=en');