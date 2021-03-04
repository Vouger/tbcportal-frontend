import React, {useState} from "react";
import { useFormContext, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import {IconButton, InputAdornment} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";

function PasswordInput (props) {
    const [showPassword, setShowPassword] = useState(false);
    const { control } = useFormContext();
    const { name, label } = props;

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Controller
            as={TextField}
            name={name}
            control={control}
            defaultValue=""
            label={label}
            fullWidth={true}
            type={showPassword ? 'text' : 'password'}
            InputProps={{
                endAdornment :
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
            }}
            {...props}
        />
    );
}

export default PasswordInput;

