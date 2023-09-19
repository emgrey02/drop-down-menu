import '../css/style.css';

const ListItem = (name, link) => {
    let cont = document.createElement('li');
    cont.classList.add('nav__inner-list__nav-item');

    let theLink = document.createElement('a');

    theLink.href = link;
    theLink.innerText = name;

    cont.appendChild(theLink);

    return cont;
};

export const DropDown = (options = '') => {
    let nav = document.createElement('nav');
    let menu = document.createElement('ul');

    nav.classList.add('nav');
    menu.classList.add('nav__nav-list');

    nav.appendChild(menu);

    let isVisible = false;

    let cont = document.createElement('li');
    cont.classList.add('nav__nav-item');

    let button = document.createElement('button');
    let p = document.createElement('p');
    p.innerText = options.triggerName || 'DropDown';

    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    let svgNS = svg.namespaceURI;
    let path = document.createElementNS(svgNS, 'path');
    path.setAttribute(
        'd',
        'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z',
    );
    path.style.fill = options.chevronColor || '#000000';
    svg.appendChild(path);

    button.appendChild(p);
    button.appendChild(svg);
    cont.appendChild(button);

    menu.appendChild(cont);

    let listCont = document.createElement('ul');
    listCont.classList.add('nav__inner-list');
    listCont.classList.add('closed');

    let contentArray = options.contents || ['', '', ''];
    contentArray.forEach((item, index) => {
        listCont.appendChild(
            ListItem(item.name || `Item ${index}`, item.link || '#'),
        );
    });

    menu.appendChild(listCont);

    let toggleDropdown = () => {
        if (isVisible) {
            listCont.classList.add('closed');
            listCont.classList.remove('open');
            svg.style.transform = 'rotate(0deg)';
            isVisible = false;
        } else {
            listCont.classList.remove('closed');
            listCont.classList.add('open');
            svg.style.transform = 'rotate(180deg)';
            isVisible = true;
        }
    };

    button.addEventListener('click', toggleDropdown);

    return nav;
};

// let options = {
//     triggerName: 'Settings',
//     contents: [
//         { name: 'Account', link: '#' },
//         { name: 'Notifications', link: '#' },
//         { name: 'Log Out', link: '#' },
//     ],
// };

// document.body.appendChild(App());
