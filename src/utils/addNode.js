import { Data } from "../data/data"

export function addNode(node, newCommentText) {
    if(node.id == Data.id){
        node.hasReplies = true
        var temp = [...node.replies, {
                    "id": Date().now,
                    "name": "Temp",
                    "pic": "",
                    "comment": newCommentText,
                    "hasReplies": false,
                    "replies": []
                }]
        node.replies = temp
        return
    }
    node.replies.forEach(child => {
        addNode(child, newCommentText)
    });
}