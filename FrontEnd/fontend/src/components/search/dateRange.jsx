
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useState } from 'react';
import { DatePicker, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {momment} from 'moment'
import dayjs from 'dayjs';
const { RangePicker } = DatePicker;

dayjs.extend(customParseFormat);
const range = (start, end) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

// eslint-disable-next-line arrow-body-style
const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().startOf('day');
};

const App = ({height,width,size,weight}) => {
  const {checkin,checkout}=useSelector(state=>state.date)
  const dispatch=useDispatch()
const handelChange=(current)=>{
  let [checkinDay,checkOutDay]=current
  console.log(checkinDay.$D,checkinDay.$M,checkinDay.$y);
  // console.log(pickDate.getMonth());
  // let pickMonth= Number(pickDate.getMonth())+1
  let checkIn=checkinDay.$y+ "-" + ((checkinDay.$M+1)>=10?(checkinDay.$M+1).toString():(0+(checkinDay.$M+1).toString())) + "-"+checkinDay.$D
  let checkOut=checkOutDay.$y+ "-" +((checkOutDay.$M+1)>=10?(checkOutDay.$M+1).toString():(0+(checkOutDay.$M+1).toString())) + "-"+checkOutDay.$D
  // + "/" + pickDate.getFullYear()
  // // pickDate=pickDate.getUTCDate()
  console.log(checkIn,checkOut);
  dispatch({type:"change_date",checkIn:checkIn,checkOut:checkOut})
  // pickDate=new Date('24-02-2023')
  // console.log(pickDate.getdate());
  // console.log(checkinDay.$d = checkOutday.$d);
}
const dateFormat = "YYYY-MM-DD";
  return(
    <Space direction="vertical" size={12} style={{fontSizeAdjust:weight}}>
      <RangePicker style={{height:height,width:width,fontSize:size, fontWeight:weight}}
        disabledDate={disabledDate}
        onChange={handelChange}
        defaultValue={checkin&&[
          dayjs(checkin,dateFormat),
          dayjs(checkout,dateFormat)
        ]}
        format={dateFormat}
      />
    </Space>
  );
}
export default App;