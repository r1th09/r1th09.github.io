document.addEventListener('DOMContentLoaded', () => {
    // Animate header
    anime({
        targets: 'header',
        opacity: [0, 1],
        translateY: [-50, 0],
        easing: 'easeOutExpo',
        duration: 1200
    });

    // Animate nav items
    anime({
        targets: 'nav ul li',
        opacity: [0, 1],
        translateY: [-20, 0],
        delay: anime.stagger(100, {start: 500}),
        easing: 'easeOutExpo'
    });

    // Animate cards
    anime({
        targets: '.card',
        opacity: [0, 1],
        translateY: [50, 0],
        delay: anime.stagger(200, {start: 800}),
        easing: 'easeOutExpo'
    });

    // Add hover effect to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            anime({
                targets: card,
                scale: 1.03,
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                duration: 300,
                easing: 'easeOutExpo'
            });
        });
        card.addEventListener('mouseleave', () => {
            anime({
                targets: card,
                scale: 1,
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                duration: 300,
                easing: 'easeOutExpo'
            });
        });
    });
});