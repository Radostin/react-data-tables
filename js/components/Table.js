import TableHead from './TableHead.js';
import TableBody from './TableBody.js';

var Table = React.createClass({

    getInitialState: function () {

        this.getRemote();

        return {
            rows: [],
            columns: [],
            columnsOrder: []
        };
    },

    getRemote: function () {
        var url = this.props.remoteLocation;
        var type = this.props.remoteMethod;

        $.ajax({
            type: type,
            url: url,
            data: $('#ordercheck').serialize(),
            dataType: 'json',
            success: (result) =>
            {
                var columns = result.columns;
                var rows = result.rows;

                this.setState({rows, columns});
            }

        });

    },

    getColumnsOrder: function () {

        var columns = this.state.columns;

        var columnsOrder = [];

        for (var columnKey in columns) {
            columnsOrder.push((columns[columnKey]).key);
        }

        return columnsOrder;
    },

    render: function () {

        return (
            <div className="col-md-12">
                <h1 className="text-center">Table</h1>

                <table className="table">
                    <TableHead columns={this.state.columns} />
                    <TableBody
                        customCells={this.props.customCells}
                        columnsOrder={this.getColumnsOrder()}
                        columns={this.state.columns}
                        rows={this.state.rows} />
                </table>
            </div>
        );
    }

});

export default Table;