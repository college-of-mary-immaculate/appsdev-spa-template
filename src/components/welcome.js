import JSLogo from '../icons/javascript.svg';

export default function Welcome(root) {
  const component = document.createElement('h1');
  component.innerHTML = `
      <img src="${JSLogo}" alt="Vanilla JavaScript" />
      Welcome to Example App!
  `;

  root.appendChild(component);
}
