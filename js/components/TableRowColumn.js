var TableRowColumn = React.createClass({

    render: function () {

        var customCells = this.props.customCells;

        var allColumns = this.props.row;

        var columns = [];

        console.log(customCells);

        for (var columnIndex in allColumns) {
            //if there's a custom cell define, we will trigger it.
            let column = allColumns[columnIndex];
            if (typeof customCells[columnIndex] !== 'undefined') {
                columns.push(customCells[columnIndex](column));
            } else {
                columns.push(<td>{column}</td>);
            }
            
        }

        console.log(columns);

        return (
            <tr>{columns}</tr>
        );
    }

});

export default TableRowColumn;