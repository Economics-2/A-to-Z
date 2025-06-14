document.addEventListener('DOMContentLoaded', () => {
  // Initialize Swiper
  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: { delay: 3300 },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
  });

  // Dummy data for products
  const productGrid = document.getElementById('product-grid');
  const dummyTitles = [
    "The Great Gatsby", "Atomic Habits", "Think and Grow Rich", "Harry Potter", "The Alchemist",
    "Rich Dad Poor Dad", "To Kill a Mockingbird", "1984", "The Power of Habit", "Deep Work",
    "Sapiens", "The Art of War", "A Brief History of Time", "Man's Search For Meaning", "Crime and Punishment"
  ];
  const dummyAuthors = [
    "F. Scott Fitzgerald", "James Clear", "Napoleon Hill", "J.K. Rowling", "Paulo Coelho",
    "Robert Kiyosaki", "Harper Lee", "George Orwell", "Charles Duhigg", "Cal Newport",
    "Yuval Noah Harari", "Sun Tzu", "Stephen Hawking", "Viktor Frankl", "Fyodor Dostoevsky"
  ];
  const dummyCovers = [
    "https://covers.openlibrary.org/b/id/10594783-L.jpg",
    "https://covers.openlibrary.org/b/id/11153290-L.jpg",
    "https://covers.openlibrary.org/b/id/10465294-L.jpg",
    "https://covers.openlibrary.org/b/id/10958378-L.jpg",
    "https://covers.openlibrary.org/b/id/10709119-L.jpg",
    "https://covers.openlibrary.org/b/id/11032768-L.jpg",
    "https://covers.openlibrary.org/b/id/8225267-L.jpg",
    "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    "https://covers.openlibrary.org/b/id/8369251-L.jpg",
    "https://covers.openlibrary.org/b/id/10594891-L.jpg",
    "https://covers.openlibrary.org/b/id/10594679-L.jpg",
    "https://covers.openlibrary.org/b/id/10594752-L.jpg",
    "https://covers.openlibrary.org/b/id/10594678-L.jpg",
    "https://covers.openlibrary.org/b/id/10594680-L.jpg",
    "https://covers.openlibrary.org/b/id/10594681-L.jpg"
  ];

  for(let i=1; i<=108; i++) {
    const idx = i % dummyTitles.length;
    const price = Math.floor(Math.random()*500+200);
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${dummyCovers[idx]}" alt="Book Cover: ${dummyTitles[idx]}" loading="lazy">
      <div class="product-title">${dummyTitles[idx]} #${i}</div>
      <div class="product-author">${dummyAuthors[idx]}</div>
      <div class="product-price">৳ ${price}</div>
      <div class="product-action"><button type="button" aria-label="View details for ${dummyTitles[idx]}">Details</button></div>
    `;
    productGrid.appendChild(card);
  }

  // Optional: Add keyboard navigation for Swiper (accessibility enhancement)
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      swiper.slidePrev();
    } else if (event.key === 'ArrowRight') {
      swiper.slideNext();
    }
  });
});
