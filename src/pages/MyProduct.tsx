import { useEffect, useState } from 'react';
import { IProduct } from '../interface/IProduct';
import { IUser } from '../interface/IUser';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state';

function MyProduct() {

  const dispatch = useDispatch();
  const { buyProduct, sellProduct, removeProduct } = bindActionCreators(actionCreators, dispatch);
  const user1 = useSelector((state: State) => state.user1) as IUser;
  var listMyProduct = useSelector((state: State) => state.listMyProduct) as IProduct[];

  const [listFilteredProduct, setListFilteredProduct] = useState<IProduct[]>(listMyProduct);
  const [errorFlag, setErrorFlag] = useState<boolean>(false);
  const [overlayedProduct, setOverlayedProduct] = useState<IProduct>();
  const [MyProductNumber, setMyProductNumber] = useState<number[]>([]);
  var [count] = useState<number>(0);
  var removenum: number = 0;
  var counter = 0;

  useEffect(() => {
    if (count === 0) {
      count++;
      getFilteredMyProduct();
    } else return;
  }, []);

  const getFilteredMyProduct = (searchterm?: string) => {
    counter = 0;
    setMyProductNumber([]);
    listMyProduct.map((item, i) => {
      if (searchterm != null && searchterm !== "") {
        if (item.title.includes(searchterm)) {
          setMyProductNumber(oldArray => [...oldArray, i]);
        }
      } else {
        setMyProductNumber(oldArray => [...oldArray, i]);
      }
    })
  }

  return (
    <div className="page">
      <div className="header">
        <Link to="/" className="homepagelink">
          <div className="logocontainer">
            <img src={require('../Assets/egg-full.png')} className="logo" />
            Storegg
          </div>
        </Link>

        <div className="searchbar">
          <img src={require('../Assets/search.png')} alt="" />
          <input type="text" id="search" className='search' placeholder="Search product..."
          />
          <button className="searchbtn" onClick={() => {
            var inputvalue = (document.getElementById("search") as HTMLInputElement).value;
            getFilteredMyProduct(inputvalue);
          }}>Search</button>
        </div>
        <div className="profile">
          <div className="coincontainer">
            <p>
              {user1.coin.toLocaleString("id-ID", { maximumFractionDigits: 2, minimumFractionDigits: 0 })}
            </p>
            Coin
          </div>
          <img src={require('../Assets/user.png')} alt="" className="userimg" />
        </div>
      </div>

      <div className="body">
        {
          listMyProduct.map((item, i) => {
            if (i == MyProductNumber[counter]) {
              counter++;
              return (
                <button className="overlaybtn" onClick={() => {
                  var overlay = document.getElementById("ovy");
                  overlay!.style.display = "flex";

                  setOverlayedProduct({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    description: item.description,
                    category: item.category,
                    image: item.image,
                    rate: item.rate,
                    count: i //<-- scuffed index passer, sorry!
                  })
                }}>
                  <div className="productlist">
                    <div className="imgcontainer">
                      <img src={item.image} alt="" className="productimage" />
                    </div>
                    <div className="productdetail">
                      <h1 className="productname">{item.title}</h1>
                      <h2 className="productprice">IDR {item.price.toLocaleString("id-ID", { maximumFractionDigits: 2, minimumFractionDigits: 0 })}</h2>
                      <p className="desctitle">Description:</p>
                      <p className="desc">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </button>
              )
            }
          })
        }

        <div className="overlay" id="ovy">
          <button className="clickout" onClick={() => {
            var overlay = document.getElementById("ovy");
            overlay!.style.display = "none";
          }}></button>
          <div className="ovycontent">
            <h1>{overlayedProduct?.title}</h1>
            <div className="overlayproduct">
              <div className="overlaycont1">
                <img src={overlayedProduct?.image} alt="" className="overlayimage" />
                <button className="buybtn" onClick={() => {
                  var okoverlay = document.getElementById("okovy");
                  okoverlay!.style.display = "flex";

                  user1.coin += overlayedProduct!.price;
                  console.log(removenum);
                  removeProduct(overlayedProduct!.count);
                }}>
                  Sell
                </button>
              </div>
              <div className="overlaycont2">
                <h2>IDR {overlayedProduct?.price.toLocaleString("id-ID", { maximumFractionDigits: 2, minimumFractionDigits: 0 })}</h2>
                <p>Description</p>
                <p>{overlayedProduct?.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="okoverlay" id="okovy">
          <div className="okcontent">
            <img src={require('../Assets/egg-full.png')} className="logo" />
            <h1>Success</h1>
            <p>{overlayedProduct?.title} was sold successfully !</p>
            <p>Your current coin {user1.coin.toLocaleString("id-ID", { maximumFractionDigits: 2, minimumFractionDigits: 0 })}</p>
            <button onClick={() => {
              var overlay = document.getElementById("ovy");
              overlay!.style.display = "none";
              var okoverlay = document.getElementById("okovy");
              okoverlay!.style.display = "none";
            }}>OK</button>
          </div>
        </div>


        <Link className="coingame" to="/coingame">
          <img src={require('../Assets/egg-full.png')} className="logo" />
        </Link>
      </div>
    </div>
  );
};

export default MyProduct;