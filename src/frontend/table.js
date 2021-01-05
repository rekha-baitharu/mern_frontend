import React from "react";
import {
    IconButton, Icon, DialogActions, DialogTitle, TextField, Card, CardContent,Snackbar,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, Button, Dialog, DialogContent
} from "@material-ui/core";
import images from "../images/images.jpg";

export default class Tablee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card: false,
            open: false,
            skip: 0,
            limit: 2,
            id: "",
            name: "",
            email: "",
            users: [],
            snack:false
        }
    }

    componentDidMount() {
        this.handleData();
    }
    //FUNCTION CALL FOR GET DATA FROM BACK-END
    handleData = () => {
        this.setState({
            skip: this.state.skip,
            limit: this.state.limit
        })
        fetch("http://localhost:8000/get_users", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "skip": this.state.skip,
                "limit": this.state.limit
            })
        })
            .then(res => res.json())
            .then((json) => {
                console.log(json.result);
                this.setState({
                    users: json.result
                })
            });
    }
    //FUNCTION CALL FOR DELETE ONE ROW
    handleDelete = (delete_id) => {
        this.setState({
            open: false
        })
        fetch("http://localhost:8000/delete_user", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: delete_id
            })
        })
            .then(res => res.json())
            .then((json) => {
                console.log(json);
                if(json.status === true){
                    this.handleData();
                }else{
                    this.setState({
                        message:json.message
                    })
                }

            });
    }
    handleOpen = () => {
        this.setState({
            open: true
        })
    }
    handleCloseOpen = () => {
        this.setState({
            open: false
        })
    }
    //FUNCTION CALL AFTER CLICKING ON EDIT BUTTON
    handleEdit = () => {
        this.setState({
            card: true
        })
    }
    handleClose = () => {
        this.setState({
            card: false
        })
    }
    handleClick = (e) => {
        fetch("http://localhost:8000/update_user", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": this.state.id,
                "name": this.state.name,
                "email": this.state.email
            })
        })
            .then(res => res.json())
            .then((json) => {
                console.log(json);
            });
    }

    //AFTER CLICKING ON RIGHT ARROW
    handleRight = () => {
        this.setState({
            skip: parseInt(this.state.skip) + parseInt(this.state.limit),
            limit: this.state.limit
        })
        fetch("http://localhost:8000/get_users", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "skip": this.state.skip,
                "limit": this.state.limit
            })
        })
            .then(res => res.json())
            .then((json) => {
                console.log(json);
                this.handleData();
            });
    }

    //AFTER CLICKING ON LEFT ARROW
    handleLeft = () => {
        this.setState({
            skip: parseInt(this.state.skip) - parseInt(this.state.limit),
            limit: this.state.limit
        })
        fetch("http://localhost:8000/get_users", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "skip": this.state.skip,
                "limit": this.state.limit
            })
        })
            .then(res => res.json())
            .then((json) => {
                console.log(json);
                    this.handleData();
            });
    }

    //Snackbar
    handleCloseSnackbar = () => {
        this.setState({
            snack: false
        })
      }

    render() {
        return (
            <div style={{ background: "url(" + images + ")", height: "100vh", backgroundSize: "cover" }}>
                <Typography variant='h3' style={{ fontFamily: "Serif", marginLeft: 500, color: "brown", paddingTop: 10 }}>Welcome to the User Table</Typography>
                <Card style={{ height: 500, width: 1000, marginLeft: 250, marginTop: 50 }}>
                    <CardContent>
                        <TableContainer component={Paper}>

                            <Table aria-label="simple table" >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="right">Email</TableCell>
                                        <TableCell align="right">Delete Users</TableCell>
                                        <TableCell align="right">Edit Users</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.users.map((s) => {
                                        return (
                                            <TableRow>
                                                <TableCell>{s.name}</TableCell>
                                                <TableCell align="right">{s.email}</TableCell>
                                                <TableCell align="right"><IconButton onClick={()=>{this.handleDelete(s._id);}}><Icon>delete</Icon></IconButton></TableCell>
                                                <TableCell align="right"><Button onClick={this.handleEdit}>Edit</Button></TableCell>
                                            </TableRow>
                                        )
                                    })}
                                    {/* <TableRow>
                                        <TableCell>Rekha</TableCell>
                                        <TableCell>Rekha@gmail.com</TableCell>
                                        <TableCell><IconButton><Icon>delete</Icon></IconButton></TableCell>
                                        <TableCell><Button>Edit</Button></TableCell>
                                        </TableRow> */}
                                </TableBody>

                            </Table>
                            <IconButton onClick={this.handleLeft} ><Icon>keyboard_arrow_left</Icon></IconButton>
                            <IconButton onClick={this.handleRight}><Icon>keyboard_arrow_right</Icon></IconButton>
                        </TableContainer>
                        <Button onClick={this.handleData} variant="contained" color="primary" style={{ marginLeft: 400, marginTop: 100 }}>Get User Table</Button>
                    </CardContent>
                </Card>


                {/* AFTER CLICKING ON EDIT BUTTON */}
                <Dialog open={this.state.card} onClose={this.handleClose} aria-labelledby="form-dialog-title" fullWidth>
                    <DialogTitle id="form-dialog-title"><Typography variant='h5' style={{ fontFamily: "Serif", color: "darkblue" }}>CHANGE YOUR NAME AND EMAIL ID</Typography></DialogTitle>
                    <DialogContent>
                        <Typography style={{ fontFamily: "Serif", color: "blue" }}>Enter your id:</Typography>
                        <TextField
                            variant="outlined"
                            color="primary"
                            label="Enter Your id"
                            margin="dense"
                            fullWidth
                            onChange={(e) => { this.setState({ id: e.target.value }) }}
                        /><br />
                        <Typography style={{ fontFamily: "Serif", color: "blue" }}>Enter your new name:</Typography>
                        <TextField
                            variant="outlined"
                            color="primary"
                            label="Enter Your New Name"
                            margin="dense"
                            fullWidth
                            onChange={(e) => { this.setState({ name: e.target.value }) }}
                        /><br />
                        <Typography style={{ fontFamily: "Serif", color: "blue" }}>Enter your new email-id:</Typography>
                        <TextField
                            variant="outlined"
                            color="primary"
                            label="Enter Your New Email-Id"
                            margin="dense"
                            fullWidth
                            onChange={(e) => { this.setState({ email: e.target.value }) }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            CANCEL
                            </Button>
                        <Button onClick={this.handleClick} color="primary">
                            ADD
                        </Button>
                    </DialogActions>
                </Dialog>

                {/* AFTER CLICKING ON DELETE BUTTON */}
                {/* <Dialog open={this.state.open} onClose={this.handleCloseOpen} aria-labelledby="form-dialog-title" fullWidth>
                    <DialogTitle id="form-dialog-title"><Typography variant='h5' style={{ fontFamily: "Serif", color: "darkblue" }}>DELETE ONE OBJECT</Typography></DialogTitle>
                    <DialogContent>
                        <Typography style={{ fontFamily: "Serif", color: "blue" }}>Are you sure you want to delete this?</Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCloseOpen} color="primary">
                            CANCEL
                            </Button>
                        <Button onClick={this.handleDelete} color="primary">
                            DELETE
                        </Button>
                    </DialogActions>
                </Dialog> */}

                {/* Snackbar */}
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.snack}
                    autoHideDuration={10000}
                    onClose={this.handleCloseSnackbar}
                    message={this.state.message}
                    action={
                        <IconButton onClick={this.handleCloseSnackbar}>
                            <Icon style={{ color: "white" }}>
                                close
                            </Icon>
                        </IconButton>
                    }
                />
            </div>
        )
    }
}