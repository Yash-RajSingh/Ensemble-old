const DeleteBoard = async (buid) => {
  console.log("delete boards called");

  const Data ={
    buid
  }
  const BaseUrl = process.env.REACT_APP_DELETE_BOARDS_URL;
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

export default DeleteBoard;
