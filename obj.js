var ramen = {
    image: "https://i.ibb.co/hYMzxSC/ramen.jpg",
    title: "Ramen",
    origin: "Jepang",
    material: "Mie Ramen, Ayam, Sawi Hijau, Kaldu Ayam, Jahe",
    price: 25000
}

var pizza = {
    image: "https://i.ibb.co/ckz3Nd7/pizza.jpg",
    title: "Pizza",
    origin: "Italia",
    material: "Tomato Sauce, Mustard Sauce, Tomato, Beef Rasher, Beef Crumble",
    price: 60000    
}

var kimchi = {
    image: "https://i.ibb.co/Vw62nCp/kimchi.jpg",
    title: "Kimchi",
    origin: "Korea Selatan",
    material: "Sawi Putih, Lobak, Cabai, Saus Ikan Daun Bawang",
    price: 102000
}

var rendang = {
    image: "https://i.ibb.co/2NHd94W/rendang.jpg",
    title: "Rendang",
    origin: "Indonesia",
    material: "Daging Sapi, Daun Singkong, Cabai Rawit, Lengkuas",
    price: 50000
}

function detail(option) {
    if (option === "ramen"){
        image = ramen.image
        title = ramen.title;
        origin = ramen.origin
        material = ramen.material
        price = ramen.price
    } else if (option === "pizza"){
        image = pizza.image
        title = pizza.title
        origin = pizza.origin
        material = pizza.material
        price = pizza.price
    } else if (option === "kimchi"){
        image = kimchi.image
        title = kimchi.title
        origin = kimchi.origin
        material = kimchi.material
        price = kimchi.price
    } else{
        image = rendang.image
        title = rendang.title
        origin = rendang.origin
        material = rendang.material
        price = rendang.price
    }
    document.getElementById("image").src= image;
    document.getElementById("foodTitle").innerHTML = title;
    document.getElementById("foodOrigin").innerHTML = "Asal Makanan : " +origin;
    document.getElementById("foodMaterial").innerHTML = "Bahan Makanan : "  +material;
    document.getElementById("foodPrice").innerHTML = "Rp. " + price;
}