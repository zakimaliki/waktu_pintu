const arr = [
    'https://i.ibb.co/Vw62nCp/kimchi.jpg',
    'https://i.ibb.co/PDPd0Rx/sushi.jpg',
    'https://i.ibb.co/hYMzxSC/ramen.jpg',
    'https://i.ibb.co/FxZPGg2/french-fries.jpg',
    'https://i.ibb.co/ckz3Nd7/pizza.jpg',
    'https://i.ibb.co/vsCGj6C/smoothies.jpg',
    'https://i.ibb.co/2NHd94W/rendang.jpg',
    'https://i.ibb.co/swGkX31/chicken.jpg'
]

let imageList = ''


let i = 0;
while(i < arr.length){
    imageList += '<img src="' + arr[i] + '" alt="Menu Makanan">'
    i++
}

document.getElementById("imgList").innerHTML = imageList


// for (let i = 0; i < arr.length; i++) {
//     imageList += '<img src="' + arr[i] + '" alt="Menu Makanan">'
// }