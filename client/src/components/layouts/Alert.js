import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const style = {
  'margin-top': '60px',
};

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div
      style={style}
      key={alert.id}
      className={`alert alert-${alert.alertType}`}
    >
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
