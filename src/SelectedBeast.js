import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  render() {
    return (
      <>

        <Modal show={this.state.showModal} onHide={this.handleOnHide}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.Title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>{this.state.image_url}</Modal.Body>
          <Modal.Footer>{this.state.description}</Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default SelectedBeast;