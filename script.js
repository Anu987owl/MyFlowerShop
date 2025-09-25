const cart = {};

document.addEventListener('DOMContentLoaded', () => {

    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    if (addToCartButtons.length > 0) {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.dataset.productId;
                const productPrice = parseFloat(button.closest('.product-card').querySelector('.price').textContent.replace('$', ''));
                const productName = button.closest('.product-card').querySelector('h3').textContent;

                if (cart[productId]) {
                    cart[productId].quantity++;
                } else {
                    cart[productId] = {
                        name: productName,
                        price: productPrice,
                        quantity: 1
                    };
                }

                alert(`Added "${productName}" to your cart!`);

                console.log("Current Cart:", cart);

                updateCartDisplay();
            });
        });
    }

    const marqueeContainer = document.querySelector('.marquee-container');
    const marqueeContent = document.querySelector('.marquee-content');
    const marqueeItems = document.querySelectorAll('.marquee-item');

    if (marqueeContent && marqueeItems.length > 0) {
        
        const marqueeAnim = gsap.to(marqueeContent, {
            x: '-50%',
            duration: 15,
            ease: "none",
            repeat: -1,
            onRepeat: () => {
            }
        });

        
        if (marqueeContainer) {
            marqueeContainer.addEventListener('mouseover', () => {
                marqueeAnim.pause();
            });

            marqueeContainer.addEventListener('mouseout', () => {
                marqueeAnim.resume();
            });
        }
    }
});


function updateCartDisplay() {
    let totalItems = 0;
    let totalPrice = 0;
    
    for (const productId in cart) {
        totalItems += cart[productId].quantity;
        totalPrice += cart[productId].price * cart[productId].quantity;
    }

    console.log(`Total items in cart: ${totalItems}`);
    console.log(`Total price: $${totalPrice.toFixed(2)}`);
}