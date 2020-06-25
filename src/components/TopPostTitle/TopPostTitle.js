import React from 'react';
import classes from './TopPostTitle.module.css';

const topPostTitle = (props) => {

  return (
    <div className={classes.TopPostTitle} onClick={props.clicked}>
      <div className={classes.box}>
        <p style={{fontWeight: 'bold'}}>{props.title}</p>
        <p style={{fontStyle: 'italic', color: 'gray'}}>{props.author}</p>
      </div>
    </div>
  );
}

export default topPostTitle;
