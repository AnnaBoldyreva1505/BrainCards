import createElement from "./createElement.js"

const createHeader = (parent) => {

const container = createElement("div", {
    className: 'container header__container',
})
parent.append(container)

const headerLogoLink = createElement('a', {
    href: '#',
    className: "header__logo-link",
})

const logo = createElement('img', {
    src: 'images/logo.svg',
    className: 'header__logo',
    alt: 'логотип',
})
headerLogoLink.append(logo)

const headerTitle = createElement('h2', {
    className: 'header__subtitle',
    textContent: "Категории"
})

const headerBtn = createElement('button', {
    className: 'header__btn',
    textContent: "Добавить категорию"
})


container.append(headerLogoLink, headerTitle, headerBtn)

const updateHeaderTitle = (title) =>{
headerTitle.textContent = title
}

return {headerLogoLink, headerBtn, updateHeaderTitle}

}

export default createHeader