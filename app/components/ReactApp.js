/** @jsx React.DOM */

var React = require('react/addons');


var Griddle = React.createFactory(require('griddle-react'));

//pull in data
var fakeData = require('../data/fakeData.js').fakeData;
var columnMeta = require('../data/columnMeta.js').columnMeta;
var resultsPerPage = 200;


var ReactApp = React.createClass({

  componentDidMount : function() {
    console.log(fakeData)
  },

  render: function(){
    return(
      <div id="table-area">

      <Griddle results={fakeData}
      columnMetadata={columnMeta}
      resultsPerPage={resultsPerPage}
      tableClassName="table"/>

      </div>
    )

  }
});

//export, which is turned into a function with React.createFactory elsewhere
module.exports = ReactApp


