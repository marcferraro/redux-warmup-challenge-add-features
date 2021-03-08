import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
// import * as actions from '../actions';

const MuseumPicker = ({props, filterByMuseum}) => {
  return (
    <div className="row">
      <div className="ui menu">
        <div onClick={() => filterByMuseum("")} className="active item">All Museums</div>
        <div onClick={() => filterByMuseum("National Gallery of Art, Washington D.C.")} className="item">National Gallery of Art, Washington D.C.</div>
      </div>
    </div>
  );
};

export default connect(null, actions)(MuseumPicker);