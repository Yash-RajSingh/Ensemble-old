const AddList = async (board_fid, name, color_code, token) => {
  const Data = {
    board_fid,
    name,
    color_code,
    token
  };
  const BaseUrl = process.env.REACT_APP_ADD_LISTS_URL;
  try {
    const request = await fetch(BaseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Data),
    });
    const response = await request.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default AddList;
