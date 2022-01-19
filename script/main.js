const startElementList = [
    {id: 1, color: "blue", type: "circle"},
    {id: 2, color: "green", type: "square"},
    {id: 3, color: "blue", type: "circle"},
    {id: 4, color: "red", type: "square"},
]
let draggableElement = null
const finishSectionContent = document.querySelector('.finish-section-content')
const startSection = document.querySelector('.start-section')
const title = document.querySelector('.title')

function getCountElementFinalSection() {
    let count = 0
    const finalSectionItems = document.querySelectorAll('.placeholder')
    finalSectionItems.forEach(item => {
        if (item.children.length > 0) count++
    })
    return count
}

function dragStart(e) {
    setTimeout(() => e.target.classList.add('hide'), 0)
    draggableElement = e.target
}

function dragEnd(e) {
    e.target.classList.remove('hide')
}

function drop(e, div) {
    if (div.children.length === 0) {
        e.target.append(draggableElement)
        e.target.classList.remove('hovered')
        title.innerHTML = `Фигур в зоне для перетаскивания: ${getCountElementFinalSection()}`
    }
}

function dragOver(e) {
    e.preventDefault()
}

startElementList.forEach(item => {
    let newElement = document.createElement('div');
    newElement.setAttribute('draggable', 'true')
    newElement.classList.add('element-wrapper')
    newElement.classList.add('element-cursor_pointer')
    newElement.classList.add(item.color)
    if (item.type === "circle") newElement.classList.add('element-circle')
    newElement.addEventListener('dragstart', dragStart)
    newElement.addEventListener('dragend', dragEnd)
    startSection.appendChild(newElement);
})
for (let i = 0; i < 18; i++) {
    let newElement = document.createElement('div');
    newElement.classList.add('placeholder')
    newElement.addEventListener('dragover', dragOver)
    newElement.addEventListener('drop', (e) => drop(e, newElement))
    finishSectionContent.appendChild(newElement);
}

