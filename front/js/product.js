//recuperation de l id du produit selectionné sur la page  actuelle du produit
params= new URLSearchParams(window.location.search);
idSelected=params.get("id");

console.log("id selectionné id selectionné",idSelected)
// requête du produit selectionné avec son id
let request= fetch(`http://localhost:3000/api/products/${idSelected}`);
console.log("requete",request);// vérification du code http 

let productSelected= request.then(function(res){
    if(res.ok){
        return res.json();  
    };
}).catch(function(error){
    console.log("error", error);
   
});
// recuperation du produit selectionné en objet javascrit 
productSelected.then(function(productSelect){
    console.log("produit selectionné",productSelect)// verification du contenu de l objet du produit
    console.log("titre du produit", productSelect.name)
    //création des éléments du DOM et affichage dans le DOM de la page produit
    let itemImg= document.querySelector(".item__img");
    let imgProductSelected= document.createElement("img");
    imgProductSelected.src= productSelect.imageUrl;
    imgProductSelected.alt= productSelect.altTxt;
    let titleProduct= document.querySelector(".item__content__titlePrice #title");
    titleProduct.textContent= productSelect.name;
    let priceProduct= document.querySelector("#title + p > #price");
    priceProduct.textContent=productSelect.price;
    let descriptionProduct= document.querySelector(".item__content__description__title + #description");
    descriptionProduct.textContent= productSelect.description;

   
    itemImg.appendChild(imgProductSelected);
  
});
