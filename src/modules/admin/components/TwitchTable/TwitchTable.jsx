import React from "react";
import {useQuery} from "@apollo/client";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";

import queries from "@queries";
import TableActions from "modules/admin/components/TableActions/TableActions";

export default function TwitchTable() {
    const { loading, data } = useQuery(queries.twitch.GET_ADMIN);

    const handleEdit = (id) => {
        console.log('handleEdit', id)
    };

    const handleDelete = (id) => {
        console.log('handleDelete', id)
    };

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
                    {!loading && data && data.adminTwitch.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell align="right">{row.order}</TableCell>
                            <TableCell align="right">
                                <TableActions id={row.id} handleEdit={handleEdit} handleDelete={handleDelete} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}