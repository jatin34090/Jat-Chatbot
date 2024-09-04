// import React, { useEffect, useState } from "react";
// import "./VoiceflowChat.css";

// const VoiceflowChat = () => {
//   const [buttonShow, setButtonShow] = useState(false);
//   const [button1Visible, setButton1Visible] = useState(false);
//   const [button2Visible, setButton2Visible] = useState(false);
//   const [button3Visible, setButton3Visible] = useState(false);
//   const [button4Visible, setButton4Visible] = useState(false);


//   useEffect(() => {

//     // <script>
//   {/* // Get query parameters from the URL */}
//   const urlParams = new URLSearchParams(window.location.search);
//   const projectID = urlParams.get('projectID');
//   const buttons = JSON.parse(decodeURIComponent(urlParams.get('buttons')));

//   // Use projectID and buttons as needed
//   if (projectID) {
//     window.voiceflow.chat.load({
//       verify: { projectID: projectID },
//       url: "https://general-runtime.voiceflow.com",
//       versionID: "production",
//     }).then(() => {
//       if (buttons) {
//         buttons.forEach((button, index) => {
//           setTimeout(() => {
//             const buttonElement = document.createElement('button');
//             buttonElement.textContent = button.label;
//             buttonElement.onclick = () => {
//               window.voiceflow.chat.interact({
//                 type: 'text',
//                 payload: button.message,
//               });
//             };
//             document.body.appendChild(buttonElement);
//           }, index * 1000);
//         });
//       }
//     }).catch(err => console.error("Error loading Voiceflow chat:", err));
//   }
// // </script>


//   }, []);

//   useEffect(() => {
//     const scriptId = "voiceflow-chat-script";
//     if (!document.getElementById(scriptId)) {
//       const script = document.createElement("script");
//       script.id = scriptId;
//       script.type = "text/javascript";
//       script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
//       script.onload = () => {
//         window.voiceflow.chat
//           .load({
//             verify: { projectID: "66a924f06b56308fbf96bb29" },
//             url: "https://general-runtime.voiceflow.com",
//             versionID: "production",
//           })
//           .then(() => {
//             setButtonShow(true);
//           })
//           .catch((err) => {
//             console.error("Error loading Voiceflow chat:", err);
//           });
//       };
//       document.body.appendChild(script);
//     }
//   }, []);

//   useEffect(() => {
//     if (buttonShow) {
//       // Start showing buttons one by one with a delay
//       setTimeout(() => setButton1Visible(true), 1000);
//       setTimeout(() => setButton2Visible(true), 2000);
//       setTimeout(() => setButton3Visible(true), 3000);
//       setTimeout(() => setButton4Visible(true), 4000);
//     }
//   }, [buttonShow]);

//   const handleSendMessage = async (message) => {
//     await handleOpenChat();
//     if (window.voiceflow && window.voiceflow.chat) {
//       try {
//         await window.voiceflow.chat.interact({
//           type: "text",
//           payload: message,
//         });
//       } catch (err) {
//         console.error("Error interacting with chat:", err);
//       }
//     } else {
//       console.error("Voiceflow chat is not loaded.");
//     }
//   };

//   const handleOpenChat = async () => {
//     if (window.voiceflow && window.voiceflow.chat) {
//       await window.voiceflow.chat.open();
//     }
//   };

//   return (
//     <div className="voiceflow-chat-container">
//       {buttonShow && (
//         <div className="proactive-buttons">
//           <span
//             className="proactive-toggle"
//             onClick={() => setButtonShow(false)}
//           >
//             x
//           </span>
//           <div className="proactive-title" onClick={handleOpenChat}>
//             How can I help you?
//           </div>
//           <div className="flex flex-col">
//             {button1Visible && (
//               <div>
//                 <button
//                   className="proactive-button"
//                   onClick={() =>
//                     handleSendMessage("I have a question for support")
//                   }
//                 >
//                   I have a question for support
//                 </button>
//               </div>
//             )}

//             {button2Visible && (
//               <div>
//                 <button
//                   className="proactive-button"
//                   onClick={() =>
//                     handleSendMessage("I have a question for sales")
//                   }
//                 >
//                   I have a question for sales
//                 </button>
//               </div>
//             )}

//             {button3Visible && (
//               <div>
//                 <button
//                   className="proactive-button"
//                   onClick={() =>
//                     handleSendMessage("I have a question for sales")
//                   }
//                 >
//                   I have a question for sales
//                 </button>
//               </div>
//             )}

//             {button4Visible && (
//               <div>
//                 <button
//                   className="proactive-button"
//                   onClick={() =>
//                     handleSendMessage("I have a question for sales")
//                   }
//                 >
//                   I have a question for sales
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VoiceflowChat;












import React, { useEffect, useState } from "react";
import "./VoiceflowChat.css";

const VoiceflowChat = () => {
  const [buttonShow, setButtonShow] = useState(false);
  const [dynamicButtons, setDynamicButtons] = useState([
    {
      text: "I have a question for sales",
      value: "I have a question for sales",
    },
    {
      text: "I have a question for support",
      value: "I have a question for support",
    },
  ]);
  // const [projectID, setProjectID] = useState(""); // Default project ID or use dynamic one
  const [projectID, setProjectID] = useState("66a924f06b56308fbf96bb29"); // Default project ID or use dynamic one

  useEffect(() => {
    // Fetch URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const urlProjectID = urlParams.get("projectID");
    const urlButtons = urlParams.get("buttons");

    // Set dynamic project ID if available
    console.log("Project ID from URL:", urlProjectID);
    if (urlProjectID) {
      setProjectID(urlProjectID);
    }

    // Parse buttons from URL parameters
    if (urlButtons) {
      try {
        const buttons = JSON.parse(decodeURIComponent(urlButtons));
        console.log("Buttons from URL:", buttons);
        setDynamicButtons(buttons);
      } catch (error) {
        console.error("Error parsing buttons from URL:", error);
      }
    }

    // Load Voiceflow Chat Widget
    const scriptId = "voiceflow-chat-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "text/javascript";
      script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      script.onload = () => {
        window.voiceflow.chat
          .load({
            verify: { projectID: urlProjectID || projectID },
            url: "https://general-runtime.voiceflow.com",
            versionID: "production",
          })
          .then(() => {
            setButtonShow(true);
          })
          .catch((err) => {
            console.error("Error loading Voiceflow chat:", err);
          });
      };
      document.body.appendChild(script);
    }
  }, [projectID]);

  // Dynamically create buttons after the chat is loaded
  useEffect(() => {
    if (buttonShow && dynamicButtons.length > 0) {
      dynamicButtons.forEach((button, index) => {
        setTimeout(() => {
          const buttonElement = document.createElement("button");
          buttonElement.textContent = button.label;
          buttonElement.onclick = () => {
            window.voiceflow.chat.interact({
              type: "text",
              payload: button.message,
            });
          };
          document.body.appendChild(buttonElement);
        }, index * 1000);
      });
    }
  }, [buttonShow, dynamicButtons]);

  const handleSendMessage = async (message) => {
    await handleOpenChat();
    if (window.voiceflow && window.voiceflow.chat) {
      try {
        await window.voiceflow.chat.interact({
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
      {buttonShow && (
        <div className="proactive-buttons">
          <span className="proactive-toggle" onClick={() => setButtonShow(false)}>
            x
          </span>
          <div className="proactive-title" onClick={handleOpenChat}>
            How can I help you?
          </div>
          <div className="flex flex-col">
            {dynamicButtons.map((button, index) => (
              <div key={index}>
                <button className="proactive-button" onClick={() => handleSendMessage(button.message)}>
                  {button.label}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VoiceflowChat;
