import React from 'react';
import RequestItem from './Request_Item';
import './Request.css';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';

function Request() {
  return (
    <div className="Request">
      <h2>Manage Requests</h2>
      <h3>Pending</h3>
      <div>
        <RequestItem
          status="Pending"
          icon={<PendingActionsIcon fontSize="large" />}
          id="1"
          date="01/24/2023"
          urgent="Medium Urgency"
        />
        <RequestItem
          status="Pending"
          icon={<PendingActionsIcon fontSize="large" />}
          id="2"
          date="01/24/2023"
          urgent="Medium Urgency"
        />
      </div>
      <h3>Approved</h3>
      <div>
        <RequestItem
          status="Accepted"
          icon={<AssignmentTurnedInOutlinedIcon fontSize="large" />}
          id="3"
          date="01/24/2023"
          urgent="Medium Urgency"
        />
        <RequestItem
          status="Accepted"
          icon={<AssignmentTurnedInOutlinedIcon fontSize="large" />}
          id="4"
          date="01/24/2023"
          urgent="Medium Urgency"
        />
        <RequestItem
          status="Accepted"
          icon={<AssignmentTurnedInOutlinedIcon fontSize="large" />}
          id="4"
          date="01/24/2023"
          urgent="Medium Urgency"
        />
        <RequestItem
          status="Accepted"
          icon={<AssignmentTurnedInOutlinedIcon fontSize="large" />}
          id="4"
          date="01/24/2023"
          urgent="Medium Urgency"
        />
      </div>
    </div>
  );
}

export default Request;
