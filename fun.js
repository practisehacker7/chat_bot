
$(document).ready(function() {
  // Get required elements
  const chatContainer = $('#chatContainer');
  const messageInput = $('#messageInput');
  const sendButton = $('#sendButton');

  // Function to create and append a new message
  function createMessage(user, text) {
    const messageElement = $('<div>').addClass('message');
    const userElement = $('<div>').addClass('user').text(user);
    const textElement = $('<div>').addClass('text').text(text);

    messageElement.append(userElement);
    messageElement.append(textElement);

    chatContainer.append(messageElement);

    // Scroll to bottom of chat container
    // chatContainer.scrollTop(chatContainer[0].scrollHeight);
  }

  // Function to handle user message submission
  function handleMessageSubmit() {
    const message = messageInput.val().trim();

    if (message !== '') {
      createMessage('You', message);
      messageInput.val('');

      // TODO: Make an AJAX call to the backend service (Flask or Django APIs)
      // Replace the URL and data with your own backend endpoint
      // $.ajax({
      //   url: 'your-backend-endpoint',
      //   method: 'POST',
      //   data: { message: message },
      //   success: function(response) {
      //     // Handle the response from the backend
      //     // For now, let's use dummy responses
      //     const dummyResponse = 'This is a dummy response.';
      //     createMessage('ChatBot', dummyResponse);
      //   },
      //   error: function(error) {
      //     console.log(error);
      //   }
      // });

      // Dummy response for now
      const dummyResponse = 'This is a dummy response.';
      createMessage('ChatBot', dummyResponse);
    }
  }

  // Event listener for send button click
  sendButton.on('click', handleMessageSubmit);

  // Event listener for Enter key press in the message input
  messageInput.on('keypress', function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      handleMessageSubmit();
    }
  });
});

