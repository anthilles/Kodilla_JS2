var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className={'contactItem'}>
        <img className={'contactImage'} src={'http://images.meredith.com/content/dam/bhg/Images/2013/11/18/102171935.jpg'} />
        <p className={'contactlabel'}>
          {this.props.item.firstName}
        </p>
        <p className={'contactlabel'}>
          {this.props.item.lastName}
        </p>
        <a href={'mailto:' + this.props.item.email}>
          {this.props.item.email}
        </a>
      </div>
    )
  }
});
