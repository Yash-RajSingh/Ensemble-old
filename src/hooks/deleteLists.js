const DeleteList = async (luid) => {
  const Data = {
    luid,
  };
  const BaseUrl = process.env.REACT_APP_DELETE_LISTS_URL;
  try {
    const request = await fetch(BaseUrl, {
      method: "DELETE",
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

export default DeleteList;
