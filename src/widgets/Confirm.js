import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title || '';
    this.text = props.text || '';
    this.confirmText = props.confirmButtonText || 'Ok';
    this.cancelText = props.cancelButtonText || 'Cancel';
    this.confirmFn = props.confirmFn;
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.confirmHandler = this.confirmHandler.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  async confirmHandler() {
    if (this.confirmFn) {
      await this.confirmFn();
    }
    this.toggle();
  }

  render() {
    return (
      <div>
        <Button outline size="sm" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{this.title}</ModalHeader>
          <ModalBody>{this.text}</ModalBody>
          <ModalFooter className="bottom-block">
            <Button outline size="sm" onClick={this.confirmHandler}>
              {this.confirmText}
            </Button>
            &nbsp;
            <Button outline size="sm" color="secondary" onClick={this.toggle}>
              {this.cancelText}
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Confirm;
