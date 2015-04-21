var TableSearchForm = React.createClass({

    getInitialState: function(){
        return {
            keyword: ''
        };
    },

    onChangeKeyword: function(e){
        this.state.keyword = e.target.value;
    },

    render: function(){
        return(
            <div>
                <input value={this.state.keyword} onChange={this.onChangeKeyword()} />
            </div>
        );
    }

});

export default TableSearchForm;