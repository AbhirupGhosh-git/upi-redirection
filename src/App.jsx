import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    let text = "Hello ";
    (async () => {
      const relatedApps = await navigator.getInstalledRelatedApps();
      console.log(relatedApps);
      relatedApps.forEach((app, i) => {
        console.log(i, ":", app.id, app.platform, app.url);
        text += app.id;
      });
    })();
    setData(text);
  }, []);

  return (
    <React.Fragment>
      <a href="upi://pay?pa=upiaddress@okhdfcbank&pn=JohnDoe&cu=INR">
        Any UPI App
      </a>
      <br />
      <a href="tez://upi/pay?pa=upiaddress@okhdfcbank&pn=JohnDoe&cu=INR">
        Tez (Gpay)
      </a>
      <br />
      <a href="gpay://upi/pay?pa=upiaddress@okhdfcbank&pn=JohnDoe&cu=INR">
        Gpay
      </a>
      <br />
      <a href="phonepe://pay?pa=upiaddress@okhdfcbank&pn=JohnDoe&cu=INR">
        PhonePe
      </a>
      <br />
      <a href="paytmmp://pay?pa=upiaddress@okhdfcbank&pn=JohnDoe&cu=INR">
        PayTm
      </a>
      <br />
      <a href="amzn1://pay?pa=upiaddress@okhdfcbank&pn=JohnDoe&cu=INR">
        Amazon Pay
      </a>
      <p>{data}</p>
    </React.Fragment>
  );
};

export default App;
