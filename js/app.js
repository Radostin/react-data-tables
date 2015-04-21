import Table from './components/Table.js';
import TableHead from './components/TableHead.js';
import CustomCell from './components/CustomCell.js';


var customCells = {
    action: function (row) {
        return ( <CustomCell row={row} /> )
    },
    link: function (row) {
        return ( <a href={'/users/'+row.country} >{row.country}</a>)
    }
};

React.render(<Table
        remoteLocation="/source.php"
        remoteMethod="GET"
        customCells={customCells}
    />,

    document.getElementById('table'));

