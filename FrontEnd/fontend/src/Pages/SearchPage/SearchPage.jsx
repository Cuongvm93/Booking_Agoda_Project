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
            <h6>Giá mỗi đêm</h6>
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
                  <label htmlFor="Input">Tối thiểu</label>
                  <Input
                    prefix="đ"
                    size="small"
                    onChange={handleInputChange}
                    value={new Intl.NumberFormat("de-DE").format(value[0])}
                  />
                </div>
                <div className="price-fillter">
                  <label htmlFor="Input">Tối đa</label>
                  <Input
                    size="small"
                    prefix="đ"
                    onChange={handleInputChange}
                    value={new Intl.NumberFormat("de-DE").format(value[1])}
                  />
                </div>
              </div>
            </div>
            <div className="type-fillter">
              <h6>Xếp hạng sao</h6>
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
              <h6>Loại hình nơi ở</h6>
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
              <h6>Tiện ích</h6>
              <Checkbox
               onChange={(e) =>
                handelCheckBox(e.target.checked, "pool", "exten")
              }
               >Bể bơi</Checkbox>
              <Checkbox
               onChange={(e) =>
                handelCheckBox(e.target.checked, "restaurant", "exten")
              }
              >Nhà hàng</Checkbox>
              <Checkbox
               onChange={(e) =>
                handelCheckBox(e.target.checked, "smoke", "exten")
              }
              >
                Hút thuốc</Checkbox>
              <Checkbox
               onChange={(e) =>
                handelCheckBox(e.target.checked, "breakfast", "exten")
              }
              >Ăn sáng</Checkbox>
            </div>

            <div className="type-fillter">
              <h6>Loại Hình Giường</h6>
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
              <h6>Các nơi lân cận</h6>
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
              <h6>Đánh giá của khách</h6>
              <Checkbox>9+Trên cả tuyệt vời(482)</Checkbox>
              <Checkbox>8+Xuất sắc (813)</Checkbox>
              <Checkbox>7+Rất tốt (1007)</Checkbox>
              <Checkbox>6+Hài lòng (1080)</Checkbox>
            </div>
            <div className="type-fillter">
              <h6>Khoảng cách đến trung tâm</h6>
              <Checkbox>Bên trong trung tâm thành phố (770)</Checkbox>
              <Checkbox>cách trung tâm 2 km (969)</Checkbox>
              <Checkbox>cách trung tâm 2-5 km (122)</Checkbox>
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
              <Button disabled>Sắp xếp</Button>
              <Button className="btn-2">Phù hợp nhất</Button>
              <Button> Giá thấp nhất </Button>
              <Button> Khoảng cách </Button>
              <Button> Được đánh giá nhiều nhất </Button>
              <Button> Ưu đãi nóng hổi </Button>
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
