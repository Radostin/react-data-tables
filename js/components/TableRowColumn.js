var TableRowColumn = React.createClass({

    render: function(){
        var allColumns = this.props.row;

        var columns = [];

        for (var columnIndex in allColumns) {
            columns.push(<td>{allColumns[columnIndex]}</td>);
        }

        return(
            <tr>{columns}</tr>
        );
    }

});

export default TableRowColumn;