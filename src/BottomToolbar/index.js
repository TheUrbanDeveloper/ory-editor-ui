// @flow
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import React from 'react';

const styles = {
  paper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '900px',
    textAlign: 'center',
    background: 'transparent',
    border: 'transparent',
    overflow: 'visible',
    boxShadow: 'none',
    zIndex: 5
  }
}

const BottomToolbar = ({
  classes,
  open = false,
  children,
  className
}: {
  classes: Object,
  open?: boolean,
  children?: Object,
  className?: string
}) => (
  <MuiThemeProvider theme={createMuiTheme()}>
    <Drawer
      classes={{
        paper: classes.paper
      }}
      className={className}
      open={open}
      type={"permanent"}
      anchor={"bottom"}
    >
      <div
        style={{
          display: 'inline-block',
          border: `rgba(0, 0, 0, 0.87) 1px solid`,
          borderRadius: '4px 4px 0',
          backgroundColor: 'rgba(0, 0, 0, 0.87)',
          padding: '12px 24px'
        }}
      >
        {children}
      </div>
    </Drawer>
  </MuiThemeProvider>
)

export default withStyles(styles)(BottomToolbar);
