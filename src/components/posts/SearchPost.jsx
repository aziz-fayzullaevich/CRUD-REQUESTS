import { Input } from "@mantine/core";
import { useState } from "react";

export const SearchPost = ({ onSearch }) => {
    const [value, setValue] = useState('');

    const handleChange = e => {
        const val = e.currentTarget.value;
        setValue(val);
        onSearch(val);
    }

    return (
        <Input
            placeholder="Search posts..."
            value={value}
            onChange={handleChange}
            rightSectionPointerEvents="auto"
            rightSection={
                value !== '' ? <Input.ClearButton onClick={
                    () => {
                        setValue('')
                        onSearch('');
                    }
                } /> : undefined
            }
            size="md"
            w={"50%"}
            radius={20}
        />
    )
};