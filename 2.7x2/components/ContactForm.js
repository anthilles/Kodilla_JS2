var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <div className={'containercontactform'}>
          <form className={'contactform form-inline'} >
            <input className={'first'} type={'text'} placeholder={'Imię'} value={this.props.contact.firstName} />
            <input className={'sec'} type={'text'} placeholder={'Nazwisko'} value={this.props.contact.lastName} />
            <input className={'mail'} type={'text'} placeholder={'E-mal'} value={this.props.contact.email} />
            <button type={'submit'} className={'button'}>Dodaj</button>
          </form>
        </div>
      )
  },
})
