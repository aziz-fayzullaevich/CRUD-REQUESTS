import { Button, Flex, Title } from "@mantine/core"
import { LoaderWithError } from "./LoaderWithError"
import { modals } from "@mantine/modals"

export const DeleteModal = ({ loading, error, onDelete }) => {
    return (
        <LoaderWithError isLoading={loading} error={error}>
            <Title size={22} mb={15}>
                Are you sure you want to delete?
            </Title>
            <Flex justify={"end"} gap={15}>
                <Button onClick={() => modals.closeAll()}>Back</Button>
                <Button color="red" onClick={onDelete}>Delete</Button>
            </Flex>
        </LoaderWithError>
    )
}