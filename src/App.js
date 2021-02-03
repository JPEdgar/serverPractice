import React, { useEffect, useState } from "react";

function App() {
  const [tests, setTests] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // console.log(serverLoc);
  useEffect(() => {
    fetch("./server/data.json")
      .then((res) => res.json())
      .then(
        (data) => {
          setTests(data);
          console.log(tests);
        },
        (error) => {
          setLoading(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error</div>;
  } else if (!loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <img src="./test.jpg" alt="test" height="200" />
      </div>
    );
  }
}

export default App;
