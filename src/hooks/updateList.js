const UpdateList = async (luid, name, color_code) => {
  const Data = {
    luid,
    name,
    color_code,
  };
  const BaseUrl = process.env.REACT_APP_UPDATE_LISTS_URL;
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

export default UpdateList;
