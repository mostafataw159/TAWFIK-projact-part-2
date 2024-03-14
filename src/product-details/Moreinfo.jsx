import React from 'react'

function Moreinfo() {
  return (
    <div>
          <div className="more-info">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="tabs-content">
            <div className="row">
              <div className="nav-wrapper ">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true">Description</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">Reviews</button>
                  </li>
                </ul>
              </div>              
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
              <h5>what's new:</h5>
              <span>-new pirate outfit</span><br/>
              <span>-new city you can see it</span><br/>
              <span>-new maissions devil cry update</span><br/><br/>
                  <p>this game have a huge world you can explore with a very good story vs templeres to save his peaple lets play assissate this monster and your peaple. </p>
                  <br/>
                  <p>this game have a lot of things you can be a pirate you can assissate your enemy searching for trsatures fighting enemys with swords yuo can what you need fishing a shark a very expensive story you can either get a lot of outfits for creater edeward knewy buy a new ship a new swords or guns to take templerthes grounds from them for your loyalty to your peaple go and play now this game you will have a lot of fun. </p>
                </div>
                <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                  <img src='assets/images/rating.png'style={{width:"144px" , height:"135px",marginTop:"-8px",marginBottom:"-4",marginRight:"7px" }}></img><span>@Ahmed_eltansawy : </span>
                  <p>- I loved this game the gameplay is fantistic the big world is very good and have alot of activites the story is very good i loved the story but one thing i didn't like is i can't fast travel to go from place to anther place you must go with your ship to go yo your destination but any thing other in the game is very good and perfect and the offer to the game is cool his price is good nothing else. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Moreinfo