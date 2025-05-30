import { ActionIcon, Box, Card, Flex, Text, Title } from "@mantine/core"
import { BiLike, BiDislike } from "react-icons/bi";
import { GrFormView } from "react-icons/gr";
import { HiArchiveBox, HiMiniPencilSquare } from "react-icons/hi2";

const CardItem = ({ id, title, body, reactions, views, deletePost, editPost }) => {
    return (
        <Card shadow='md' padding='lg' radius='lg' withBorder>
            <Title order={4} mb="xs" lineClamp={1}>{title}</Title>
            <Text size="sm" mb="md" lineClamp={5}>{body}</Text>

            <Flex justify="space-between" align="center" gap="lg">
                <Box>
                    <Flex gap={15}>
                        <Flex align="center" gap={5}>
                            <BiLike size={25} />
                            <Text size="sm">{reactions.likes}</Text>
                        </Flex>
                        <Flex align="center" gap={5}>
                            <BiDislike size={25} />
                            <Text size="sm">{reactions.dislikes}</Text>
                        </Flex>
                    </Flex>
                </Box>
                <Flex align="center" gap={2}>
                    <GrFormView size={30} />
                    <Text size="sm">{views}</Text>
                </Flex>
                <Flex align="center" gap={10}>
                    <ActionIcon onClick={() => editPost(id)} color="#eee">
                        <HiMiniPencilSquare size={25} color="gray" />
                    </ActionIcon>
                    <ActionIcon onClick={() => deletePost(id)} color="#eee">
                        <HiArchiveBox size={25} color="gray" />
                    </ActionIcon>
                </Flex>
            </Flex>
        </Card>

    )
}

export default CardItem;