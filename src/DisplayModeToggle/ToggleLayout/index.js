// @flow
import React from 'react'
import ViewQuiltIcon from 'material-ui-icons/ViewQuilt'
import Button from '../Button'

import { connect } from 'react-redux'

import { layoutMode } from 'ory-editor-core/lib/actions/display'
import { isLayoutMode } from 'ory-editor-core/lib/selector/display'
import { createStructuredSelector } from 'reselect'

const Inner = ({
  isLayoutMode,
  layoutMode
}: {
  isLayoutMode: boolean,
  layoutMode: Function
}) => (
  <Button
    icon={<ViewQuiltIcon />}
    description="Move things"
    active={isLayoutMode}
    onClick={layoutMode}
  />
)

const mapStateToProps = createStructuredSelector({ isLayoutMode })
const mapDispatchToProps = { layoutMode }

export default connect(mapStateToProps, mapDispatchToProps)(Inner)
