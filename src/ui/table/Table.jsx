import { Table as TableM, TableScrollContainer } from "@mantine/core"

export const Table = ({ thead, rows }) => {

    return (
        <TableScrollContainer maxHeight={600}>
            <TableM highlightOnHover withTableBorder withColumnBorders>
                <TableM.Thead>
                    <TableM.Tr>
                        {thead.map((th, index) => (
                            <TableM.Th key={index}>{th}</TableM.Th>
                        ))}
                    </TableM.Tr>
                </TableM.Thead>
                <TableM.Tbody>
                    {rows}
                    <TableM.Tr></TableM.Tr>
                </TableM.Tbody>
            </TableM>
        </TableScrollContainer>
    )
}