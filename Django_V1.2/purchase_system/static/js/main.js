document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const baseContent = document.getElementById('base-content'); // Get base content element
    const logoContainer = document.querySelector('.logo-container'); // Get the logo container
    const toggleNavButton = document.getElementById('toggle-nav');
    const dropdownTriggers = document.querySelectorAll('.nav-item.has-dropdown > a');


    function toggleNav() {
        baseContent.classList.toggle('collapsed');
        logoContainer.classList.toggle('collapsed-logo'); // Toggle logo visibility
    }

    function closeAllDropdowns() {
        const dropdowns = document.querySelectorAll('.nav-item.has-dropdown .dropdown');
        dropdowns.forEach(dropdown => dropdown.classList.remove('open'));
    }

    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function (event) {
            event.preventDefault();
            const dropdown = this.nextElementSibling;
            dropdown.classList.toggle('open');
        });
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.nav-item.has-dropdown')) {
            closeAllDropdowns();
        }
    });


    toggleNavButton.addEventListener('click', toggleNav);
});
document.addEventListener('DOMContentLoaded', () => {
    const baseContent = document.getElementById('base-content');
    const logoContainer = document.querySelector('.logo-container');
    const toggleNavButton = document.getElementById('toggle-nav');
    const headerContainer = document.getElementById('header-container');
    const mainContent = document.getElementById('main-content');

    function toggleNav() {
        baseContent.classList.toggle('collapsed');
        logoContainer.classList.toggle('collapsed-logo');
        headerContainer.classList.toggle('collapsed-header');
        baseContent.classList.toggle('hidden'); // Hide/show base content
        mainContent.classList.toggle('expanded-main'); // Adjust main content
    }

    toggleNavButton.addEventListener('click', toggleNav);
});

document.getElementById('userMenuToggle').addEventListener('click', function() {
    var dropdown = document.querySelector('.dropdown-menu');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
      dropdown.style.display = 'block';
    } else {
      dropdown.style.display = 'none';
    }
  });