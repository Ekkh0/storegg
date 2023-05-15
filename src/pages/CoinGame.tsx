import { IUser } from '../interface/IUser';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state';
import { useState } from 'react';

function MyProduct() {

  const dispatch = useDispatch();
  const { sellProduct } = bindActionCreators(actionCreators, dispatch);
  const user1 = useSelector((state: State) => state.user1) as IUser;
  const [rerender, setrerender] = useState<number>(0);

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

      <div className="alignleftbody">
        <h1>Collect Coins</h1>
        <div className="prizes">  
          <div className='prizecont'>
            <img src={require('../Assets/gold-coin.png')} alt="" />
            100 Coins
          </div>
          <div className='prizecont'>
            <img src={require('../Assets/silver-coin.png')} alt="" />
            50 Coins
          </div>
          <div className='prizecont'>
            <img src={require('../Assets/bronze-coin.png')} alt="" />
            20 Coins
          </div>
        </div>
        <div className='eggcont'>
          <p>Click on the egg to collect coins !!!</p>
          <button id="eggbtn" onClick={()=>{
            var prizenum=Math.floor(Math.random()*(3));
            var coin;
            switch (prizenum){
              case 0:
                coin=document.getElementById("1");
                coin!.style.display="flex";
                user1.coin+=100;
                setrerender(1);
                break;
              case 1:
                coin=document.getElementById("2");
                coin!.style.display="flex";
                user1.coin+=50;
                setrerender(1);
                break;
              case 2:
                coin=document.getElementById("3");
                coin!.style.display="flex";
                user1.coin+=20;
                setrerender(1);
                break;
              default:
                break;
            }
            var telorimg=document.getElementById("telor") as HTMLInputElement;
            telorimg!.src=require("../Assets/egg-broken.png");
            var btn=document.getElementById("eggbtn") as HTMLInputElement;
            btn.style.cursor="default";
            btn!.disabled=true; //<--goes away on re-entry of page
          }}>
            <img src={require('../Assets/egg-full.png')} id="telor" className="telur" alt="" />
          </button>
            <img src={require('../Assets/gold-coin.png')} className="coinegg" id="1" alt="" />
            <img src={require('../Assets/silver-coin.png')} className="coinegg" id="2" alt="" />
            <img src={require('../Assets/bronze-coin.png')} className="coinegg" id="3" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MyProduct;