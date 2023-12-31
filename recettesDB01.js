

let recettesDB = [
  {
    id: 1,
    name: "Foul Modammas",
    category: "Petit déjeuner",
    country: "Egypte",
    duration: "30 minutes",
    image: "1.png",
    ingredients: [
      "1 boîte de 400 g de fèves",
      "1/2 tasse d'eau",
      "1/4 tasse d'huile d'olive",
      "2 gousses d'ail, finement hachées",
      "2 cuillères à soupe de jus de citron frais",
      "1 cuillère à café de sel",
      "1/4 cuillère à café de cumin moulu",
      "1/4 tasse de persil frais haché",
      "1/4 tasse de tomates fraîches, coupées en dés",
      "1/4 tasse de concombre frais, coupé en dés",
      "1/4 tasse d'oignon rouge frais, coupé en dés",
    ],
    instructions: [
      "Égoutter les fèves et les rincer sous l'eau froide.",
      "Mélanger les fèves, l'eau, l'huile d'olive, l'ail, le jus de citron, le sel et le cumin dans une casserole moyenne.",
      "Chauffer le mélange de fèves à feu moyen, en remuant de temps en temps, jusqu'à ce qu'il soit chaud et que les saveurs soient mélangées (environ 5 minutes).",
      "Transférer les fèves dans un plat de service peu profond et saupoudrer de persil, de tomates, de concombre et d'oignon rouge.",
    ],
    comments: [
      {
        user: "Ahmed",
        rating: 4.5,
        content: "J'adore cette recette, c'est mon petit déjeuner préféré !",
      },
      {
        user: "Sophie",
        rating: 4.0,
        content: "Facile à préparer et délicieux, merci pour la recette !",
      },
    ],
  },
  {
    id: 2,
    name: "Mansaf",
    category: "Déjeuner",
    country: "Jordanie",
    duration: "2 heures",
    image: "2.png",
    ingredients: [
      "1,5 kg de viande d'agneau",
      "1 kg de riz à grain long",
      "500 g de yaourt nature",
      "2 litres d'eau",
      "3 oignons",
      "2 gousses d'ail",
      "1 cuillère à café de cumin",
      "1 cuillère à soupe de beurre clarifié (samneh)",
      "1/2 tasse de noix de pin",
      "1/2 tasse de persil plat haché",
      "sel",
      "poivre noir",
    ],
    instructions: [
      "Rincer le riz dans l'eau froide jusqu'à ce que l'eau soit claire.",
      "Placer le riz dans une grande casserole, ajouter 2 litres d'eau et porter à ébullition.",
      "Baisser le feu, couvrir la casserole et laisser cuire pendant environ 25 minutes, jusqu'à ce que le riz soit cuit.",
      "Retirer la casserole du feu et égoutter le riz.",
      "Mélanger le yaourt avec une tasse d'eau tiède.",
      "Couper la viande d'agneau en morceaux de taille égale et les faire revenir dans une grande casserole avec le beurre clarifié, jusqu'à ce qu'ils soient dorés.",
      "Hacher finement les oignons et les faire revenir avec la viande jusqu'à ce qu'ils soient tendres.",
      "Ajouter 2 litres d'eau, le sel et le poivre, et laisser mijoter pendant environ 2 heures, jusqu'à ce que la viande soit tendre.",
      "Ajouter le mélange de yaourt et remuer jusqu'à ce que la sauce soit homogène. Laisser mijoter pendant environ 15 minutes.",
      "Servir le riz sur un grand plateau, garni de la viande et de la sauce de yaourt.",
      "Garnir le plat de noix de pin grillées et de persil haché.",
    ],
    comments: [
      {
        user: "Youssef",
        rating: 4.8,
        content:
          "Le mansaf est un plat traditionnel jordanien et cette recette est parfaite !",
      },
      {
        user: "Alice",
        rating: 4.5,
        content:
          "J'ai préparé ce plat pour un dîner et tout le monde a adoré, merci !",
      },
    ],
  },
  {
    id: 3,
    name: "Makaroni bel Bechamel",
    category: "Dîner",
    country: "Liban",
    duration: "45 minutes",
    image: "3.png",
    ingredients: [
      "500 g de macaroni",
      "2 litres d'eau",
      "1 cuillère à soupe d'huile d'olive",
      "1 oignon, finement haché",
      "500 g de viande hachée",
      "2 cuillères à soupe de concentré de tomate",
      "2 cuillères à soupe de beurre",
      "2 cuillères à soupe de farine",
      "1 litre de lait",
      "sel",
      "poivre",
      "noix de muscade",
    ],
    instructions: [
      "Préchauffez le four à 180°C.",
      "Dans une grande casserole, faites bouillir l'eau salée. Ajoutez les macaronis et laissez cuire pendant 10-12 minutes. Égouttez-les et réservez.",
      "Dans une autre casserole, faites chauffer l'huile d'olive et faites revenir l'oignon haché jusqu'à ce qu'il soit tendre.",
      "Ajoutez la viande hachée et faites-la cuire jusqu'à ce qu'elle soit dorée.",
      "Ajoutez le concentré de tomate et mélangez bien.",
      "Salez et poivrez selon votre goût, et ajoutez une pincée de noix de muscade. Réservez.",
      "Dans une troisième casserole, faites fondre le beurre et ajoutez la farine. Mélangez bien jusqu'à ce que le mélange devienne doré.",
      "Ajoutez le lait en remuant constamment pour éviter la formation de grumeaux.",
      "Salez et poivrez selon votre goût, et ajoutez une pincée de noix de muscade.",
      "Laissez cuire à feu doux jusqu'à ce que la béchamel épaississe.",
      "Dans un grand plat allant au four, disposez les macaronis, puis versez la sauce de viande hachée sur le dessus.",
      "Enfin, versez la béchamel sur le dessus et enfournez pendant 20-25 minutes, ou jusqu'à ce que le dessus soit doré et croustillant.",
      "Retirez du four et servez chaud.",
    ],
    comments: [
      {
        user: "Samir",
        rating: 4.2,
        content:
          "Le makaroni bel bechamel est un classique libanais et cette recette est facile à suivre !",
      },
      {
        user: "Julie",
        rating: 4.5,
        content:
          "J'ai ajouté du poulet grillé à cette recette et c'était délicieux, merci !",
      },
    ],
  },
  {
    id: 4,
    name: "Kabsa au poulet",
    category: "Déjeuner",
    country: "Arabie Saoudite",
    duration: "1 heure",
    image: "4.png",
    ingredients: [
      "1 poulet entier, coupé en morceaux",
      "3 tasses de riz basmati",
      "3 tomates",
      "2 oignons",
      "2 gousses d'ail",
      "1 poivron vert",
      "1 cuillère à soupe de concentré de tomate",
      "4 cuillères à soupe d'huile d'olive",
      "2 cuillères à soupe de mélange d'épices kabsa (cumin, coriandre, cannelle, poivre noir)",
      "2 bâtons de cannelle",
      "2 feuilles de laurier",
      "sel",
      "poivre",
      "4 tasses d'eau",
    ],
    instructions: [
      "Dans une grande casserole, faites chauffer l'huile d'olive, puis ajoutez les morceaux de poulet et faites-les dorer pendant 5 minutes de chaque côté.",
      "Retirez le poulet de la casserole et mettez-le de côté.",
      "Dans la même casserole, ajoutez les oignons hachés et l'ail écrasé et faites-les revenir jusqu'à ce qu'ils soient tendres.",
      "Ajoutez les tomates coupées en dés, le poivron coupé en petits morceaux et le concentré de tomate. Mélangez bien.",
      "Ajoutez le mélange d'épices kabsa, les bâtons de cannelle, les feuilles de laurier, ainsi que du sel et du poivre selon votre goût.",
      "Remettez le poulet dans la casserole et ajoutez 4 tasses d'eau. Couvrez la casserole et laissez mijoter pendant environ 30 minutes, en remuant de temps en temps.",
      "Retirez le poulet de la casserole et mettez-le de côté.",
      "Ajoutez le riz dans la casserole avec le bouillon restant, puis remettez les morceaux de poulet sur le dessus.",
      "Couvrez la casserole et laissez mijoter à feu doux pendant environ 30 minutes, ou jusqu'à ce que le riz soit cuit et que tout le liquide soit absorbé.",
      "Retirez les bâtons de cannelle et les feuilles de laurier, puis servez chaud.",
    ],
    comments: [
      {
        user: "Fatima",
        rating: 4.6,
        content:
          "Le kabsa est un plat délicieux et cette recette est facile à suivre, merci !",
      },
      {
        user: "Antoine",
        rating: 4.0,
        content:
          "J'ai remplacé le poulet par des crevettes et c'était tout aussi bon, merci pour l'inspiration !",
      },
    ],
  },
  {
    id: 5,
    name: "Makloubeh",
    category: "Dîner",
    country: "Palestine",
    duration: "2 heures",
    image: "5.png",
    ingredients: [
      "2 tasses de riz basmati",
      "1 gros oignon",
      "3 aubergines",
      "3 petites tomates",
      "1 cuillère à soupe de tomate concentrée",
      "3 cuillères à soupe d'huile d'olive",
      "1 cuillère à café de curcuma",
      "1 cuillère à café de paprika",
      "1 cuillère à café de cumin",
      "sel",
      "poivre",
      "2 tasses d'eau",
    ],
    instructions: [
      "Tout d'abord, lavez le riz plusieurs fois jusqu'à ce que l'eau soit claire, puis laissez-le tremper dans de l'eau froide pendant 30 minutes.",
      "Dans une grande casserole, faites chauffer 2 cuillères à soupe d'huile d'olive, puis ajoutez l'oignon haché et laissez-le revenir pendant 2 minutes.",
      "Ajoutez ensuite les aubergines coupées en tranches épaisses et les tomates coupées en petits dés.",
      "Ajoutez le curcuma, le paprika et le cumin, ainsi que du sel et du poivre selon votre goût.",
      "Laissez mijoter pendant environ 15 minutes, en remuant de temps en temps.",
      "Dans une autre casserole, faites bouillir 2 tasses d'eau salée, puis ajoutez le riz et laissez-le cuire à feu doux jusqu'à ce que l'eau soit absorbée.",
      "Dans un grand plat allant au four, disposez les tranches d'aubergine en formant une couche au fond, puis ajoutez une couche de riz par-dessus.",
      "Ajoutez ensuite une couche du mélange d'aubergines et de tomates, puis une autre couche de riz. Répétez l'opération jusqu'à épuisement des ingrédients.",
      "Mélangez la cuillère à soupe de tomate concentrée avec un peu d'eau chaude, puis versez-la sur le dessus du plat.",
      "Couvrez le plat avec un couvercle ou du papier d'aluminium et laissez-le cuire au four à 180 degrés Celsius pendant environ 45 minutes.",
      "Retirez le couvercle et laissez-le cuire encore 10 minutes pour faire dorer le dessus.",
      "Retirez le plat du four et laissez-le reposer pendant 10 minutes avant de le servir.",
    ],
    comments: [
      {
        user: "Rami",
        rating: 4.8,
        content:
          "Le makloubeh est un plat délicieux et cette recette est très réussie, bravo !",
      },
      {
        user: "Nina",
        rating: 4.2,
        content:
          "J'ai ajouté des aubergines grillées à cette recette et c'était parfait, merci !",
      },
    ],
  },
  {
    id: 6,
    name: "Couscous aux légumes",
    category: "Plat principal",
    country: "Algérie",
    duration: "2 heures",
    image: "6.png",
    ingredients: [
      "500g de semoule de couscous",
      "4 carottes",
      "2 navets",
      "2 courgettes",
      "1 poivron",
      "2 oignons",
      "4 tomates",
      "1 bouquet de coriandre",
      "1 bouquet de persil",
      "3 gousses d'ail",
      "1 c. à soupe de concentré de tomates",
      "1 c. à soupe d'huile d'olive",
      "sel",
      "poivre",
    ],
    instructions: [
      "Faire chauffer de l'eau dans une couscoussière.",
      "Dans un grand saladier, mélanger la semoule avec 1 c. à soupe d'huile d'olive, du sel et de l'eau tiède. Bien mélanger et laisser reposer 10 minutes.",
      "Placer la semoule dans le panier de la couscoussière et laisser cuire à la vapeur pendant 20 minutes.",
      "Pendant ce temps, couper les légumes en morceaux et les faire revenir dans une cocotte avec de l'huile d'olive.",
      "Ajouter les tomates, le concentré de tomates, l'ail haché, le bouquet de coriandre et de persil, du sel et du poivre.",
      "Couvrir d'eau et laisser mijoter 1 heure.",
      "Retirer la semoule de la couscoussière et la verser dans le saladier. Ajouter un peu d'eau, mélanger et remettre dans la couscoussière pour cuire encore 20 minutes.",
      "Servir le couscous avec les légumes et la sauce.",
    ],
    comments: [
      {
        user: "Samia",
        rating: 4.8,
        content:
          "Cette recette de couscous est excellente, les légumes sont bien cuits et parfumés. Merci pour cette recette traditionnelle.",
      },
      {
        user: "Yassin",
        rating: 4.5,
        content:
          "Je suis algérien et je dois dire que ce couscous est l'un des meilleurs que j'ai jamais mangé. Bravo pour la recette !",
      },
    ],
  },
  {
    id: 7,
    name: "Tajine de poulet aux olives",
    category: "Déjeuner",
    country: "Maroc",
    duration: "1 heure",
    image: "7.png",
    ingredients: [
      "4 cuisses de poulet",
      "1 oignon, émincé",
      "3 gousses d'ail, émincées",
      "2 tomates, coupées en dés",
      "1/2 tasse d'olives vertes dénoyautées",
      "2 cuillères à soupe d'huile d'olive",
      "1 cuillère à soupe de paprika",
      "1 cuillère à soupe de cumin",
      "1/2 cuillère à café de gingembre moulu",
      "1/2 cuillère à café de curcuma",
      "1/2 cuillère à café de cannelle",
      "1/2 cuillère à café de poivre noir",
      "1/2 tasse d'eau",
      "Coriandre fraîche pour garnir",
    ],
    instructions: [
      "Dans un grand tajine ou une casserole, faire chauffer l'huile d'olive à feu moyen.",
      "Ajouter l'oignon et l'ail, et faire revenir jusqu'à ce qu'ils soient tendres et dorés.",
      "Ajouter le poulet et faire dorer de tous les côtés.",
      "Ajouter les tomates, les olives, le paprika, le cumin, le gingembre, le curcuma, la cannelle et le poivre noir.",
      "Verser l'eau et mélanger.",
      "Couvrir le tajine ou la casserole et laisser mijoter à feu doux pendant environ 1 heure et 30 minutes, ou jusqu'à ce que le poulet soit tendre.",
      "Garnir de coriandre fraîche avant de servir.",
    ],
    comments: [
      {
        user: "Khalid",
        rating: 4.6,
        content:
          "Le tajine de poulet aux olives est un classique marocain et cette recette est facile à suivre, merci !",
      },
      {
        user: "Amélie",
        rating: 4.5,
        content:
          "J'ai ajouté des citrons confits à cette recette et c'était délicieux, merci pour l'inspiration !",
      },
    ],
  },
  {
    id: 8,
    name: "Chorba Frik",
    category: "Entrée",
    country: "Algérie",
    duration: "45 minutes",
    image: "8.png",
    ingredients: [
      "500g de viande d'agneau ou de boeuf, coupée en petits morceaux",
      "2 oignons, hachés",
      "2 gousses d'ail, hachées",
      "1/2 tasse de frik",
      "2 tomates, coupées en dés",
      "1/2 tasse de pois chiches, trempés dans l'eau la veille",
      "1/4 tasse de concentré de tomate",
      "2 cuillères à soupe d'huile d'olive",
      "1 cuillère à café de paprika",
      "1 cuillère à café de cumin",
      "1/2 cuillère à café de curcuma",
      "1/2 cuillère à café de gingembre moulu",
      "1/2 cuillère à café de poivre noir",
      "1 bouquet de coriandre fraîche, hachée",
      "Sel",
      "Eau",
    ],
    instructions: [
      "Dans une marmite, faire chauffer l'huile d'olive à feu moyen.",
      "Ajouter les oignons et l'ail, et faire revenir jusqu'à ce qu'ils soient tendres et dorés.",
      "Ajouter la viande et faire dorer de tous les côtés.",
      "Ajouter les tomates, le concentré de tomate, le paprika, le cumin, le curcuma, le gingembre, le poivre noir et la coriandre hachée. Saler et bien mélanger.",
      "Ajouter les pois chiches et couvrir d'eau.",
      "Porter à ébullition, puis baisser le feu et laisser mijoter à couvert pendant 30 minutes.",
      "Ajouter le frik et continuer de mijoter pendant encore 20 minutes, en remuant de temps en temps.",
      "Ajouter de l'eau si nécessaire pour obtenir la consistance désirée.",
      "Servir chaud avec du pain.",
    ],
    comments: [
      {
        user: "Fatiha",
        rating: 4.3,
        content:
          "La chorba frik est une soupe algérienne traditionnelle et cette recette est très réussie, merci !",
      },
      {
        user: "Vincent",
        rating: 4.0,
        content:
          "J'ai ajouté des pois chiches à cette recette et c'était délicieux, merci pour l'idée !",
      },
    ],
  },
  {
    id: 9,
    name: "Koushari",
    category: "Déjeuner",
    country: "Egypte",
    duration: "1 heure",
    image: "9.png",
    ingredients: [
      "2 tasses de riz",
      "1 tasse de lentilles",
      "1 tasse de macaronis",
      "1/2 tasse de pois chiches",
      "1 oignon",
      "4 gousses d'ail",
      "1 cuillère à soupe de vinaigre",
      "1 cuillère à soupe de sel",
      "1 cuillère à soupe de poivre noir",
      "1 cuillère à soupe de cumin",
      "1 cuillère à soupe de coriandre",
      "1/2 tasse d'huile végétale",
      "Sauce tomate :",
      "4 tomates pelées et coupées en petits dés",
      "1/4 tasse d'huile végétale",
      "1/2 cuillère à soupe de vinaigre",
      "1/2 cuillère à soupe de sel",
      "1/2 cuillère à soupe de poivre noir",
    ],
    instructions: [
      "Rincer le riz et le mettre dans une casserole avec 4 tasses d'eau salée. Porter à ébullition, puis réduire le feu et laisser mijoter pendant 20 minutes.",
      "Rincer les lentilles et les pois chiches, puis les mettre dans une casserole avec 4 tasses d'eau salée. Porter à ébullition, puis réduire le feu et laisser mijoter pendant 20 minutes.",
      "Faire cuire les macaronis selon les instructions sur l'emballage.",
      "Dans une poêle, faire chauffer l'huile végétale et faire revenir l'oignon et l'ail jusqu'à ce qu'ils soient dorés.",
      "Ajouter le vinaigre, le sel, le poivre, le cumin et la coriandre, puis retirer du feu.",
      "Dans une autre poêle, faire chauffer 1/4 tasse d'huile végétale et faire revenir les tomates jusqu'à ce qu'elles soient tendres.",
      "Ajouter le vinaigre, le sel et le poivre, puis retirer du feu.",
      "Pour servir, disposer le riz, les lentilles, les macaronis et les pois chiches dans un grand plat. Verser la sauce tomate sur le dessus, puis ajouter le mélange d'oignons et d'ail.",
      "Mélanger le tout et servir chaud.",
    ],
    comments: [
      {
        user: "Yara",
        rating: 4.5,
        content:
          "Le koushari est un plat égyptien délicieux et cette recette est facile à suivre, merci !",
      },
      {
        user: "Salim",
        rating: 5,
        content:
          "Je suis égyptienne et je peux confirmer que cette recette est très authentique et délicieuse. Merci de l'avoir partagée!",
      },
      {
        user: "Pierre",
        rating: 4.0,
        content:
          "J'ai ajouté des oignons frits à cette recette et c'était délicieux, merci pour l'idée !",
      },
    ],
  },
  {
    id: 10,
    name: "Köfte",
    category: "Plat",
    country: "Turquie",
    duration: "1h",
    image: "10.png",
    ingredients: [
      "Viande hachée (500g)",
      "Oignon (1 pièce, finement haché)",
      "Ail (2 gousses, écrasé)",
      "Persil frais (1/2 tasse, haché)",
      "Paprika (1 cuillère à soupe)",
      "Cumin (1 cuillère à soupe)",
      "Sel (1 cuillère à café)",
      "Poivre noir (1/2 cuillère à café)",
      "Huile d'olive (3 cuillères à soupe)",
    ],
    instructions: [
      "Mélanger la viande hachée, l'oignon, l'ail, le persil, le paprika, le cumin, le sel et le poivre noir dans un grand bol.",
      "Malaxer le mélange avec vos mains jusqu'à ce qu'il soit bien mélangé et uniforme.",
      "Prendre une petite quantité de mélange de viande et façonner en petites boules.",
      "Faire chauffer l'huile d'olive dans une poêle à feu moyen-élevé.",
      "Ajouter les boulettes de viande dans la poêle et faire frire jusqu'à ce qu'elles soient bien dorées de tous les côtés et cuites à l'intérieur, environ 10 minutes.",
      "Servir chaud avec du riz, de la salade ou du pain pita.",
    ],
    comments: [
      {
        user: "Aicha",
        rating: 4,
        content: "Très bonne recette, mais un peu épicée pour moi.",
      },
      {
        user: "Yassin",
        rating: 5,
        content: "Délicieux ! Je recommande vivement.",
      },
    ],
  },
];

//IP of my machine change this to ur ip to be able to run this code
  let link2= "http://127.0.0.1:5500/"
  /************************/

var recipecontainer1 = document.getElementById("recipe-container");
const searchInput = document.getElementById("search");
const params = new URLSearchParams(window.location.search);
const id =params.get('recette');

function displayRecipes(recettesDB) {
  recipecontainer1.innerHTML = "";
  for (var i = 0; i < recettesDB.length; i++) {
    // Create a new recipe card element
    var card = document.createElement("div");
    card.classList.add("card");

    // Create a new image element for the recipe
    var image = document.createElement("img");
    image.src = recettesDB[i].image;
    card.appendChild(image);

    // Create a new title element for the recipe
    var nam = document.createElement("h1");
    nam.textContent =recettesDB[i].name;
    nam.style.marginBottom="20px";
    card.appendChild(nam);

    var category = document.createElement("p");
    category.textContent = recettesDB[i].category;
    card.appendChild(category);

     

    // Create a new description element for the recipe
    var country = document.createElement("p");
    country.textContent = recettesDB[i].country;
    card.appendChild(country);

    var duration = document.createElement("p");
    duration.textContent = recettesDB[i].duration;
    card.appendChild(duration);

    var rating= document.createElement("p");
    rating.textContent =  "Rating" + " : " +  (  recettesDB[i].comments[0].rating + recettesDB[i].comments[1].rating  ) /2;
    card.appendChild(rating);
     
    // Create a new button element for the recipe
    var button = document.createElement("button");
    button.textContent = "view recipe";
    button.style.float="right"
    card.appendChild(button);
    let id =i+1;
    button.addEventListener("click",function(){
      window.location.href =link2+"detail.html?recette=" +id ;
    });
    
    // Append the recipe card to the container element
    recipecontainer1.appendChild(card);
  }
  
  
} 
   //research a recipe
  console.log(location.href)
function searchRecipe() {
  var searchText = searchInput.value.toLowerCase();
  var results = [];
  for (var i = 0; i < recettesDB.length; i++) {
    if (recettesDB[i].name.toLowerCase().includes(searchText)) {
      results.push(recettesDB[i]);
    }
  }
  displayRecipes(results);
}


  
function detailPage(){
  window.location.href=link2+"detail.html"
}
function pageaccueil(){
  window.location.href=link2+"Page%20d'accueil.html"
}

// Display all recipes initially
displayRecipes(recettesDB);


function recipe01(){
  window.location.href=link2+"detail.html?recette=1"
}
function recipe02(){
  window.location.href=link2+"detail.html?recette=2"
}
function recipe03(){
  window.location.href=link2+"detail.html?recette=3"
}
function recipe04(){
  window.location.href=link2+"detail.html?recette=4"
}
function recipe05(){
  window.location.href=link2+"detail.html?recette=5"
}
function recipe06(){
  window.location.href=link2+"detail.html?recette=6"
}
function recipe07(){
  window.location.href=link2+"detail.html?recette=7"
}
function recipe08(){
  window.location.href=link2+"detail.html?recette=8"
}
function recipe09(){
  window.location.href=link2+"detail.html?recette=9"
}
function recipe10(){
  window.location.href=link2+"detail.html?recette=10"
}
     