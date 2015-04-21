import TableRowColumn from './TableRowColumn.js';

var TableBody = React.createClass({

    render: function(){

        var allRows = this.props.rows;

        var rows = [];

        for (var rowIndex in allRows) {
            rows.push(<TableRowColumn
                customCells={this.props.customCells}
                columnsOrder={this.props.columnsOrder}
                columns={this.props.columns}
                row={allRows[rowIndex]} />);
        }

        return(
            <tbody>
                {rows}
            </tbody>
        );
    }

});

export default TableBody;