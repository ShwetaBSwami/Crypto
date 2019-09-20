import { InputAdornment, IconButton, TextField } from '@material-ui/core';
import React, { Component } from 'react';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

class PasswordInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
            password: ''
        };
    }



    handleClickShowPassword = () => {
        this.setState((prevState) => ({
            showPassword: !prevState.showPassword,
        }));
    };
    handleChangePassword = (event) => {
      
      
        this.setState({ password:event.target.value })
        
    }

    render() {
        const {error,label} = this.props;

        return (
            <TextField
            {...error}
                value={this.state.password}
                onChange={this.handleChangePassword}
                type={this.state.showPassword ? 'text' : 'password'}
                label={label}
                value={this.state.password}
                placeholder="****************"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                           <IconButton
                                id="one"
                                aria-label="Toggle password visibilty"
                                onClick={this.handleClickShowPassword}
                            >
                                {this.state.showPassword ? (
                                    <Visibility />
                                ) : (
                                    <VisibilityOff />
                                )}
                            </IconButton>
                        </InputAdornment>
                    ),
                    inputProps: {
                        pattern: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
                    }
                }}
            />
        );
    }
}

export default PasswordInput;
