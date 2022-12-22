const HandleLogin = async (email, password) => {
  const userData = {
    email,
    password
  };
  const BaseUrl = process.env.REACT_APP_LOGIN_URL;
  try {
    const request = await fetch(BaseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const response = await request.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default HandleLogin;
