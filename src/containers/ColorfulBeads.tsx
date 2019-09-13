import { connect } from 'react-redux';

import ColorfulBeads from '../components/ColorfulBeads';

interface StateProps {
  count: number;
}

const mapStateToProps = (state: StateProps) => ({
  count: state.count,
});

export default connect(mapStateToProps)(ColorfulBeads);
