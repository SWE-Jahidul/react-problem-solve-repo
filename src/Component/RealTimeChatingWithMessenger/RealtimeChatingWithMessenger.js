import React from "react";

import MessengerCustomerChat from "react-messenger-customer-chat";

const RealtimeChatingWithMessenger = () => {
  return (
    <div>
      <MessengerCustomerChat
        pageId="108620618048890"
        appId="599220651113692"
        htmlRef="https://nostalgic-heisenberg-ecd429.netlify.app/"
      />
      {/* , document.getElementById('demo') */}
    </div>
  );
};

export default RealtimeChatingWithMessenger;
