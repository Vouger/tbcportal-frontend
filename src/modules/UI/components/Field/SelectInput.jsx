import { Controller } from "react-hook-form";
import {FormControl, InputLabel, Select} from "@material-ui/core";

const SelectInput = (props) => {
    const { name, label, control, defaultValue, children } = props;
    const labelId = `${name}-label`;

    return (
        <FormControl margin="normal" {...props}>
            <InputLabel id={labelId}>{label}</InputLabel>
            <Controller
                as={
                    <Select labelId={labelId} label={label}>
                        {children}
                    </Select>
                }
                name={name}
                control={control}
                defaultValue={defaultValue}
            />
        </FormControl>
    );
};
export default SelectInput;