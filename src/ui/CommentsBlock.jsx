import { ActionIcon, Flex, InputDescription, Stack } from "@mantine/core"
import { BiLike } from "react-icons/bi"
import { HiArchiveBox, HiMiniPencilSquare } from "react-icons/hi2"

export const CommentsBlock = ({ body, postId, likes, id, deleteComment, editComment }) => {
    return (
        <Stack bg={'blue'} p={10} style={{
            borderRadius: '10px'
        }}>
            <Flex align={'center'} gap={10} justify={'space-between'} >
                <Flex align={'center'} gap={10} justify={'space-between'}>
                    <span style={{
                        fontSize: '14px',
                        color: '#fff'
                    }}>PostID: {postId}</span>
                    <Flex align={'center'} gap={5} justify={'space-between'} ml={40}>
                        <BiLike size={25} color="#fff" />
                        <span style={{
                            fontWeight: 'bold',
                            color: '#fff'
                        }}>{[likes]}</span>
                    </Flex>
                </Flex>
                <InputDescription size="22" style={{ color: '#fff', fontWeight: 'bold' }}>{body}</InputDescription>
                <Flex align="center" gap={10}>
                    <ActionIcon color="#eee" size={40} onClick={() => editComment(id)}>
                        <HiMiniPencilSquare size={25} color="#228be6" />
                    </ActionIcon>
                    <ActionIcon color="#eee" size={40} onClick={() => deleteComment(id)}>
                        <HiArchiveBox size={25} color="#228be6" />
                    </ActionIcon>
                </Flex>
            </Flex>
        </Stack>
    )
}