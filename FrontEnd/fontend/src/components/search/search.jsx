import './search.css'

import { useState } from 'react';
import DateRange from './dateRange';
import { Dropdown } from 'antd';
import Pickrooms from './pickrooms';
import Dropdownbt from './drdownboostrap';
import DropdownItemTagsExample from './drdownboostrap';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import SearchResult from '../searchMain/search_result';
import { useNavigate } from 'react-router-dom';
export default function Search(){
    const [room,setRoom]=useState(1)
    const [person,setPerson]=useState(2)  
    const [display,setDidplay]=useState("none")
    const [inputseach,setInputSeach]=useState("")
    const [displaySearchResullt,setDisplaySearchResult]=useState("none")
    const [searchResult,setSearchResult]=useState([])
    const {searchValue,type}=useSelector(state=>state.search)
    const checkIn=useSelector(state=>state.date.checkin)
    const checkOut=useSelector(state=>state.date.checkout)
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
    const handelpickromm=()=>{
      if (display==="none") {
        setDidplay("block")
      }else{
        setDidplay("none")
      }
    }
    const handelMouseleave=()=>{
      setDidplay("none")
    }
    useEffect(()=>{
      if (inputseach.length>0) {
        fetch("http://localhost:5000/api/v1/searchAll")
          .then(res=>res.json())
          .then(resutl=>{
            let newArr= new Array(...resutl[0][0],...resutl[1][0])
            newArr=newArr.filter((item)=>{
              return (item.Name.toLowerCase()).includes((inputseach.toLowerCase()))==true
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
    },[inputseach])

    useEffect(()=>{
      setInputSeach(searchValue)
      setDisplaySearchResult("none")
    },[searchValue])
    const navigate=useNavigate()
    return (
      <div className='searchBar-sticky'>
        <div className="search-bar-container">
          <div className='search-Input'>
          <input 
            type="text" 
            placeholder='Search' 
            value={inputseach}  
            onChange={(e)=>{
              setInputSeach(e.target.value)
              setDisplaySearchResult("block")
            }}
            onClick={()=>{
              if(displaySearchResullt=="none"){
                setDisplaySearchResult("block")
              }else{
                setDisplaySearchResult("none")
              }
              
            }}
          />
          <SearchResult style={{width:"100%"}} display={displaySearchResullt} data={searchResult}/>
          </div>
           {/* <input type="date" placeholder='Check in' className='search-date'/>
           <input type="date" placeholder='Check out' className='search-date'/>     */}
           <DateRange height={"5.4vh"}/>
          <div className="search-pickroom" onClick={handelpickromm}>
            <span>{room} {room>1?"rooms":"room"} | {person} persons</span>
          </div>
          <button onClick={()=>{
          if(searchValue&&checkIn&&checkOut){
            navigate(`/result?place=${searchValue}&checkin=${checkIn}&checkout=${checkOut}&type=${type}`)
          }
        }}>Search</button>
        </div>
        <Pickrooms mouseLeave={handelMouseleave} display={display} minusperson={handelminuperson} addperson={handelAddperson} addroom={handeladdroom} minusroom={handelminusroom} room={room} person={person}/>
      </div>
    );
}