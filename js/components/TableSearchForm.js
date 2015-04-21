var TableSearchForm = React.createClass({

    getInitialState: function () {
        return {
            keyword: ''
        };
    },


    onChangeKeyword: function (e) {

        var keyword = e.target.value;

        this.props.onTableSearch(keyword);

        this.setState({keyword});
    },


    render: function () {
        return (
            <div className="col-md-3 col-md-offset-9">
                <input value={this.state.keyword} onChange={this.onChangeKeyword} />
            </div>
        );
    }

});

export default TableSearchForm;