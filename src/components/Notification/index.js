import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children, notificationType} = props
  console.log(children)

  return (
    <div className={`notification-container ${notificationType}`}>
      <div className="notification-content">{children}</div>
      <button type="button" className="close-button">
        <GrFormClose className="close-icon" />
      </button>
    </div>
  )
}

export default Notification
