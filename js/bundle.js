(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _Table = require('./components/Table.js');

var _Table2 = _interopRequireWildcard(_Table);

var _TableHead = require('./components/TableHead.js');

var _TableHead2 = _interopRequireWildcard(_TableHead);

var _CustomCell = require('./components/CustomCell.js');

var _CustomCell2 = _interopRequireWildcard(_CustomCell);

var customCells = {
    action: function action(row) {
        return React.createElement(_CustomCell2['default'], { row: row });
    },
    link: function link(row) {
        return React.createElement(
            'a',
            { href: '/users/' + row.country },
            row.country
        );
    }
};

React.render(React.createElement(_Table2['default'], {
    remoteLocation: '/source.php',
    remoteMethod: 'GET',
    customCells: customCells
}), document.getElementById('table'));

},{"./components/CustomCell.js":2,"./components/Table.js":3,"./components/TableHead.js":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var CustomCell = React.createClass({
    displayName: 'CustomCell',

    render: function render() {

        var row = this.props.row;

        return React.createElement(
            'div',
            null,
            'Yey it works ',
            React.createElement(
                'a',
                { className: 'btn btn-primary',
                    href: '/user/' + row.name + '/deactivate' },
                'Deactivate'
            )
        );
    }

});

exports['default'] = CustomCell;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
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
            columns: [],
            columnsOrder: []
        };
    },

    getRemote: function getRemote() {
        var _this = this;

        var url = this.props.remoteLocation;
        var type = this.props.remoteMethod;

        $.ajax({
            type: type,
            url: url,
            data: $('#ordercheck').serialize(),
            dataType: 'json',
            success: function success(result) {
                var columns = result.columns;
                var rows = result.rows;

                _this.setState({ rows: rows, columns: columns });
            }

        });
    },

    getColumnsOrder: function getColumnsOrder() {

        var columns = this.state.columns;

        var columnsOrder = [];

        for (var columnKey in columns) {
            columnsOrder.push(columns[columnKey].key);
        }

        return columnsOrder;
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
                    columnsOrder: this.getColumnsOrder(),
                    columns: this.state.columns,
                    rows: this.state.rows })
            )
        );
    }

});

exports['default'] = Table;
module.exports = exports['default'];

},{"./TableBody.js":4,"./TableHead.js":5}],4:[function(require,module,exports){
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
                columnsOrder: this.props.columnsOrder,
                columns: this.props.columns,
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

},{"./TableRowColumn.js":6}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var TableHead = React.createClass({
    displayName: 'TableHead',

    getColumnClass: function getColumnClass(column) {
        var className = '';

        if (typeof column['class'] !== 'undefined') {
            className = column['class'];
        }
        return className;
    },

    displayColumn: function displayColumn(column) {

        var className = this.getColumnClass(column);
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

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var TableRowColumn = React.createClass({
    displayName: 'TableRowColumn',

    getCells: function getCells() {

        var cellsToBeDisplayed = [];

        var cells = this.props.row;

        var customCells = this.props.customCells;

        var columns = this.props.columnsOrder;

        for (var columnIndex in columns) {

            var cellIndex = columns[columnIndex];

            var cell = cells[cellIndex];

            if (this.isCustomCell(customCells, cellIndex)) {

                var customComponent = customCells[cellIndex](cells);
                cellsToBeDisplayed.push(React.createElement(
                    'td',
                    null,
                    customComponent
                ));

                continue;
            }

            cellsToBeDisplayed.push(React.createElement(
                'td',
                null,
                cell
            ));
        }

        return cellsToBeDisplayed;
    },

    render: function render() {

        return React.createElement(
            'tr',
            null,
            this.getCells()
        );
    },

    isCustomCell: function isCustomCell(customCells, cellIndex) {
        return typeof customCells[cellIndex] !== 'undefined';
    }

});

exports['default'] = TableRowColumn;
module.exports = exports['default'];

},{}]},{},[1]);
