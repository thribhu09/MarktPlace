document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('.product-list');

    // Sample products
    const products = [
        {
            name: 'Product 1',
            price: '$10.00',
            image: 'https://via.placeholder.com/200x150'
        },
        {
            name: 'Product 2',
            price: '$20.00',
            image: 'https://via.placeholder.com/200x150'
        },
        {
            name: 'Product 3',
            price: '$30.00',
            image: 'https://via.placeholder.com/200x150'
        }
    ];

    function createProductElement(product) {
        const productElement = document.createElement('div');
        productElement.className = 'product';

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;

        return productElement;
    }
    
    products.forEach(product => {
        const productElement = createProductElement(product);
        productList.appendChild(productElement);
    });
});
