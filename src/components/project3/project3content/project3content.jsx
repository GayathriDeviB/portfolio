import React from "react";
import "./project3content.css";
import newsfeed1 from "../../../assets/images/newsfeed1.gif";
const Project3content = () => {
  return (
    <div className="project3_allcontent">
      <h1>NEWS FEED</h1>
      <div className="project3content_info">
        <img src={newsfeed1} alt="image" />
        <p>
          Feed is the constantly updating list of stories in the middle of your
          home page. Feed includes status updates, photos, videos, links, app
          activity and likes from people, Pages and groups that you follow on
          Facebook.Share to News Feed: Opens the post in a new window, allows
          you to add additional text to your message.
        </p>
      </div>
    </div>
  );
};
export default Project3content;
