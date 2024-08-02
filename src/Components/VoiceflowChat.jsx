import React, { useEffect, useState } from "react";
import "./VoiceflowChat.css"; 

const VoiceflowChat = () => {
  const [buttonShow, setButtonShow] = useState(false);
  useEffect(() => {
    const scriptId = "voiceflow-chat-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "text/javascript";
      script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      script.onload = () => {
        window.voiceflow.chat.load({
            verify: { projectID: "66a924f06b56308fbf96bb29" },
            url: "https://general-runtime.voiceflow.com",
            versionID: "production",
          }).then(() => {
            setButtonShow(true);
          }).catch((err) => {
            console.error("Error loading Voiceflow chat:", err);
          });
      };
      document.body.appendChild(script);
    }
  }, []);


  const handleSendMessage = async (message) => {
    await handleOpenChat();
    if (window.voiceflow && window.voiceflow.chat) {
      try {
        const response = await window.voiceflow.chat.interact({
          type: "text",
          payload: message,
        });
      } catch (err) {
        console.error("Error interacting with chat:", err);
      }
    } else {
      console.error("Voiceflow chat is not loaded.");
    }
  };

  const handleOpenChat = async () => {
    if (window.voiceflow && window.voiceflow.chat) {
      await window.voiceflow.chat.open();
    }
  };

  return (
    <div className="voiceflow-chat-container">
      {buttonShow && <div className="proactive-buttons">
        <span className="proactive-toggle" onClick={() => setButtonShow(!buttonShow)}>x</span>
        <div className="proactive-title" onClick={() => handleOpenChat()}>How can I help you?</div>
        <button className="proactive-button"
          onClick={() => handleSendMessage("I have a question for support")}
        >
          I have a question for support
        </button>
        <button className="proactive-button"
          onClick={() => handleSendMessage("I have a question for sales")}
        >
          I have a question for sales
        </button>
      </div>}
    </div>
  );
};

export default VoiceflowChat;
