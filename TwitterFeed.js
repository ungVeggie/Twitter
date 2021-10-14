import React, { useState, useEffect } from 'react';
import TweetList from './TweetList';
import API from '../api';
import Compose from './Compose';


function TwitterFeed(props) {
    const [tweets, setTweets] = useState(null);
    const [feed, setFeed] = useState(
        <div className="fa-10x has-text-centered">
            <i className="fas fa-spinner fa-spin" />
        </div>
    )
    let bool = false;

    useEffect(() => {
        (async () => {
            console.log('changed')
            console.log("fetching tweets")
            let data = await API.index();
            setTweets(data.data);
        })();
    }, []);

    window.addEventListener('DOMContentLoaded', async (event) => {
        let timeline = document.querySelector("#timeline");
        let bool = false;

        timeline.onscroll = (e) => {
            if (!bool) {
                timeline.scrollTop = 2;
                bool = !bool;
            }
        }
    });

    return (
        <div className="content" style={{ marginTop: "0px", paddingTop: "0px" }}>
            <div className="block">
                {feed}
                <Compose pushTweet={async (tweet) => {
                    console.log("pushing new tweet")
                    setTweets(list => list.push(tweet));
                }} />
                <div
                    className="content"
                    style={{ overflow: "auto", maxHeight: "500px" }}
                    id="timeline"
                >
                    <TweetList
                        tweets={tweets}
                        deleteTweet={async (id) => {
                            await API.delete(id);
                            setTweets((list) => list.filter(tweet => tweet.id !== id))
                        }}
                        updateTweet={async (id, message) => {
                            let new_tweet = await API.update(id, message);
                            setTweets((list) => list.filter((tweet) => tweet.id === id)[0] = new_tweet);
                        }}
                        setFeed={setFeed}
                    />
                </div>
            </div>
        </div>
    )
}

export default TwitterFeed;