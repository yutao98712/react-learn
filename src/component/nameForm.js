import React, {
  Component
} from 'react';

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isGoing: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox'? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was sbumitted:' + this.state.value + this.state.isGoing);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="value" type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <label>
          Is going:
          <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default NameForm;