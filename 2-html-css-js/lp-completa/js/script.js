document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".swiper", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    AOS.init();

    emailjs.init("QLZvs58UcfwA6JHnR");

    const form = document.getElementById('contact-form');
        
    form.addEventListener('submit', function(event) {
        event.preventDefault();
            
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !phone || !message) {
            alert('Todos os campos são obrigatórios!');
            return;
        }
        
        emailjs.sendForm('contact_service', 'contact_form', form)
            .then(() => {
                alert('Mensagem enviada com sucesso!');
                form.reset();
            })
            .catch((error) => {
                console.error("Erro ao enviar a mensagem:", error);
                alert('Erro ao enviar a mensagem. Tente novamente.');
            });
    });
});