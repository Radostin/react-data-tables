var CustomCell = React.createClass({

    render: function(){

        var row = this.props.row;

        return(
            <div>
                Yey it works <a className="btn btn-primary"
                href={'/user/'+row.name+'/deactivate'}>Deactivate</a>
            </div>
        );
    }

});


export default CustomCell;