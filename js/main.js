document.addEventListener("DOMContentLoaded", function() { 
  (function(){
    const secItemTamplate = `
    <div class="section-item-container section">
      <p class="section-subtitle" contenteditable="true">Cargo/Posição</p>
      <p class="section-description" contenteditable="true" spellcheck="false">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore impedit mollitia quas laudantium. 
        Tenetur omnis esse unde quis incidunt eos, eaque at, consectetur quidem animi in odio eum dolor ab!
      </p>
      <div class="new-section-item float-btn"><i class="fa fa-plus"></i></div>
    </div>
    `
    const newSecItemBtn = document.querySelectorAll(".new-section-item")
    newSecItemBtn.forEach(function(btn) {
      btn.addEventListener('click', function(event) {
        this.parentElement.insertAdjacentHTML('afterend', secItemTamplate) 
        console.log(event);
        console.log(this);
      }, false)
    })
  })();
});