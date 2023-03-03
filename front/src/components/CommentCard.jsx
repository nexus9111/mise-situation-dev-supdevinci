import { Modal, Button } from "antd";
import "../styles/cardStyle.css";

const CommentCards = ({ comments, open, setOpen, commentType }) => {
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      title={`Commentaires ${commentType}`}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Retour
        </Button>,
      ]}
    >
      {comments.length > 0 ? (
        comments.map((comment) => {
          return (
            <div
              key={comment.id}
              style={{ borderBottom: "5px double rgb(22, 119, 255)" }}
            >
              <p>
                <strong>Posté par {comment.author}</strong>
              </p>
              <p>{comment.comment}</p>
            </div>
          );
        })
      ) : (
        <p>Aucun commentaire</p>
      )}
    </Modal>
  );
};

export default CommentCards;
