import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Converter from '../converter/converter';
import './donationpage.css';
import location_logo from '../../img/location_logo.png';
import back_arrow from '../../img/back_arrow.png';

export type association = {
  association: {
    id: number,
    name: string,
    description: string,
  };
  handleAssociation: Function;
  quitPage: Function;
  userName: string;
};

export default class Donationpage extends React.Component<association, {}> {
  render() {
    return (
      <div className='donationPage'>
        <div className='header_association'>
          <h1 className='association_name'>{this.props.association.name}</h1>
          <Link className='quit' to='/' onClick={() => { this.props.quitPage(); }}>
            <img src={back_arrow} alt='back button' />
          </Link>
        </div>
        <div className='description_container'>
          <p className='association_description'>{this.props.association.description}</p>
        </div>
        <p className='title_converter'>Enter your donation to see how much can be deducted from your taxes</p>
        <div className='container_converter'>
          <div className='location'>
            <img src={location_logo} alt='location logo' />
            <p className='address'>3 rue de Metz 75010 Paris</p>
          </div>
          <Converter userName={this.props.userName} assoName={this.props.association.name} />
          <div className='donation_button_section'>
            <button type='button' className='give_donation'>Visit the site</button>
          </div>
        </div>
        <div className='how_to'>
          <section>
            <h2 className='how_to_title'>How does it work?</h2>
            <h3 className='title_information'>Donations to organizations of general interest or recognized as public utility</h3>
            <p className='how_to_text'>
              Donations entitle you to a tax reduction of 66% of the amount donated, up to a limit of 20% of taxable income. For example, a donation of €50 entitles you to a tax reduction of €33, a donation of €100 to a reduction of €66, and so on.
            </p>
            <h3 className='title_information'>Donations to organizations helping people in difficulty or victims of domestic violence</h3>
            <p className='how_to_text'>
              The tax reduction is 75% for a donation amounting to €1000 or less. The portion exceeding €1000 entitles you to a tax reduction of 66% of the donated amount.
            </p>
            <p className='how_to_text'>
              This tax reduction cannot exceed 20% of taxable income.
            </p>
          </section>
        </div>
      </div>
    );
  }
}
