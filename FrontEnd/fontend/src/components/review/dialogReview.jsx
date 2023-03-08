import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextArea from 'antd/es/input/TextArea';
import { Rate,message } from 'antd';
import Toast from '../Toast/toastSuccess'
export default function FormDialog({id_hotel}) {
  let data=localStorage.getItem("tokelogin")
    console.log(JSON.parse(data))
  const [open, setOpen] = React.useState(false);
  const [review,setReview]=React.useState({
    title:"",
    content:"",
    star:""
  })
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Add review success',
      className: 'custom-class',
      style: {
        fontSize:"20px",
        marginTop: '8vh',
        marginRight:'2vw'
      },
      duration:1
    });
  };

  const handleClickOpen = () => {
  
    setOpen(true);

  };

  const handleClose = () => {
    if (review.title!==""&&review.star!=""&&review.content!=="") {
      console.log(1111);
      fetch('http://localhost:5000/api/v1/review',{
      method:'POST',
      headers:{
        "Content-type":"application/json",
        token:JSON.parse(data).token
      },
      body:JSON.stringify({
        title:review.title,
        content:review.content,
        point:review.star,
        idHotel:id_hotel
      })
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if (data.status=="success") {
        success()
      }
    })
    }
    setOpen(false);
  };
  const handelchange=(e)=>{
    console.log(e.target);
    setReview({...review,[e.target.name]:e.target.value})
  }
  console.log(review,id_hotel);
  return (

    <div>
       {contextHolder}
      <Button size='small' onClick={handleClickOpen}>
        review
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Review</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            onChange={handelchange}
            margin="dense"
            id="name"
            name='title'
            label="Tiêu đề"
            type="text"
            fullWidth
            variant="standard"
          />
           <TextArea
           placeholder='Nội dung đánh giá'
           onChange={handelchange}
            autoFocus
            margin="dense"
            id="name"
            name='content'
           size='medium'
            type="text"
            fullWidth
            
          />
           <Rate allowHalf name="star" onChange={(e,newValue)=>{
            setReview({...review,star:e})
           }}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}