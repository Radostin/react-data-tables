import Table from './components/Table.js';
import TableHead from './components/TableHead.js';


var customCells = {
    action: function (row) {
        ;
    }
};

React.render(<Table
        remoteLocation="/source.php"
        customCells={customCells}
    />,

    document.getElementById('table'));

