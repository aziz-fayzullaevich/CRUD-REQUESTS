import { ActionIcon, Flex, InputDescription, Stack } from "@mantine/core"
import { BiLike } from "react-icons/bi"
import { HiArchiveBox, HiMiniPencilSquare } from "react-icons/hi2"

export const CommentsBlock = ({ body, postId, likes }) => {
    return (
        <Stack bg={'#eaeaea'} p={10} style={{
            borderRadius: '10px'
        }}>
            <Flex align={'center'} gap={10} justify={'space-between'} >
                <Flex align={'center'} gap={10} justify={'space-between'}>
                    <span style={{
                        fontSize: '14px',
                        color: 'gray'
                    }}>PostID: {postId}</span>
                    <Flex align={'center'} gap={10} justify={'space-between'} ml={40}>
                        <BiLike size={25} />
                        <span style={{
                            fontWeight: 'bold'
                        }}>{[likes]}</span>
                    </Flex>
                </Flex>
                <InputDescription size="22">{body}</InputDescription>
                <Flex align="center" gap={10}>
                    <ActionIcon color="#eee" size={40}>
                        <HiMiniPencilSquare size={25} color="#7095ff" />
                    </ActionIcon>
                    <ActionIcon color="#eee" size={40}>
                        <HiArchiveBox size={25} color="#7095ff" />
                    </ActionIcon>
                </Flex>
            </Flex>
        </Stack>
    )
}