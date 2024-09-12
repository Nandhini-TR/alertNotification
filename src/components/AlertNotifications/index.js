import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="alert-notifications-container">
    <h1 className="heading">Alert Notifications</h1>

    {/* Success Notification */}
    <Notification notificationType="success">
      <AiFillCheckCircle className="icon" />
      <div className="text-content">
        <h1 className="notification-heading">Success</h1>
        <p className="notification-description">
          You can access all the files in the folder.
        </p>
      </div>
    </Notification>

    {/* Error Notification */}
    <Notification notificationType="error">
      <RiErrorWarningFill className="icon error-icon" />
      <div className="text-content">
        <h1 className="notification-heading">Error</h1>
        <p className="notification-description">
          Sorry, you are not authorized to have access to delete the file.
        </p>
      </div>
    </Notification>

    {/* Warning Notification */}
    <Notification notificationType="warning">
      <MdWarning className="icon warning-icon" />
      <div className="text-content">
        <h1 className="notification-heading">Warning</h1>
        <p className="notification-description">
          Viewers of this file can see comments and suggestions.
        </p>
      </div>
    </Notification>

    {/* Info Notification */}
    <Notification notificationType="info">
      <MdInfo className="icon info-icon" />
      <div className="text-content">
        <h1 className="notification-heading">Info</h1>
        <p className="notification-description">
          Anyone on the internet can view these files.
        </p>
      </div>
    </Notification>
  </div>
)

export default AlertNotifications
