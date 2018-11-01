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
    const secId = Date.now()
    return `
    <div class="section-item-container section" id="sec-${secId}">
    <p class="section-subtitle" contenteditable="true">Cargo/Posição</p>
    <p class="section-description" contenteditable="true" spellcheck="false">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore impedit mollitia quas laudantium. 
    Tenetur omnis esse unde quis incidunt eos, eaque at, consectetur quidem animi in odio eum dolor ab!
    </p>
    <div class="create-sec float-btn" data-action="create" data-secid="sec-${secId}"><i class="fa fa-plus" data-action="create" data-secid="sec-${secId}"></i></div>
    <div class="remove-sec float-btn" data-action="remove" data-secid="sec-${secId}"><i class="fa fa-minus" data-action="remove" data-secid="sec-${secId}"></i></div>
    </div>
    `
  }

  const sectionTemplate = `
    <li id="section-2-default" class="sections">
      <p class="section-title" contenteditable="true">Título da secção</p>
      ${secItemTamplate()}
    </li>`
  
  function sectionActions(event) {
    let action = event.target.dataset.action
    let secid = event.target.dataset.secid 
    const el = $(`#${secid}`)
    switch (action) {
      case 'create':
        el.insertAdjacentHTML('afterend', secItemTamplate())
        break
      case 'remove':
        console.log(event.target.dataset)
        el.remove()
      default:
        break
    }

    console.log(action)
    console.log('This', this)
    console.log(event.target)
    console.log(event.target.dataset)
  }

  function newSection(event) {
    $('#sec-container').insertAdjacentHTML('beforeend', sectionTemplate)
  }

  // Create a whole new section
  $('#new-section').onclick = newSection
  // Add actions buttos to create/remove section items
  $('#sec-container').onclick = sectionActions
})
