const toggleBtn = document.getElementById('toggle-btn');
const transcriptArea = document.querySelector('#transcript-area-1');
const toggleBtn2 = document.getElementById('toggle-btn2');
const transcriptArea2 = document.querySelector('#transcript-area-2');
const expanded = toggleBtn.getAttribute('aria-expanded');
const expanded2 = toggleBtn2.getAttribute('aria-expanded');



toggleBtn.addEventListener('click', function() {
    console.log("test")
    transcriptArea.classList.toggle("hide");
    toggleBtn.setAttribute('aria-expanded', 'true');

});

toggleBtn2.addEventListener('click', function() {
    console.log("works")
    transcriptArea2.classList.toggle("hide");
    toggleBtn2.setAttribute('aria-expanded', 'true');
});

