import TableHead from './TableHead.js';
import TableBody from './TableBody.js';

var Table = React.createClass({

    getInitialState: function () {

        this.getRemote();

        return {
            rows: [],
            columns: []
        };
    },

    getRemote: function () {
        var url = this.props.remoteLocation;

        $.get(url, (result) => {
            var columns = result.columns;
            var rows = result.rows;
            this.setState({rows, columns});
        });

    },

    render: function () {

        return (
            <div className="col-md-12">
                <h1 className="text-center">Table</h1>

                <table>
                    <TableHead columns={this.state.columns} />

                    <TableBody rows={this.state.rows} />
                </table>

            </div>
        );
    }

});

export default Table;