function customRender(customElement, container) {
    /*
    const domElement = document.createElement(customElement.type)
    domElement.innerHTML = customElement.children
    domElement.setAttribute('href', customElement.props.href)
    domElement.setAttribute('target', customElement.props.target)
    container.appendChild(domElement)
     */
    const domElement = document.createElement(customElement.type)
    domElement.innerHTML = customElement.children
    for(const prop in customElement.props){
        if(prop === 'children') continue
        domElement.setAttribute(prop, customElement.props[prop])
    }
    container.appendChild(domElement)

}

const customElement = {
    type: "a",
    props:{
    href: "https://google.com", 
    target: '_blanc'
    },
    children: "click me pls"
}

const customContainer = document.querySelector('#root')

customRender(customElement, customContainer)