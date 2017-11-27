// @flow
import React from 'react'
import { default as MuiButton } from 'material-ui/Button'
import { device } from 'device.js'

const Button = ({
  description,
  icon,
  onClick,
  active,
  disabled
}: {
  description: string,
  icon: any,
  active: boolean,
  disabled?: boolean,
  onClick: Function,
  description: string
}) => (
  <div className="ory-controls-mode-toggle-button">
    <div className="ory-controls-mode-toggle-button-inner">
      <MuiButton
        fab
        secondary={active}
        mini={device.mobile}
        onTouchTap={onClick}
        disabled={disabled}
      >
        {icon}
      </MuiButton>
    </div>
    <div className="ory-controls-mode-toggle-button-description">
      {description}
    </div>
  </div>
)

export default Button
