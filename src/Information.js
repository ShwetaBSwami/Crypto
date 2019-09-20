import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import SocialMediaButtons from './SocialMediaButtons';
    
    
    
export default class Information extends Component {
    static propTypes = {
        prop: PropTypes
    }
    state={
        prev:false,
        open:false,
        buy:false,
        exchange:false,
        wallet:false,
        cryptocredit:false
    }
    handleClickBuy = () => {
        this.setState({prev : true, buy:true});
      };
      handleClickExchange = () => {
        this.setState({prev : true, exchange:true});
      };
      handleClickWallet = () => {
        this.setState({prev : true, wallet:true});
      };
      handleClickCryptoCredit = () => {
        this.setState({prev : true, cryptocredit:true});
      };
    handleClickAway = () => {
        this.setState({prev:false, buy:false, exchange:false,wallet:false});
      };
    
    render() {
        return (
            <div>
               <ClickAwayListener onClickAway={this.handleClickAway}>
        <div>
          <Button onClick={this.handleClickBuy}>Buy</Button>
          <Button onClick={this.handleClickExchange}>Exchange</Button>
          <Button onClick={this.handleClickWallet}>Wallet</Button>
          <Button onClick={this.handleClickCryptoCredit}>CryptoCredit</Button>

          {this.state.prev && this.state.buy ? (
            <Paper >
          
          Best Place to Buy Crypto<br/>
<a href="">Crypto.com Crypto.com - Buy 40+ coins at True Cost. No fees or markups.</a><br/>
Earn up to 8% p.a. on BTC, ETH, LTC, XRP + More. Now available in the US. Get App & Earn Now.
         
            </Paper>
          ) : null}

          {this.state.prev && this.state.exchange ? (
            <Paper >
   Exchange
<a href=""> OKEx.com </a>
World leading digital asset exchange, Top 1 by trading volume globally, including fiat-to-token trading, spot trading, and derivatives trading.

<a href="">Piexgo </a>
Trade cryptocurrencies in seconds, manage portfolios with ease, protect your assets with top notch security.

<a href=""> Gemini</a>: “Best Crypto Exchange” - Markets Choice Awards 
Trade 15+ Crypto Pairs with Premium Tools, Advanced Security & Insured Protection. Get Started For Free!
            </Paper>
          ) : null}

  {this.state.prev && this.state.wallet ? (
            <Paper >
          Wallet
<a href="">Guarda</a> 
Multi-currency, custody-free wallet
</Paper>
          ) : null}

          {this.state.prev && this.state.cryptocredit ?(
               <Paper >
                   Get an Instant Credit Line & Earn Interest
Nexo Nexo Wallet - Your Crypto Banking Account 
Instant loans by local bank transfer using your crypto as collateral without selling it. Earn up to 8% interest per year on your Stablecoins & EUR. $100M custodial insurance.

Crypto.com Crypto.com - Earn up to 8% p.a. on BTC, ETH, LTC, XRP + More. 
Now available in the US. Get App & Earn Now.
                   </Paper>
          ): null}
        </div>
      </ClickAwayListener>
      <i class="far fa-share-alt-square"></i>

    <SocialMediaButtons url="www.google.com" text="Check out this website: www.google.com"/>



      
            </div>
        )
    }
}
