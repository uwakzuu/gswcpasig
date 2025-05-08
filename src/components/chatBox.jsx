import React, { useEffect } from 'react';
import Chatbox from 'https://cdn.jsdelivr.net/npm/@chaindesk/embeds@latest/dist/chatbox/index.js';

export default function ChatBox() {
  useEffect(() => {
    const initializeChatbox = async () => {
      const widget = await Chatbox.initBubble({
        agentId: 'cm9tqdi6l058452ukn9d0i0uc',
        
        // optional 
        // If provided will create a contact for the user and link it to the conversation
        contact: {
          firstName: 'John',
          lastName: 'Doe',
          email: 'customer@email.com',
          phoneNumber: '+33612345644',
          userId: '42424242',
        },
        // optional
        // Override initial messages
        initialMessages: [
          'Hello Georges how are you doing today?',
          'How can I help you ?',
        ],
        // optional
        // Provided context will be appended to the Agent system prompt
        context: "The user you are talking to is John. Start by Greeting him by his name.",
      });

      // open the chat bubble
      // widget.open();

      // You can also use widget.close() or widget.toggle() as needed
    };

    initializeChatbox();
  }, []);

  return <div id="chatbox-container"></div>;
}