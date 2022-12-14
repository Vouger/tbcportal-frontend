import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";

function FormInput(props) {
    const { control } = useFormContext();
    const { name, label } = props;

    return (
        <Controller
            as={TextField}
            name={name}
            control={control}
            defaultValue=""
            label={label}
            {...props}
        />
    );
}

export default FormInput;

