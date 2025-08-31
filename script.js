$(document).ready(function() {
    // Get URL parameters
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    // Cover Page Functionality
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        var guestName = getUrlParameter('to');
        
        if (guestName) {
            $('#guest-name').text(guestName);
            $('#guest-greeting').show();
        }

        $('#open-invitation').click(function() {
            var targetUrl = 'invitation.html';
            if (guestName) {
                targetUrl += '?to=' + encodeURIComponent(guestName);
            }
            window.location.href = targetUrl;
        });
    }

    // Invitation Page Functionality
    if (window.location.pathname.includes('invitation') || window.location.pathname === '/invitation.html') {
        var guestName = getUrlParameter('to');
        
        if (guestName) {
            $('#hero-guest-name').text(guestName);
            $('#welcome-guest').show();
        }

        // Countdown Timer
        function updateCountdown() {
            var targetDate = new Date('2025-09-27T08:00:00+07:00').getTime();
            var now = new Date().getTime();
            var difference = targetDate - now;

            if (difference > 0) {
                var days = Math.floor(difference / (1000 * 60 * 60 * 24));
                var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((difference % (1000 * 60)) / 1000);

                $('#days').text(String(days).padStart(2, '0'));
                $('#hours').text(String(hours).padStart(2, '0'));
                $('#minutes').text(String(minutes).padStart(2, '0'));
                $('#seconds').text(String(seconds).padStart(2, '0'));
            } else {
                $('#days, #hours, #minutes, #seconds').text('00');
            }
        }

        // Update countdown every second
        updateCountdown();
        setInterval(updateCountdown, 1000);

        // Background Music Control
        var audio = $('#background-music')[0];
        var isPlaying = false;

        $('#music-toggle').click(function() {
            if (isPlaying) {
                audio.pause();
                $('#play-icon').show();
                $('#pause-icon').hide();
                isPlaying = false;
            } else {
                // Try to play, handle autoplay restrictions
                var playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise.then(function() {
                        $('#play-icon').hide();
                        $('#pause-icon').show();
                        isPlaying = true;
                    }).catch(function(error) {
                        console.log('Autoplay prevented:', error);
                        // Show user that they need to interact first
                        alert('Please click the music button to enable background music');
                    });
                }
            }
        });

        // Gallery hover effects
        $('.gallery-item').hover(
            function() {
                $(this).find('img').css('transform', 'scale(1.05)');
                $(this).find('.gallery-overlay').css('transform', 'translateY(0)');
            },
            function() {
                $(this).find('img').css('transform', 'scale(1)');
                $(this).find('.gallery-overlay').css('transform', 'translateY(100%)');
            }
        );

        // Smooth scrolling for internal links
        $('a[href^="#"]').click(function(e) {
            e.preventDefault();
            var target = $($(this).attr('href'));
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 800);
            }
        });

        // Lazy loading for images
        if ('IntersectionObserver' in window) {
            var imageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        var img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(function(img) {
                imageObserver.observe(img);
            });
        }
    }

    // General animations
    function animateOnScroll() {
        $('.section-header, .time-box, .gallery-item, .detail-item').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('animate-in');
            }
        });
    }

    // Trigger animation on scroll
    $(window).scroll(animateOnScroll);
    animateOnScroll(); // Initial check

    // Button hover effects
    $('.envelope-btn, .maps-link, .book-link').hover(
        function() {
            $(this).css('transform', 'translateY(-2px)');
        },
        function() {
            $(this).css('transform', 'translateY(0)');
        }
    );

    // Music button hover effect
    $('.music-btn').hover(
        function() {
            $(this).css('transform', 'scale(1.1)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );

    // Responsive menu (if needed in future)
    function handleResize() {
        var windowWidth = $(window).width();
        // Add responsive handling if needed
    }

    $(window).resize(handleResize);
    handleResize(); // Initial check

    // Preload critical images
    function preloadImages() {
        var images = [
            'src/assets/graduation-hero.jpg',
            'src/assets/graduation-ceremony.jpg',
            'src/assets/graduation-diploma.jpg',
            'src/assets/graduation-group.jpg'
        ];

        images.forEach(function(src) {
            var img = new Image();
            img.src = src;
        });
    }

    preloadImages();

    // Performance optimizations
    var ticking = false;

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(animateOnScroll);
            ticking = true;
        }
    }

    $(window).scroll(function() {
        requestTick();
        ticking = false;
    });

    // Error handling for audio
    $('#background-music').on('error', function() {
        console.log('Audio file could not be loaded');
        $('.music-control').hide(); // Hide music control if audio fails
    });

    // Add loading states
    $('.gallery-item img').on('load', function() {
        $(this).parent().removeClass('loading');
    });

    // Handle form submissions if any
    $('form').submit(function(e) {
        // Add form validation if needed
    });

    // Handle external links
    $('a[target="_blank"]').click(function() {
        // Add analytics tracking if needed
        console.log('External link clicked:', $(this).attr('href'));
    });

    // Add CSS classes for animations
    $('<style>')
        .prop('type', 'text/css')
        .html(`
            .animate-in {
                animation: fadeInUp 0.6s ease forwards;
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .loading {
                background-color: #f0f0f0;
                animation: pulse 1.5s ease-in-out infinite;
            }
            
            @keyframes pulse {
                0% {
                    opacity: 1;
                }
                50% {
                    opacity: 0.5;
                }
                100% {
                    opacity: 1;
                }
            }
        `)
        .appendTo('head');
});