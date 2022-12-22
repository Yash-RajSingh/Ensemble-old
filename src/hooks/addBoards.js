const AddBoard = async (title, description, token, creator_id) => {
  const Data = {
    title,
    description,
    token,
    creator_id
  };
  const BaseUrl = process.env.REACT_APP_ADD_BOARDS_URL;
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

export default AddBoard;
