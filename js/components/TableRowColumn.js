var TableRowColumn = React.createClass({

    getCells: function(){

        var cellsToBeDisplayed = [];

        var cells = this.props.data;

        var customCells = this.props.customCells;

        var columns = this.props.columnsOrder;

        for (var columnIndex in columns) {

            let cellIndex = columns[columnIndex];

            let cell = cells[cellIndex];

            if (this.isCustomCell(customCells, cellIndex)) {

                let customComponent = customCells[cellIndex](cells);
                cellsToBeDisplayed.push(<td>{customComponent}</td>);

                continue;
            }

            cellsToBeDisplayed.push(<td>{cell}</td>);

        }

        return cellsToBeDisplayed;
    },

    render: function () {

        return (
            <tr>{this.getCells()}</tr>
        );
    },

    isCustomCell: function (customCells, cellIndex) {
        return typeof customCells[cellIndex] !== 'undefined';
    }

});

export default TableRowColumn;