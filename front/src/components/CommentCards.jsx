import { Card, Typography, Space, Modal, Button } from "antd";
import { EditOutlined, CommentOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useState } from 'react';
import "../styles/cardStyle.css";

const CommentCards = ({ company, showModal, open, setOpen, modalType }) => {

    const [loading, setLoading] = useState(false);
    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
    };
    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <Modal
            open={open}
            title={`Commentaires clients sur ${company.name}`}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Retour
                </Button>
            ]}
        >
            {company.comments.clientComments.map((comment, i) => {
                return (
                    <div style={{ borderBottom: "5px double rgb(22, 119, 255)" }}>
                        <p><strong>Posté par {comment.author}</strong></p>
                        <p>{comment.comment}</p>
                    </div>
                )
            })}

        </Modal>
    )




}

export default CommentCards;