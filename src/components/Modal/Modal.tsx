import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Modal.css";
import { useSelector } from "react-redux";
import { SignupSelector } from "../../redux/reducers/signupReducer";
import { UserInfoSelector } from "../../redux/reducers/userInfoReducer";

function UserInfoModal({ show, setShow }: any) {
  const onClose = () => setShow(false);

  const userPhone = useSelector(SignupSelector.getPhone);
  const userEmail = useSelector(SignupSelector.getEmail);
  const firstName = useSelector(UserInfoSelector.getFirstName);
  const lastName = useSelector(UserInfoSelector.getLastName);
  const sex = useSelector(UserInfoSelector.getSex);
  const birthday = useSelector(UserInfoSelector.getBirthday);
  const ocean = useSelector(UserInfoSelector.getOcean);
  const hobby = useSelector(UserInfoSelector.getHobby);

  return (
    <Modal show={show} onHide={onClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>User Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="table">
          <tbody>
            <tr>
              <td className="item">Name</td>
              <td className="value">{`${firstName + " " + lastName}`}</td>
            </tr>
            <tr>
              <td className="item">Sex</td>
              <td>{`${sex}`}</td>
            </tr>
            <tr>
              <td className="item">Birthday</td>
              <td>{`${birthday}`}</td>
            </tr>
            <tr>
              <td className="item">Email</td>
              <td>{`${userEmail}`}</td>
            </tr>
            <tr>
              <td className="item">Phone</td>
              <td>{`${userPhone}`}</td>
            </tr>
            <tr>
              <td className="item">Favorite ocean</td>
              <td>{`${ocean}`}</td>
            </tr>
            <tr>
              <td className="item">Hobby</td>
              <td>{`${hobby}`}</td>
            </tr>
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UserInfoModal;
