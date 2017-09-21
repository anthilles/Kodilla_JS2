var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter -1
        });
        {
            if(this.state.counter <= 0){
                this.setState({
                    counter: 0
                });
            }
        }
    },

    render: function() {
        return React.createElement(
            'h2',{},this.state.counter,
            React.createElement(
                'button',
                {onClick: this.increment},
                React.createElement('p', {}, 'Dodawanie ')
            ),
                React.createElement(
                'button',
                {onClick: this.decrement},
                React.createElement('p', {}, 'Odejmowanie ')
            )
        );
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));