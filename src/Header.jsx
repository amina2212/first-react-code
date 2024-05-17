import './Header.css'

function Header() {
     return(

<>
<nav className='header'>


    <ul>
    <h1>KFC</h1>
       <button>
     <div className="logo">
        <img src="https://www.kfcpakistan.com/static/media/Delivery.793adbaa710baf75ba78.png" alt=""/> Delivery
        </div>
        </button>


        <button >
     <div className="logo">
        <img src="https://www.kfcpakistan.com/static/media/pickup.47bb874f83ea6acb5a47.png" alt="" />PICKUP 
        </div>
        </button>

            <div>
            <button className="right-btn" >LOGIN 
            </button>
            <div>
           
               
               {/* <button>
                   <div className="new-btn">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdRxOAnnqrq0B7rdRAnwUxmM1o_bQu-h3lA1d3TAIstO8odvhiP0ul89QGdg&s" alt="" />
             </div>
               </button> */}
            </div>
         </div>

        </ul>
       </nav>
       


</>

    )
}

export default Header