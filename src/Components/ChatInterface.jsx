import React, { useEffect } from 'react';
import { Chat, useChatAPI } from '@voiceflow/react-chat';

const ChatInterface = () => {
  const { addMessage } = useChatAPI();

  useEffect(() => {
    addMessage({
      type: 'text',
      content: { text: 'Welcome! How can I assist you today?' },
      actions: [
        { type: 'button', text: 'Learn More', payload: 'LEARN_MORE' },
        { type: 'button', text: 'Get Started', payload: 'GET_STARTED' },
        { type: 'button', text: 'Contact Support', payload: 'CONTACT_SUPPORT' },
      ],
    });
  }, [addMessage]);

  return <Chat projectID="66a8e5226b56308fbf969f6a" APIKey="VF.DM.66a8ecb94b0a0c4b021101a0.jeNGOTREFuT1VR5y"/>;
//   return <Chat projectID="YOUR_PROJECT_ID" APIKey="YOUR_API_KEY" />;
};

export default ChatInterface;

