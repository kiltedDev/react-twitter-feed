import React from 'react';

const Tweet = props => {
  let date = new Date(+props.timestamp).toDateString().split(' ');

  let favoriteClassName;

  if (props.favorited) {
    favoriteClassName = "red-text";
  } else {
    favoriteClassName = "";
  }

  let retweetClassName;

  if (props.retweeted) {
    retweetClassName = "green-text";
  } else {
    retweetClassName = "";
  }

  let imgDiv;

  if (props.tweetImgUrl){
    imgDiv = <img src= {props.tweetImgUrl}/>
  }

  return(
    <div className = "row box">
      <div className = "small-8 small-centered columns tweetbox">
        <div className = "row allContent">
          <div className = "small-2 columns">
            <img src= {props.profileImgUrl}/>
          </div>
          <div className = "small-10 columns">

            <div className = "row">
              <div className = "small-10 end columns">
                <ul>
                  <li>
                    {props.userName}
                  </li>
                  <li className = "grey-text">
                    @{props.screenName}
                  </li>
                  <li className = "grey-text">
                    {props.timestamp}
                  </li>
                </ul>
              </div>
            </div>

            <div className ="row">
              <div className = "small-12 columns">
                <p className = "tweettext"> {props.text}</p>

              </div>
              <p className = "imagePicture">
                {imgDiv}
              </p>
            </div>

            <div className = "row">
              <div className = "small-8 columns">
                <ul>
                  <li>
                    <i className="fa fa-reply" aria-hidden="true" onClick={props.replyAlert}></i>
                  </li>
                  <li>
                    <div className={retweetClassName}>
                      <i className="fa fa-retweet" aria-hidden="true" onClick={props.retweetAlert}> {props.retweetCount}</i>
                    </div>
                  </li>
                  <li>
                    <div className={favoriteClassName}>
                      <i className="fa fa-heart" aria-hidden="true" onClick={props.likeAlert}> {props.favoriteCount}</i>
                    </div>
                  </li>
                  <li>
                    <i className="fa fa-ellipsis-h" aria-hidden="true" onClick={props.moreAlert}></i>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
