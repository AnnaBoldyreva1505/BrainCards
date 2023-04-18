import refs from './refs';
import createHeader from './createHeader'

const initApp = () => {
const headerParent = refs.header;
const app = refs.app;

const headerObj = createHeader(headerParent)

const returnIndex = (e) => {
e.preventDefault()
headerObj.updateHeaderTitle('Категория')
}

headerObj.headerLogoLink.addEventListener('click', returnIndex)
headerObj.headerBtn.addEventListener('click', () => {
    headerObj.updateHeaderTitle("Новая категория")
})
}

initApp()