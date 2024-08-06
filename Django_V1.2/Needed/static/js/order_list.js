document.addEventListener('DOMContentLoaded', () => {
    const filterInput = document.getElementById('filter-input');
    const searchInput = document.getElementById('search-input');
    const codeInput = document.getElementById('code-input');
    const nameInput = document.getElementById('name-input');
    const dateInputs = [
        document.getElementById('date-input-1'),
        document.getElementById('date-input-2'),
        document.getElementById('date-input-3'),
        document.getElementById('date-input-4')
    ];
    const prevPageButton = document.getElementById('prev-page');
    const nextPageButton = document.getElementById('next-page');
    const pageNumbers = document.getElementById('page-numbers');
    const addItemButton = document.getElementById('add-item');
    const purchaseOrderLog = document.querySelector('.the-purchase-order-log');
    const selectAllLogsCheckbox = document.getElementById('select-all-logs');
    const advancedSearchButton = document.getElementById('advanced-search');
    const cancelFilterButton = document.getElementById('cancel-filter');
    const searchButton = document.getElementById('search-button');
    const advancedFilterBar = document.getElementById('advanced-filter-bar');
    const statusFilter = document.getElementById('status-filter');
    const suggestions = document.getElementById('suggestions');

    let currentPage = 1;
    const totalPages = 100;

    selectAllLogsCheckbox.addEventListener('change', selectAllLogs);
    searchInput.addEventListener('input', searchItems);
    filterInput.addEventListener('change', filterItems);
    prevPageButton.addEventListener('click', () => changePage(-1));
    nextPageButton.addEventListener('click', () => changePage(1));
    addItemButton.addEventListener('click', () => {
        window.location.href = 'MR-Adding-Request.html';
    });
    dateInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.type = 'date';
            input.click();
        });
    });
    advancedSearchButton.addEventListener('click', toggleAdvancedSearch);
    cancelFilterButton.addEventListener('click', cancelFilter);
    searchButton.addEventListener('click', searchDatabase);

    function filterItems() {
        const statusText = statusFilter.value.toLowerCase();
        const rows = document.querySelectorAll('table tbody tr');
        rows.forEach(row => {
            const statusCell = row.cells[5]; // Assuming status is in the 6th column
            if (statusText === 'all' || statusCell.textContent.toLowerCase() === statusText) {
                row.style.display = ''; // Show row
            } else {
                row.style.display = 'none'; // Hide row
            }
        });
    }

    statusFilter.addEventListener('change', filterItems);

    function searchItems() {
        const searchText = searchInput.value.toLowerCase();
        console.log(`Searching customers by: ${searchText}`);
        // Provide search recommendations (example implementation)
        const recommendations = ['John Doe', 'Jane Smith', 'Jack White'];
        let suggestionsList = recommendations.filter(customer => customer.toLowerCase().includes(searchText));
        suggestions.innerHTML = suggestionsList.map(item => `<div class="suggestion-item">${item}</div>`).join('');
        suggestions.style.display = suggestionsList.length ? 'block' : 'none';
    }

    document.addEventListener('click', (e) => {
        if (!e.target.closest('#search-input')) {
            suggestions.style.display = 'none';
        }
    });

    suggestions.addEventListener('click', (e) => {
        if (e.target.classList.contains('suggestion-item')) {
            searchInput.value = e.target.textContent;
            suggestions.style.display = 'none';
        }
    });

    function changePage(offset) {
        currentPage = Math.max(1, Math.min(currentPage + offset, totalPages));
        pageNumbers.textContent = `Page ${currentPage}-${totalPages}`;
        console.log(`Current page: ${currentPage}`);
        // Implement pagination functionality
    }

    function toggleAdvancedSearch() {
        advancedFilterBar.classList.toggle('show');
    }

    function cancelFilter() {
        filterInput.value = '';
        searchInput.value = '';
        statusFilter.value = '';
        advancedFilterBar.classList.remove('show');
        console.log('Filters canceled');
        // Implement filter cancel functionality
    }

    function searchDatabase() {
        const searchText = searchInput.value.toLowerCase();
        const rows = document.querySelectorAll('table tbody tr');
        rows.forEach(row => {
            const nameCell = row.cells[2]; // Assuming name is in the 3rd column
            const codeCell = row.cells[1]; // Assuming code is in the 2nd column
            if (nameCell.textContent.toLowerCase().includes(searchText) || codeCell.textContent.toLowerCase().includes(searchText)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
        console.log(`Searching database by: ${searchText}`);
        // Implement search functionality to search from database
    }

    function selectAllLogs() {
        const isChecked = selectAllLogsCheckbox.checked;
        document.querySelectorAll('.log-entry input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = isChecked;
        });
    }
});

document.getElementById('advanced-search').addEventListener('click', function() {
    var advancedFilterBar = document.getElementById('advanced-filter-bar');
    if (advancedFilterBar.style.display === 'none' || advancedFilterBar.style.display === '') {
        advancedFilterBar.style.display = 'flex';
    } else {
        advancedFilterBar.style.display = 'none';
    }
});

document.querySelectorAll('.action-buttons1 .action-toggle').forEach(function(button) {
    button.addEventListener('click', function(event) {
        var ul = button.nextElementSibling;
        if (ul.style.display === 'none' || ul.style.display === '') {
            ul.style.display = 'block';
        } else {
            ul.style.display = 'none';
        }
    });
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.action-buttons1')) {
        document.querySelectorAll('.action-buttons1 ul').forEach(function(ul) {
            ul.style.display = 'none';
        });
    }
});