import { Input } from 'antd';
import { useEffect, useState } from 'react';
import DateRange from '../search/dateRange'
import Pickrooms from '../search/pickrooms';
import SearchResult from './search_result';
import {useDispatch,useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
export default function SearchMainBody(params) {
    const [room,setRoom]=useState(1)
    const [person,setPerson]=useState(2)
    const [display,setDisplay]=useState("none")
    const [border,setBorder]=useState("none")
    const [searchResult,setSearchResult]=useState([])
    const [displaySearchResullt,setDisplayResult]=useState("none")
    const {searchValue}=useSelector(state=>state.search)
    const checkIn=useSelector(state=>state.date.checkin)
    const checkOut=useSelector(state=>state.date.checkout)
    const {type}=useSelector(state=>state.search)
    const {id}=useSelector(state=>state.search)
    console.log(searchValue,checkIn,checkOut,type,id);
    const [inputchange,setInputChange]=useState("")
    const handelClick=()=>{
        setBorder("1px solid rgb(0, 166, 255)")
        if (display=="none") {
            setDisplay("block") 
        }else{
            setDisplay("none")
        }
    }
    const handelmouseleave=()=>{
        setDisplay("none")
    }
    const handeladdroom=()=>{
        setRoom(room+1)
      }
      const handelminusroom=()=>{
        if (room >1) {
          setRoom(room-1)
        }
      }
      const handelAddperson=()=>{
        setPerson(person+1)
      }
      const handelminuperson=()=>{{
        if (person >1) {
          setPerson(person -1 )
        }
      }}
      const HandelClickInput=()=>{
        if(displaySearchResullt=="none"){
          setDisplayResult("block")
        }else{
          setDisplayResult("none")
        }
      }
      const handelChangeInput=(e)=>{
          setInputChange(e.target.value)
          setDisplayResult("block")
      }
      useEffect(()=>{
        if (inputchange.length>0) {
        fetch("http://localhost:5000/api/v1/searchAll")
        .then(res=>res.json())
        .then(resutl=>{
          let newArr= new Array(...resutl[0][0],...resutl[1][0])
          newArr=newArr.filter((item)=>{
            return (item.Name.toLowerCase()).includes((inputchange.toLowerCase()))==true
          })
          setSearchResult(newArr)
        })
        }else{
          fetch("http://localhost:5000/api/v1/searchAll")
        .then(res=>res.json())
        .then(resutl=>{
        
          setSearchResult(resutl[0][0])
        })
        }
      },[inputchange])
    
      useEffect(()=>{
        setInputChange(searchValue)
        setDisplayResult("none")
      },[searchValue])
      const navigate=useNavigate()
    return(
        <div className="search-main-body">
        <div style={{width:"80%",margin:"0 auto", height:"20%"}}>
        <Input placeholder='search' style={{width:"100%",height:"100%",fontSize:"21px"}}  value={inputchange} onClick={HandelClickInput} onChange={handelChangeInput} allowClear/>
        <SearchResult display={displaySearchResullt} data={searchResult}/>
        </div>
        <div className='search-main-pick'>
        <DateRange height={"225%"} width={"150%"} size="21px" weight={500} />
        <div className="search-main-pickroom" onClick={handelClick} style={{border:border}}>
            <span>{room} {room>1?"rooms":"room"} | {person} persons</span>
        </div>
        </div>
        <button onClick={()=>{
          if(searchValue&&checkIn&&checkOut){
            if (type=="city") {
              navigate(`/result?place=${searchValue}&checkin=${checkIn}&checkout=${checkOut}&type=${type}`)
            }else{
              navigate(`/hotel/${id}`)
            }
          }
        }}>Search</button> 
        <Pickrooms
        minusroom={handelminusroom}
        addroom={handeladdroom}
        addperson={handelAddperson}
        minusperson={handelminuperson} 
        room={room}
        person={person}
        width={"300px"}
        top=" 280px"
        left={"600px"}
        display={display}
        mouseLeave={handelmouseleave}
        />
        </div>
    )
}