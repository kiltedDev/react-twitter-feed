import React from 'react';
import Tweet from '../components/Tweet';

const TwitterFeed = (props) => {
  let twitterFeed = props.data.map((tweet) => {
    let replyAlert = () => alert("reply");

    let retweetAlert = () => alert("retweet");

    let likeAlert = () => alert("like");

    let moreAlert = () => alert("favorite");

    let tweetImg;
    let tweetImageDisplay;
    let tweetText = tweet.text;

    if (Object.getOwnPropertyNames(tweet.entities).length > 0){
      tweetImg = tweet.entities.media[0].media_url;
      tweetImageDisplay = tweet.entities.media[0].media_url;
      tweetText = tweetText.replace(` ${tweetImageDisplay}`,'');
    }


    let date = new Date(Number(tweet.timestamp_ms)).toString().split(" ")
    date = `${date[1]} ${date[2]}`

    return (
      <Tweet
      key = {tweet.id_str}
      text = {tweet.text}
      userName = {tweet.user.name}
      screenName = {tweet.user.screen_name}
      profileImgUrl = {tweet.user.profile_image_url}
      retweetCount = {tweet.retweet_count}
      favoriteCount = {tweet.favorite_count}
      favorited = {tweet.favorited}
      retweeted = {tweet.retweeted}
      timestamp = {date}
      tweetImgUrl = {tweetImg}
      tweetImgText = {tweetImageDisplay}
      replyAlert = {replyAlert}
      retweetAlert = {retweetAlert}
      likeAlert = {likeAlert}
      moreAlert = {moreAlert}
      />
    )})

  return (
    <div id="twitter-feed">
      {twitterFeed}
    </div>
  )
}

export default TwitterFeed;
