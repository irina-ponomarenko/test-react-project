import React, { useRef } from "react";


const Admin = () => {

  let refTitle = useRef();
  let refLink = useRef();

  let handleSaveMenu = (event) => {
    event.preventDefault();

    let createTitles = {
      title: refTitle.current.value.trim(),
      linkTitle: refTitle.current.value.trim(),
    };

    fetch('/api/create-menu', {

      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(createTitles),
      method: 'POST'

    });
  };

  return(
    <div className="container" onSubmit={handleSaveMenu}>
      <form className="info-menu">
        <input type="text" ref={refTitle} placeholder="enter your title"/>
        <input type="text" ref={refLink} placeholder="enter your title's url"/>
        <button type="submit">Save</button>
      </form>

    </div>
  );
};

export default Admin;