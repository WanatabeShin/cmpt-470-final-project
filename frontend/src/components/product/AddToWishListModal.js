import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RequestServer from '../../requests/RequestServer';

export default class AddToWishListModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
            addSuccess: false,
            title : ''
        }
    }
    addResponseHandler(response) {
    //   console.log((response.status === 204))
    //   if (response.status === 404 || response.status === 400) {
    //     var errorMessage = [];
    //     for (const [key, value] of Object.entries(response)) {
    //         // console.log(`${key}: ${value}`);
    //       errorMessage += value;
    //     }
    //     console.log('response: ' + response)
        
    //     this.setState({
    //         error: true,
    //         errorMsg: errorMessage
    //     }) 
    //   }

    //   else if (response.status === 204){
    //     return true;
    //   }
    }
    
    addHandler = async(event) => {

        event.preventDefault()
            console.log("Pressed add button...");

            //Show the Modal Dialog
            this.setState({
               show: true
            })
            var token = localStorage.getItem('token');
            var response = await RequestServer.addWishlistProduct(token, this.props.id)

            if (response !== null) {
                this.setState({
                    show: false
                })
                alert("Product Added Successfully")
                window.location.reload()
            }
            else {
                alert("Failed to Add. Probably the product has already been added")

            }
        // event.preventDefault()
        // console.log("Pressed deleted button...");
        
        // //Show the Modal Dialog
        // this.setState({
        //   show: true
        // })
        // var token = localStorage.getItem('token');
        // var response = await RequestServer.deleteProduct(token, this.props.id)

        // var result = this.addResponseHandler(response);
        // if (result){
        //   this.setState({
        //     show: false
        //   })
        //   alert("Product Deleted Successfully")
        //   window.location.reload()
        // }
        // else {
        //   alert("Failed to delete. Probably the product has already been deleted")
        // }
    }

    handleShow() {
      this.setState({
        show: true
      })
        
    }

    handleClose() {
      //Let the modal close shall we?
      this.setState({
        show: false
      }) 
    }

    render() {
        return (
            <div>
              <Button 
              variant = "link"
              onClick={() => this.handleShow()}
              >
                Add To WishList
              </Button>
        
              <Modal
                show={this.state.show}
                onHide={() => this.handleClose()}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Confirm Your Action</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Are you sure to add to Wish List?
                </Modal.Body>
                <Modal.Footer>
                  <Button 
                  variant="secondary" 
                  onClick={() => this.handleClose()}>
                    Close
                  </Button>
                  <Button 
                  variant="outline-danger"
                  onClick={(event) => this.addHandler(event)}
                  >
                  Add
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
        )
    } 
  }
  