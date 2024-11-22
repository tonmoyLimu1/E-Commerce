// Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
function showNextSlide() {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
}
setInterval(showNextSlide, 3000);

// Cart & Buy Now
let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach((button, index) => {
  button.addEventListener('click', () => {
    cartCount++;
    document.querySelector('.cart').textContent = `Cart (${cartCount})`;
    alert(`Added item ${index + 1} to cart!`);
  });
});

document.querySelectorAll('.buy-now').forEach((button) => {
  button.addEventListener('click', () => {
    const newTab = window.open('', '_blank');
    newTab.document.write(`
      <h1>Checkout</h1>
      <form>
        <label>Address:</label><br>
        <input type="text" placeholder="Your Address" required><br>
        <label>Payment:</label><br>
        <input type="text" placeholder="Card Details" required><br>
        <button type="submit">Pay</button>
      </form>
    `);
  });
});
