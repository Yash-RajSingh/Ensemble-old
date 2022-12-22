const GetBoards = async (uid, token) => {
  const data = {
    uid,
    token,
  };
  const BaseUrl = process.env.REACT_APP_GET_BOARDS_URL;
  try {
    const request = await fetch(BaseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await request.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default GetBoards;
