import React, { PureComponent } from 'react';

import { withRouter } from 'react-router-dom';
import PasswordInput from './PasswordInput';
import { connect } from 'react-redux';
import { Typography, Button, CssBaseline, TextField, MuiThemeProvider, Popover, Grid } from '@material-ui/core';


class Signup extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailError:'',
            passwordError:'',
            passwordStatus:''
        
        };
    }
emailField = (e) =>{
   
    console.log("e in emailfield",e.target.value)
    this.setState({email:e.target.value})
}
validateEmail = () => {
    const { email } = this.state;
    const regexEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    this.setState({
        emailError:regexEmail.test(email) ? null : 'Enter valid email',
     
    })
}

handleChangePassword = (password) => {
    this.setState({ password }, () => {
        this.validatePassword();
    });
}

validatePassword = () => {
    const { password } = this.state;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&*()._*])(?=.{8,})/;
    this.setState({
        passwordError:
            regexPassword.test(password) ? null : "enter password",
       
})
}

    render() {
        const emailBorder = this.state.emailError ? { error: true } : {};

        const passwordBorder = this.state.passwordError ? { error: true } : {};

        return (
            <main className="main">

                <CssBaseline />
                <div className="signup_section">
                    {/* <Paper className="paper} > */}
                    <Typography component="title" variant="h4" className="welcome-title">
                        Welcome
                    </Typography>
                  
                      
                            <TextField
                            
                                id="outlined-email-input"
                                label="Email"
                               
                                // className={`${emailError ? 'is-invalid' : ''}`}
                                type="email"
                                name="email"
                                // autoComplete="email"
                                margin="normal"
                                value={this.state.email}
                                variant="outlined"
                                placeholder=""
                                onBlur={this.validateEmail}

                                onChange={(e)=>this.emailField(e)}
                               
                            />
                        {this.state.emailError && <div className="error">{this.state.emailError}</div>}

                           <PasswordInput
                            error={passwordBorder}
                            handleChangePassword={this.handleChangePassword}
                            onKeyUp={this.check}
                           
                           
                           />
                    {this.state.passwordError && <div className="error">{this.state.passwordError}</div>}

                            <Grid container>
                                <Grid item xs={12} className="PasswordStrengthWrapper">
                                 
                                    <Popover
                                        id="simple-popper"
                                       
                                        
                                     
                                        className="popupForm"
                                    >
                                    </Popover>
                                </Grid>
                           
                            </Grid>


                            <Button
                               
                            
                                type="button"
                               
                                variant="contained"
                               
                            >
                              Nextt
                            </Button>
                       
                </div>

            </main>
        );
    }
}



export default withRouter(Signup);
