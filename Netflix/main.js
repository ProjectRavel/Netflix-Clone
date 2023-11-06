const tabitems = document.querySelectorAll(".tab-item");
const tabcontentitems = document.querySelectorAll(".tab-content-item");

// Select tab content item
function selectitem(e) {
    // Remove border from all tab items
    tabitems.forEach(item => item.classList.remove('tab-border'));

    // Add Border to the clicked tab
    e.currentTarget.classList.add('tab-border');

    // Get the ID of the clicked tab
    const tabId = this.id;

    // Hide all tab content items
    tabcontentitems.forEach(contentItem => contentItem.classList.remove('show'));

    // Show the corresponding tab content item
    const selectedContent = document.getElementById(`${tabId}-content`);
    if (selectedContent) {
        selectedContent.classList.add('show');
    }
}

// Listen for tab click
tabitems.forEach(item => item.addEventListener('click', selectitem));