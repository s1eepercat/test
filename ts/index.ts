import { User } from './user';

(function () {
  const body = document.getElementsByTagName('body');
  const userContainerElement = document.createElement('div');
  const ageElement = document.createElement('p');
  const nameElement = document.createElement('p');
  const incrementButton = document.createElement('button');
  const name = 'Some name';
  const age = 18;

  body[0].appendChild(userContainerElement);
  userContainerElement.appendChild(ageElement);
  userContainerElement.appendChild(nameElement);
  userContainerElement.appendChild(incrementButton);

  const user = new User(name, age);

  ageElement.innerText = user.userAge.toString();
  nameElement.innerText = user.userName;

  incrementButton.addEventListener('click', () => {
    user.incrementAge();
    ageElement.innerText = user.userAge.toString();
  });
})();