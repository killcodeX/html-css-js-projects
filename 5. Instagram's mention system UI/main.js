const input = document.getElementById('message-input');

function showSuggestions(suggestions) {
  const suggestionList = document.createElement('ul');
  suggestionList.setAttribute('id', 'suggestions');
  for (let i = 0; i < suggestions.length; i++) {
    const suggestion = document.createElement('li');
    suggestion.setAttribute('class', 'suggestion');
    suggestion.innerText = suggestions[i];
    suggestionList.appendChild(suggestion);
    suggestion.addEventListener('click', function() {
      input.value = input.value.substring(0, input.value.lastIndexOf('@') + 1) + suggestions[i];
      suggestionList.remove();
    });
  }
  input.parentNode.appendChild(suggestionList);
}

input.addEventListener('keyup', function(event) {
  if (event.key === '@') {
    const searchTerm = input.value.substring(input.value.lastIndexOf('@') + 1);
    const matchingUsernames = getUsers(searchTerm); // function to get matching usernames
    showSuggestions(matchingUsernames);
  }
});
