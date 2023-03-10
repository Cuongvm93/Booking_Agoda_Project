import Header from "../../components/header/Header";
import Search from "../../components/search/search";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import { Checkbox, Input, Rate } from "antd";
import CardItem from "../../components/card-hotel/CardHotel";
import "./SearchPage.css";
import { ButtonGroup, Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";
import Form, { FormCheck } from "react-bootstrap/Form";

function SearchPage() {
  const [filter, setfilter] = useState({
    star: [],
    type: [],
    exten: [],
    bed: [],
    neigbor: [],
  });
  const [neighbor, setNeighbor] = useState([]);
  const [dataHotel, setDataHotel] = useState([]);
  const [datarender,setDataRender]=useState([])
  const [value, setValue] = useState([0, 23000000]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  console.log(params.get('place'));
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/city/${params.get("place")}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDataHotel(data[0][0]);
        setNeighbor(data[1][0]);
        // setDataHotel(dataHotel.filter((e)=>{
        //    return e.price>=value[0]&&e.price<=value[1]
        // }))
        // setDataHotel(dataHotel.filter((e,i)=>{
        //     return e.price>=value[0]&&e.price<=value[1]
        // }))
        // if (datarender.length>0) {
        //             setDataRender(datarender.filter(e=>e.price>=value[0]&&e.price<=value[1]))
        //         }
        setDataRender(data[0][0])
      });
  }, [params.get("place")]);
  useEffect(()=>{
    
    let data=dataHotel
    console.log(data);
    if (data.length>0) {
        data=data.filter(e=>e.price>=value[0]&&e.price<=value[1])
    }
    if (filter.type.length>0 && data.length>0){
      console.log(11111);
      console.log(filter.type);
        data=data.filter((e)=>{
            return filter.type.indexOf(e.type)!= -1
        });
        console.log(data);
    }
    if (filter.neigbor.length>0 && data.length>0){
      console.log(22222);
        data=data.filter((e)=>{
            return filter.neigbor.indexOf(e.district)!= -1
        });
    }
    // if (filter.exten.length>0&& data.length>0) {
    //    for (const element of filter.exten) {
    //     data=[...data,...data.filter((e)=>{
    //         return element==e[element]
    //     })]
        
    //    }
    //   }
    console.log(data);
       setDataRender(data)
    // }
  },[dataHotel,filter,value])
  const [check, setcheck] = useState(true);
  const checkbox = useRef();
  const handelCheckBox = (e, name, type) => {
    if (e == true) {
      setfilter({
        ...filter,
        [type]: [...filter[type], name],
      });
    } else {
      let filterArr = filter[type];
      let newTypes = filterArr.filter((e, i) => e !== name);
      setfilter({
        ...filter,
        [type]: [...newTypes],
      });
    }
  };
  // console.log(filter);
  console.log(datarender);
  return (
    <div className="searchPage">
      <div>
        <Header />
        <Search />
      </div>
      <div className="search-page-container">
        <div className="leftColumn">
          <div className="searchPage-bar">
            <TextField
              id="outlined-search"
              label="Tim kiem"
              size="small"
              fullWidth
              type="search"
            />
            <h6>Gi?? m???i ????m</h6>
          </div>
          <div className="search-fillter-column">
            <div className="type-fillter">
              <Slider
                value={value}
                onChange={handleChange}
                disableSwap
                min={0}
                max={23000000}
              />
              <div className="fillter-range">
                <div className="price-fillter">
                  <label htmlFor="Input">T???i thi???u</label>
                  <Input
                    prefix="??"
                    size="small"
                    onChange={handleInputChange}
                    value={new Intl.NumberFormat("de-DE").format(value[0])}
                  />
                </div>
                <div className="price-fillter">
                  <label htmlFor="Input">T???i ??a</label>
                  <Input
                    size="small"
                    prefix="??"
                    onChange={handleInputChange}
                    value={new Intl.NumberFormat("de-DE").format(value[1])}
                  />
                </div>
              </div>
            </div>
            <div className="type-fillter">
              <h6>X???p h???ng sao</h6>
              <Checkbox>
                <Rate disabled defaultValue={5} />
              </Checkbox>
              <Checkbox>
                <Rate disabled defaultValue={4} />
              </Checkbox>
              <Checkbox>
                <Rate disabled defaultValue={3} />
              </Checkbox>
              <Checkbox>
                <Rate disabled defaultValue={2} />
              </Checkbox>
            </div>
            <div className="type-fillter">
              <h6>Lo???i h??nh n??i ???</h6>
              <Checkbox
                onChange={(e) =>
                  handelCheckBox(e.target.checked, "Hotel", "type")
                }
                ref={checkbox}
              >
                Hotel
              </Checkbox>
              <Checkbox onChange={(e) =>
                  handelCheckBox(e.target.checked, "Apartment", "type")
                }
                 ref={checkbox}>
                Apartment
              </Checkbox>
              <Checkbox
               onChange={(e) =>
                handelCheckBox(e.target.checked, "Resort", "type")
              } 
              >Resort</Checkbox>
              <Checkbox
               onChange={(e) =>
                handelCheckBox(e.target.checked, "Bungalow", "type")
              }
              >Buggalow</Checkbox>
            </div>
            <div className="type-fillter">
              <h6>Ti???n ??ch</h6>
              <Checkbox
               onChange={(e) =>
                handelCheckBox(e.target.checked, "pool", "exten")
              }
               >B??? b??i</Checkbox>
              <Checkbox
               onChange={(e) =>
                handelCheckBox(e.target.checked, "restaurant", "exten")
              }
              >Nh?? h??ng</Checkbox>
              <Checkbox
               onChange={(e) =>
                handelCheckBox(e.target.checked, "smoke", "exten")
              }
              >
                H??t thu???c</Checkbox>
              <Checkbox
               onChange={(e) =>
                handelCheckBox(e.target.checked, "breakfast", "exten")
              }
              >??n s??ng</Checkbox>
            </div>

            <div className="type-fillter">
              <h6>Lo???i H??nh Gi?????ng</h6>
              <Checkbox
               onChange={(e) =>
                handelCheckBox(e.target.checked, "single", "bed")
              }
              >Single</Checkbox>
              <Checkbox
               onChange={(e) =>
                handelCheckBox(e.target.checked, "Queen", "bed")
              }
              >Queen</Checkbox>
              <Checkbox
                 onChange={(e) =>
                    handelCheckBox(e.target.checked, "King", "bed")
                  }
              >King</Checkbox>
              <Checkbox
               onChange={(e) =>
                handelCheckBox(e.target.checked, "Double", "bed")
              }
              >Double</Checkbox>
            </div>
            <div className="type-fillter">
              <h6>C??c n??i l??n c???n</h6>
              {neighbor.map((element, i) => {
                return (
                  <Checkbox  onChange={(e) =>
                    handelCheckBox(e.target.checked,element.district , "neigbor")
                  }>
                    {element.district} ({element.counts})
                  </Checkbox>
                );
              })}
            </div>

            <div className="type-fillter">
              <h6>????nh gi?? c???a kh??ch</h6>
              <Checkbox>9+Tr??n c??? tuy???t v???i(482)</Checkbox>
              <Checkbox>8+Xu???t s???c (813)</Checkbox>
              <Checkbox>7+R???t t???t (1007)</Checkbox>
              <Checkbox>6+H??i l??ng (1080)</Checkbox>
            </div>
            <div className="type-fillter">
              <h6>Kho???ng c??ch ?????n trung t??m</h6>
              <Checkbox>B??n trong trung t??m th??nh ph??? (770)</Checkbox>
              <Checkbox>c??ch trung t??m 2 km (969)</Checkbox>
              <Checkbox>c??ch trung t??m 2-5 km (122)</Checkbox>
            </div>
          </div>
        </div>
        <div className="rightColumn">
          <div>
            <ButtonGroup
              className="button-mui"
              variant="text"
              size="large"
              aria-label="outlined primary button group"
            >
              <Button disabled>S???p x???p</Button>
              <Button className="btn-2">Ph?? h???p nh???t</Button>
              <Button> Gi?? th???p nh???t </Button>
              <Button> Kho???ng c??ch </Button>
              <Button> ???????c ????nh gi?? nhi???u nh???t </Button>
              <Button> ??u ????i n??ng h???i </Button>
            </ButtonGroup>
          </div>
          {datarender.map((e, i) => {
            return (
              <CardItem
              idhotel={e.idHotel}
                img1={e.image[0]}
                img2={e.image[1]}
                img3={e.image[2]}
                img4={e.image[3]}
                img5={e.image[4]}
                img6={e.image[5]}
                title={e.Name}
                price={e.price}
                district={e.district}
                city={e.city}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SearchPage;
