import React, { useState } from 'react';
import CookieBot from 'react-cookiebot/lib/CookieBot';

const domainGroupId = process.env.REACT_APP_COOKIEBOT_DOMAIN_GROUP_ID;

const CookieBotWrapper = () => {
  const [hasCookieBot, setHasCookieBot] = useState(undefined);

  return (
    <div style={{ textAlign: 'center' }}>
      <CookieBot domainGroupId={domainGroupId} />
      <p>Click to test Cookiebot</p>
      <button onClick={() => setHasCookieBot(!!document.querySelector('#CookieBot'))}>TEST</button>
      <p style={{ color: 'red' }}>{hasCookieBot !== undefined && `Has CookieBot: ${JSON.stringify(hasCookieBot)}`}</p>
    </div>
  );
};

export default CookieBotWrapper;
