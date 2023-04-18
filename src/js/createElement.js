const createElement = (tag, options) => {
const element = document.createElement(tag)
return Object.assign(element, options)//Метод Object. assign() используется для копирования значений всех собственных перечисляемых свойств из одного или более исходных объектов в целевой объект. После копирования он возвращает целевой объект.

}

export default createElement