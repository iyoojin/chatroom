document.addEventListener('DOMContentLoaded', () => {
  const title = document.createElement('h1');
  title.innerText = 'Online Chatroom';
  const body = document.querySelector('body');
  body.appendChild(title);
  // make AJAX call here....
  const dbURL = 'http://localhost:3000/api/chat';
  fetch(dbURL)
    .then((response) => response.json())
    .then((data) => console.log(data));
  addingText(body, dbURL);
});

const addingText = (body, dbURL) => {
  const div = document.createElement('div');
  div.setAttribute('class', 'textInputClass');

  const input = document.createElement('input');
  input.setAttribute('placeholder', 'Type your message here');
  input.setAttribute('id', 'inputID');

  const submitButton = document.createElement('button');
  submitButton.setAttribute('id', 'submitButtonID');
  submitButton.innerText = 'Submit your message';
  submitButton.addEventListener('click', () => {
    postMessage(input.value, dbURL);
  });

  //Appending tags to our body
  div.append(input);
  div.append(submitButton);
  body.append(div);
};

// We will need the user_ID once a user logs in, we will globally declare a const user_ID

const postMessage = (message, dbURL) => {
  const user_Id = 2;
  fetch(dbURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_Id: user_Id, message: message }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};
