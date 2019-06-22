import React, { Component } from 'react';
import ReactDOM, { Component } from 'react-dom';
import { render } from 'react-dom';
import './style.scss';

const data = [
  {
    title: 'Basic form with name and age info',
    clas: 'NameAgeForm'
  },
  {
    title: 'Form with email and pay info',
    clas: 'EmailSalaryForm'
  },
  {
    title: 'Final Output',
    clas: 'result'
  }
]

class Accordion extends React.Component {
  render () {
    return (
      <div {...{ className: 'wrapper' }}>
        <ul {...{ className: 'accordion-list' }}>
          {data.map((data, key) => {
            return (
              <li {...{ className: 'accordion-list__item', key }}>
                <AccordionItem {...data} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

class AccordionItem extends React.Component {
  state = {
    opened: false
  }
  
  render () {
    const {
      props: {
        title,
        clas
      },
      state: {
        opened
      }
    } = this
    
    return (
      <div
        {...{
          className: `accordion-item, ${opened && 'accordion-item--opened'}`,
          onClick: () => { this.setState({ opened: !opened }) }
        }}
      >
        <div {...{ className: 'accordion-item__line' }}>
          <h3 {...{ className: 'accordion-item__title' }}>
            {title}
          </h3>
          <span {...{ className: 'accordion-item__icon' }}/>
        </div>
          <div {...{ className: 'accordion-item__inner' }}>
            <div {...{ className: 'accordion-item__content' }}>
              <p {...{ className: 'accordion-item__paragraph' }}>
                <FormClass form={clas} />
              </p>
            </div>
          </div>
      </div>
    )
  }
}

class FormClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({value: this.state.value + ' ' + event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const {
      props: {
        form
      }
    } = this

    const formToRender = this.props.form;

    if (formToRender == 'NameAgeForm') {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Full Name:
            <input
              name="fullName"
              type="text"
              checked={this.state.fullName}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Age:
            <input
              name="age"
              type="text"
              checked={this.state.age}
              onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              name="email"
              type="text"
              checked={this.state.email}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Salary $:
            <input
              name="salary"
              type="text"
              checked={this.state.salary}
              onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
}

ReactDOM.render(<Accordion />, document.getElementById('root'));