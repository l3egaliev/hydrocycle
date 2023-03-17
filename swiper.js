        let swiper = new Swiper('.swiper-container', {
            // Optional parameters
            loop: false,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                el: '.swiper-pagination2',
                type: 'bullets',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            scrollbar: {
                // el: '.swiper-scrollbar',
                hide: true
            },
            
        });
  