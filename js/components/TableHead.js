var TableHead = React.createClass({

    displayColumn: function(column){

        var className = '';

        if(typeof column.class !== 'undefined'){
            className = column.class;
        }

        return <th className={className}>{column.title}</th>
    },

    render: function(){

        var allColumns = this.props.columns;

        var columns = [];

        for (var columnIndex in allColumns) {
            columns.push(this.displayColumn(allColumns[columnIndex]));
        }

        return(

            <thead>
                <tr>
                    { columns }
                </tr>
            </thead>

        );
    }

});

export default TableHead;