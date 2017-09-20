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
    },

    render: function() {
        return {},
        <h2 className={'licznik'}>
        {this.state.counter}
        <button className={'dodawanie'}
            onClick={this.increment}>
            <p className={'dodawanie'}>
                Dodawanie
            </p>
        </button>
        <button className={'odejmowanie'}
            onClick={this.decrement}>
            <p className={'odejmowanie'}>
                Odejmowanie
            </p>
        </button>
        </h2>
    }
});

var element = React.createElement(Counter);

ReactDOM.render(element, document.getElementById('app'));