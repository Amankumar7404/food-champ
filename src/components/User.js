import React, { useState } from "react";

const User = () => {
  const [count] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    // API Calls
  });
  return (
    <div className="user-card">
      <h2>Name: Aman</h2>
      <h3>Location: Karnal</h3>
      <h4>Contact: 7988020681</h4>
    </div>
  );
};

export default User;
