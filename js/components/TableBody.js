import TableRowColumn from './TableRowColumn.js';

var TableBody = React.createClass({

    render: function(){

        var data = this.props.data;

        var rows = [];

        for (var rowIndex in data) {
            rows.push(<TableRowColumn
                customCells={this.props.customCells}
                columnsOrder={this.props.columnsOrder}
                columns={this.props.columns}
                data={data[rowIndex]} />);
        }

        return(
            <tbody>
                {rows}
            </tbody>
        );
    }

});

export default TableBody;