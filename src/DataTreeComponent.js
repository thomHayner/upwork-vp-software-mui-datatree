import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';
import styled from 'styled-components';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';
import { useSpring, animated } from 'react-spring';

//// [START: BULLET POINT SUBCOMPONENTS] ////
// DEVNOTE: These SvgIcons can be swapped for @material-ui/icons depending on how the overall project is set up
function MinusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function CloseSquare(props) {
  return (
    <SvgIcon className="close" fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
    </SvgIcon>
  );
}

function TransitionComponent(props) {
  const style = useSpring({
    from: { opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: { opacity: props.in ? 1 : 0, transform: `translate3d(${props.in ? 0 : 20}px,0,0)` },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

TransitionComponent.propTypes = {
  // DEVNOTE: Show the component; triggers the enter or exit states
  in: PropTypes.bool,
};
//// [END: BULLET POINT SUBCOMPONENTS] ////

//// [START: CORE SUBCOMPONENTS] ////
// DEVNOTE: No styles applied, no functionality applied, this just checks and unchecks
const StyledCheckbox = styled((props) => <Checkbox {...props} />)``;

// DEVNOTE: .MuiTreeItem-group 'border-left color' is set to white, since my repo just uses basic react style
const StyledTreeItem = styled((props) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} />
))`
  & .MuiTreeItem-iconContainer {
    & .close {
      opacity: 0.3;
    };
  };
  & .MuiTreeItem-group {
    margin-left: 7px;
    padding-left: 18px;
    border-left: 1px dashed rgba(255, 255, 255, 0.4);
  };
`;

const StyledTreeView = styled((props) => (
  <TreeView
    defaultExpanded={['1']}
    defaultCollapseIcon={<MinusSquare />}
    defaultExpandIcon={<PlusSquare />}
    defaultEndIcon={<CloseSquare />}
  >
    {/* DEVNOTE: This is mapped here to comply with the provided data structure. */}
    {props.data.map(a=> renderTree(a))}
  </TreeView>
))`
  flex-grow: 1;
`;

StyledTreeView.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      channels: PropTypes.array
    })
  )
};
//// [END: CORE SUBCOMPONENTS] ////

//// [START: RENDER METHOD] ////
function renderTree(nodes) {

  return (
    <StyledTreeItem
      key={nodes.id}
      nodeId={nodes.id}
      label={
        <div>
          <FormControlLabel control={<StyledCheckbox />} />
          {nodes.label}
        </div>
      }
    >
      {Array.isArray(nodes.channels) ? nodes.channels.map((node) => renderTree(node)) : null}
    </StyledTreeItem>
  )
};
//// [END: RENDER METHOD] ////

export default function DataTreeComponent({ data }) {
  return (
    <StyledTreeView data={data} />
  )
};
