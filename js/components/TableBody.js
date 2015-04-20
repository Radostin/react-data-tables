import TableRow from './TableRow.js';

var TableBody = React.createClass({

    render: function(){
        return(
            <tbody>
                <TableRow rows={this.props.rows} />
            </tbody>
        );
    }

});

export default TableBody;