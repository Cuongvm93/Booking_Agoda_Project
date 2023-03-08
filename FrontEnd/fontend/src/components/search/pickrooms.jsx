import './search.css'
export default function Pickrooms({room,person,minusroom,addroom,minusperson,addperson,display,mouseLeave,width,top,left,border,click}) {
    return(
        <div className='search-pickrooms-dropdown'style={{display:display,width:width, top:top, left:left, border:border}} onMouseLeave={mouseLeave} onClick={click}>
            <div className='search-numberroom'>
            <p style={{fontWeight:600}}>Room</p>
            <div><i class="fa-solid fa-circle-minus" onClick={minusroom}></i> &nbsp; {room} &nbsp; <i class="fa-solid fa-circle-plus" onClick={addroom}></i> </div> 
            </div>
            <div className='search-numberperson'>
            <p style={{fontWeight:600}}>Person</p>
            <div><i class="fa-solid fa-circle-minus" onClick={minusperson}></i> &nbsp; {person} &nbsp; <i class="fa-solid fa-circle-plus" onClick={addperson}></i> </div> 
            </div>
        </div>
    )
}