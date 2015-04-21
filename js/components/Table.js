import TableHead from './TableHead.js';
import TableBody from './TableBody.js';
import TableSearchForm from './TableSearchForm.js';

var Table = React.createClass({

    getInitialState: function () {

        this.getRemote();

        return {
            rows: [],
            columns: [],
            columnsOrder: []
        };
    },

    getRemote: function (query = {}) {
        var url = this.props.remoteLocation;
        var type = this.props.remoteMethod;

        $.ajax({
            type: type,
            url: url,
            data: query,
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

    onTableSearch: function(keyword){
        this.getRemote({keyword: keyword});
    },

    render: function () {

        return (
            <div className="col-md-12">
                <h1 className="text-center">Table</h1>

                <TableSearchForm onTableSearch={this.onTableSearch} />

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