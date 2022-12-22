const GetLists = async (board_fid) => {
  const data = {
    board_fid
  };
  const BaseUrl = process.env.REACT_APP_GET_LISTS_URL;
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

export default GetLists;
