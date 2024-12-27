function customRender(reactElement, container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.append(domElement)
}


const reactElement = {
    type:'a',
    props: {
        href:'https://www.google.com',
        target: '_blank'
    },
    children: 'Click me to visit googlw'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)