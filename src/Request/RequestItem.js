import React, { useState } from 'react';
import Requeststatus from './RequestStatus';
import Requestinfo from './RequestInfo';
import Service from './Service';
import Requestby from './Request_by';
import Approve from './Approve';
import './RequestItem.css';

function Request_Item({ status, icon, id, date, urgent }) {
  const [active, setActive] = useState(false);
  return (
    <div
      className="Request_Item"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <Requeststatus
        status={status}
        icon={icon}
      />
      <Requestinfo
        id={id}
        date={date}
        urgent={urgent}
      />
      <Service />
      <Requestby />
      <Approve
        active={active}
        status={status}
      />
    </div>
  );
}

export default Request_Item;
