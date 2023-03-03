import { Modal, Button, notification, Input, Form, Select, Switch } from "antd";
import { useState } from "react";

import "../styles/cardStyle.css";

import apiHelper from "../services/apiSearchHelper";

const { TextArea } = Input;

const WriteCommentCard = ({ companyIdentifier, open, setOpen, type, reSearch, setReSearch }) => {
  const [workerComment, setWorkerComment] = useState(null);

  const handleCancel = () => {
    setOpen(false);
  };

  const onFinish = async (values) => {
    if (values.anonymous === undefined) {
      values.anonymous = false;
    }

    if (workerComment) {
      values.anonymous = true;
    }

    if (values.comment.length > 500 || values.comment.length < 10) {
        notification.open({
            message: "⚠️ Erreur",
            description: "Le commentaire doit faire entre 10 et 500 caractères",
            position: "topRight",
            });
        return;
    }

    await comment(companyIdentifier, values.comment, values.anonymous, workerComment);
    setOpen(false);
    setReSearch(!reSearch);

  };

  const comment = async (companyIdentifier, comment, anonymous, workerComment) => {
    try {
      await apiHelper.comment(companyIdentifier, comment, anonymous, workerComment);
    } catch (error) {
      notification.open({
        message: "⚠️ Erreur",
        description: "Une erreur est survenue",
        position: "topRight",
      });
    }
  };

  return (
    <Modal
      open={open}
      title={`Écrire un commentaire`}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Retour
        </Button>,
      ]}
    >
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item label="Type de commentaire" name={"type"}>
          <Select onChange={(value) => setWorkerComment(value)}>
            <Select.Option value={false}>Client</Select.Option>
            <Select.Option value={true}>Worker</Select.Option>
          </Select>
        </Form.Item>

        {workerComment != null && (
          <>
            {!workerComment && (
              <Form.Item
                label="Anonyme"
                name={"anonymous"}
                valuePropName="checked"
              >
                <Switch />
              </Form.Item>
            )}

            <Form.Item label="Commentaire" name={"comment"}>
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </>
        )}
      </Form>
    </Modal>
  );
};

export default WriteCommentCard;
