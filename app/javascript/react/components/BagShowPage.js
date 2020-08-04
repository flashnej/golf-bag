import React, { useState, useEffect } from "react"

const BagShowPage = (props) => {
  const [bag, setBag] = useState({})
  const id = props.match.params.id

  useEffect(() => {
    fetch(`/api/v1/bags/${id}`)
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          debugger
        }
      })
      .then((response) => response.json())
      .then((body) => {
        setBag(body);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  return (
    <div>
      <ul>
        <li>{bag.name}</li>
      </ul>
    </div>
  )
}

export default BagShowPage
