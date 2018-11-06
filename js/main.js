// JQuery-like selector
window.$ = function(selector) {
  return document.querySelector(selector)
}
// JQuery-like selector
window.$all = function(selector) {
  return document.querySelectorAll(selector)
}
// Callback to run when document content is loaded
window.onready = function(callback) {
  document.addEventListener('DOMContentLoaded', callback)
}

onready(function() {
  const secItemTamplate = function() {
    const secItemId = Date.now()
    return `
      <div class="section-item-container section" id="sec-item-${secItemId}">
        <p class="section-subtitle" contenteditable="true">Subtítulo</p>
        <p class="section-description" contenteditable="true" spellcheck="false">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore impedit mollitia quas laudantium. 
        Tenetur omnis esse unde quis incidunt eos, eaque at, consectetur quidem animi in odio eum dolor ab!
        </p>
        <div class="create-sec-item float-btn" data-action="create" data-secid="sec-item-${secItemId}">
          <i class="fa fa-plus" data-action="create" data-secid="sec-item-${secItemId}"></i>
        </div>
        <div class="remove-sec-item float-btn" data-action="remove" data-secid="sec-item-${secItemId}">
          <i class="fa fa-minus" data-action="remove" data-secid="sec-item-${secItemId}"></i>
        </div>
      </div>`
  }

  const sectionTemplate = function() { 
    const secId = Date.now()    
    return `
    <li id="sec-${secId}" class="sections">
      <div class="sec-head">
        <p class="section-title" contenteditable="true">Título da secção</p>
        <span class="remove-sec float-btn" data-action="remove" data-secid="sec-${secId}">
          <i class="fa fa-minus" data-action="remove" data-secid="sec-${secId}"></i>
        </span>
      </div>
      ${secItemTamplate()}
    </li>`
  }
  // Defina actions to create and remove sections items
  function sectionActions(event) {
    let action = event.target.dataset.action
    let secid = event.target.dataset.secid 
    const el = $(`#${secid}`)
    switch (action) {
      case 'create':
        el.insertAdjacentHTML('afterend', secItemTamplate())
        break
      case 'remove':
        el.remove()
      default:
        break
    }
    console.log(action)
  }
    
  function newSection(event) {
    $('#sec-container').insertAdjacentHTML('beforeend', sectionTemplate())
  }

  function selectColor(event) {
    document
    .documentElement
    .style
    .setProperty('--primary-color', event.target.value)
  }

  // Create a whole new section
  $('#new-section').onclick = newSection
  // Add actions buttos to create/remove section items
  $('#sec-container').onclick = sectionActions
  // Change CSS variables
  $('#color-picker').onchange = selectColor
})
