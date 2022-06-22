let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/34f5afaff5991d6e44af61b75b17a3fc.jpg') {
      myImage.setAttribute('src','images/druhej20200529_161413.jpg');
    } else {
      myImage.setAttribute('src','images/34f5afaff5991d6e44af61b75b17a3fc.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');