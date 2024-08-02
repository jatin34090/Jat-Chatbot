# How to run the project

Run the give commants in the terminal-
Step 1- git clone (https://github.com/jatin34090/Jat-Chatbot)
Step 2- npm install
Step 3- npm run start

# What I learned about Voiceflow’s Chat UI Kit.

VoiceFlow-> Voiceflow is a no-code platform that allows users to design, prototype, and build conversational AI experiences, such as chatbots and voice applications, for platforms like Amazon Alexa, Google Assistant, and web-based chat interfaces.

# How can I Integrate VoiceFlow Chatbot into my application

Step 1- Select Embed Widget or visit the Integrations tab on the left side of the screen to access the snippet.
Step 2- Copy the snippet and add it to the website's code.
Step 3- Add it to the footer file or the website.

# window.voiceflow

window.voiceflow provide only one object called chat

# window.voiceflow.chat

window.voiceflow.chat have a object which contain 8 functions which wecan use to manipulate the chatbot. All the function are give below -
# 1 - close
    Purpose: Closes or hides the chat widget.
    Usage: Used to hide the chat widget from view.
# 2 - open
    Purpose: Opens or displays the chat widget.
    Usage: Typically used to make the chat widget visible to the user.
# 3 - destroy
    Purpose: Destroys or removes the chat widget from the DOM.
    Usage: Completely removes the chat widget and cleans up resources.
# 4 - hide
    Purpose: Hides the chat widget but keeps it in the DOM.
    Usage: Makes the chat widget invisible while still preserving its state and DOM elements.
# 5 - show
    Purpose: Shows the chat widget if it’s been hidden.
    Usage: Makes the chat widget visible again if it was hidden previously.
# 6 - interact
    Purpose: Handles interactions with the chat widget. This might involve sending messages or other interactive features.
    Usage: Used to perform actions or send messages to the chat.
# 7 - load
    Purpose: Loads or initializes the chat widget.
    Usage: Typically used to ensure the chat widget is properly initialized and ready for use.
# 8 - proactive
    Purpose: Manages proactive messages and actions.
    Usage:
        clear: Clears any proactive messages or prompts.
        push: Pushes a new proactive message or prompt to the chat.


