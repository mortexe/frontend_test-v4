import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Tag from './Tag.jsx';
import LikeIcon from './LikeIcon.jsx';

export default function Video(props) {
  return (
    <li>
      <h3>{props.data.title}</h3>
      <div className="thumbnail-wrapper">
        <LazyLoadImage
          loading="lazy"
          className="video-thumbnail"
          effect="blur"
          src={props.data.thumbnail_url}
        />
        <div className="rating-wrapper">
          <LikeIcon />
          <p>{props.data.rating ? props.data.rating : 'xxx'}</p>
        </div>
      </div>
      <div className="video-footer">
        <div className="tag-list">
          {props.data.tags.map((item, index) => {
            return <Tag key={index} name={item} />;
          })}
        </div>
        <p id="video-posttime">
          {new Date(props.data.posttime).toLocaleString()}
        </p>
      </div>
    </li>
  );
}
