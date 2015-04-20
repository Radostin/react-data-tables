(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _Table = require('./components/Table.js');

var _Table2 = _interopRequireWildcard(_Table);

var _TableHead = require('./components/TableHead.js');

var _TableHead2 = _interopRequireWildcard(_TableHead);

var customCells = {
    action: function action(row) {
        return '<td><h1>It Works</h1></td>';
    }
};

React.render(React.createElement(_Table2['default'], {
    remoteLocation: '/source.php',
    customCells: customCells
}), document.getElementById('table'));

},{"./components/Table.js":2,"./components/TableHead.js":4}],2:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _TableHead = require('./TableHead.js');

var _TableHead2 = _interopRequireWildcard(_TableHead);

var _TableBody = require('./TableBody.js');

var _TableBody2 = _interopRequireWildcard(_TableBody);

var Table = React.createClass({
    displayName: 'Table',

    getInitialState: function getInitialState() {

        this.getRemote();

        return {
            rows: [],
            columns: []
        };
    },

    getRemote: function getRemote() {
        var _this = this;

        var url = this.props.remoteLocation;

        $.get(url, function (result) {
            var columns = result.columns;
            var rows = result.rows;
            _this.setState({ rows: rows, columns: columns });
        });
    },

    render: function render() {

        return React.createElement(
            'div',
            { className: 'col-md-12' },
            React.createElement(
                'h1',
                { className: 'text-center' },
                'Table'
            ),
            React.createElement(
                'table',
                { className: 'table' },
                React.createElement(_TableHead2['default'], { columns: this.state.columns }),
                React.createElement(_TableBody2['default'], {
                    customCells: this.props.customCells,
                    rows: this.state.rows })
            )
        );
    }

});

exports['default'] = Table;
module.exports = exports['default'];

},{"./TableBody.js":3,"./TableHead.js":4}],3:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _TableRowColumn = require('./TableRowColumn.js');

var _TableRowColumn2 = _interopRequireWildcard(_TableRowColumn);

var TableBody = React.createClass({
    displayName: 'TableBody',

    render: function render() {

        var allRows = this.props.rows;

        var rows = [];

        for (var rowIndex in allRows) {
            rows.push(React.createElement(_TableRowColumn2['default'], {
                customCells: this.props.customCells,
                row: allRows[rowIndex] }));
        }

        return React.createElement(
            'tbody',
            null,
            rows
        );
    }

});

exports['default'] = TableBody;
module.exports = exports['default'];

},{"./TableRowColumn.js":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var TableHead = React.createClass({
    displayName: 'TableHead',

    displayColumn: function displayColumn(column) {

        var className = '';

        if (typeof column['class'] !== 'undefined') {
            className = column['class'];
        }

        return React.createElement(
            'th',
            { className: className },
            column.title
        );
    },

    render: function render() {

        var allColumns = this.props.columns;

        var columns = [];

        for (var columnIndex in allColumns) {
            columns.push(this.displayColumn(allColumns[columnIndex]));
        }

        return React.createElement(
            'thead',
            null,
            React.createElement(
                'tr',
                null,
                columns
            )
        );
    }

});

exports['default'] = TableHead;
module.exports = exports['default'];

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var TableRowColumn = React.createClass({
    displayName: 'TableRowColumn',

    render: function render() {

        var customCells = this.props.customCells;

        var allColumns = this.props.row;

        var columns = [];

        console.log(customCells);

        for (var columnIndex in allColumns) {
            //if there's a custom cell define, we will trigger it.
            var column = allColumns[columnIndex];
            if (typeof customCells[columnIndex] !== 'undefined') {
                columns.push(customCells[columnIndex](column));
            } else {
                columns.push(React.createElement(
                    'td',
                    null,
                    column
                ));
            }
        }

        console.log(columns);

        return React.createElement(
            'tr',
            null,
            columns
        );
    }

});

exports['default'] = TableRowColumn;
module.exports = exports['default'];

},{}]},{},[1]);
