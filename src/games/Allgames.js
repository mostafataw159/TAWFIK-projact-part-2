
import React, { Component } from 'react'
import Header from '../Header'
import Pageheader from './Pageheader'
import FooterG from './FooterG'
import Api from './Api';
import ScrollToTop from 'react-scroll-to-top';


export class Allgames extends Component {
    render() {
        return (
            <div>
                <Header />
                <Pageheader />
                <Api />
                <FooterG />
             
            </div>
        );
    }
}

export default Allgames