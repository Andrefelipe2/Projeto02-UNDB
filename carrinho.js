document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cartItems");
    let totalPrice = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>🛒 O carrinho está vazio.</p>";
    } else {
        cartContainer.innerHTML = "";
        cart.forEach((item, index) => {
            let listItem = document.createElement("li");
            listItem.innerHTML = `${item.name} - R$ ${parseFloat(item.price).toFixed(2)} 
                <button class="remove-btn" data-index="${index}">❌</button>`;
            cartContainer.appendChild(listItem);
            totalPrice += parseFloat(item.price); // Garante que o preço seja somado corretamente
        });

        document.getElementById("total-price").textContent = totalPrice.toFixed(2);
    }

    // Evento para limpar o carrinho
    document.getElementById("clear-cart").addEventListener("click", function () {
        localStorage.removeItem("cart");
        location.reload(); // Atualiza a página
    });

    // Remover item específico
    document.querySelectorAll(".remove-btn").forEach(button => {
        button.addEventListener("click", (e) => {
            const index = e.target.getAttribute("data-index");
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            location.reload(); // Atualiza a página para exibir o carrinho atualizado
        });
    });

    // Finalizar pedido
    checkoutBtn.addEventListener('click', () => {
        alert('Obrigado pela compra');
        cart = [];
        updateCart();
        if (menuSection) {
            menuSection.classList.add('hidden');
        }
    });
});
