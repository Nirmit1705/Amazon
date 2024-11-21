const products = [
    {
        id: 1,
        name: "adidas Men Valrun M Running Shoes",
        price: 1719,
        color: "Blue",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcThmTao_Yba7O2rwzF_wsBQvXTEfLZC232vU8gDB7UatI4jCO7xle8TuEtfQLY5g_lchckVoELqhRgaWAzLadXigfLGLy8txERHAdCKwArAgQW23ylSC94rvg"
    },
    {
        id: 2,
        name: "Nike Downshifter 13 Men's Running Shoes",
        price: 4295,
        color: "Gray",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQNZZzJKpXy4ce0v7GEjmO5kl-C4vLke3ROAMm9wg7QI663ju-P3Ec0-fs6e_4gGxJ8mj0b-OuP8Cz2d9vFOfs1EzFPWZ-stk9kCUarQghs2uMAP9672jZm"
    },
    {
        id: 3,
        name: "Converse Chuck 70 High Sneakers",
        price: 5999,
        color: "Black",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRV7ekl1-b2-8wBpDJBYRHqoBryuW4OfAFMbzVav6zX1OoliozIyGZoz0b1r9zmOD3mTbg9_v8_48rMIB8o7SZjukG_tXRlh3pAm7Uu_AIZMcasRqYcpPhwMQ"
    },
    {
        id: 4,
        name: "Red Tape Sneaker Casual Shoes For Men",
        price: 1619,
        color: "White",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT3SQJkNfggA8UT-wLIbQu8j-TxBvhFXk9Tacp_Xwo4PpYhBdZq-vIQy4fTN5yNpr3H9w3N3KDVJje7RnX0WLdJ1i8TgyFvhriYwL-MonoXa2Voy6HV6Bi9fw"
    },
    {
        id: 5,
        name: "adidas Men Clear Factor M Running Shoe",
        price: 1979.50,
        color: "Black",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSdJsVRbsOpT2BDpq8xOeuFUip9KtM53LBq4p2Mp2fSGpYXuxk7MsOg247YJVMPa_lf08JoRcodjjPlnZ_8DkAtpZTusQLuueXd9w4_9vyhXDCDynrrTUsA"
    },
    {
        id: 6,
        name: "Nike Court Vision Low Next Nature Men's Shoes",
        price: 4995,
        color: "Olive",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQsOCxH9Oh6uHJC0IZwctHHX9c9O9DfyqOyldIDnlERpUyiU04xF0phDaYq57aErsSWuMHfkqfANFuON6hTpHjFBrLyDnW4S6-Bn0HFKQlmwVTTKR8D84Ln"
    },
    {
        id: 7,
        name: "Nike Zoom Fly 6 Men's Road Running Shoes Size",
        price: 15995,
        color: "White",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQsOCxH9Oh6uHJC0IZwctHHX9c9O9DfyqOyldIDnlERpUyiU04xF0phDaYq57aErsSWuMHfkqfANFuON6hTpHjFBrLyDnW4S6-Bn0HFKQlmwVTTKR8D84Ln"
    },
    {
        id: 8,
        name: "Campus Mike N Running Shoes For Men",
        price: 949,
        color: "Black",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT7UGc1MvdUYp7q9zHuv2PDWkQzLSo8_BDNWiUtbvY0TnhB9Z8xhI6eNCYjOTONO14rXY-nwN_LODiTOJGJQIo0KNpr_i8KCPFYHLgJA85jW06ycpTm3YpRzg"
    },
    {
        id: 9,
        name: "Red Tape Athleisure Walking Shoes for Men",
        price: 2219,
        color: "Gray",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSCSASAfPx0BngLFkb6Zur0svqpbUTsAb4pY5_ko5mrCX97F8ReiWuuTo8BeYtY_pZI2LRI-oAHgbgkAMl8EXxEdUKLci3iN9KOVz-fafJVxOawMfWxAwMz"
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function generate() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <p>Color: ${product.color}</p>
            <div class="product-actions">
                <button class="add-to-cart" onclick="addcart(${product.id})">Add to Cart</button>
                <button class="add-to-wishlist" onclick="addwishlist(${product.id})">Wishlist</button>
            </div>
        `;
        grid.appendChild(productCard);
    });

}

generate();