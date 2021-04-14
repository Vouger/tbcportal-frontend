import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";

import TableActions from "modules/admin/components/TableActions/TableActions";

export default function TwitchTable(props) {
    const {data, handleDelete} = props;

    return (
        <TableContainer color='secondary'>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Order</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.adminTwitch.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell align="right">{row.order}</TableCell>
                            <TableCell align="right">
                                <TableActions id={row.id} handleDelete={handleDelete} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}