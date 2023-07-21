import React from "react";

const App = () => {
  // const redirectApp = (e) => {
  //   console.log(e.target.id);

  //   const appURLs = {
  //     paytm: "paytmmp://pay?pa=9163608399@ybl&pn=Abhirup&cu=INR&am=1",
  //     gpay: "gpay://upi/pay?pa=upiaddress@okhdfcbank&pn=JohnDoe&cu=INR",
  //     phonepe: "phonepe://pay?pa=upiaddress@okhdfcbank&pn=JohnDoe&cu=INR",
  //     amazon: "amazon://pay?pa=upiaddress@okhdfcbank&pn=JohnDoe&cu=INR",
  //   };
  //   setTimeout(() => {
  //     window.location =
  //       "https://play.google.com/store/apps/details?id=net.one97.paytm";
  //   }, 100);
  //   window.location = appURLs[e.target.id];
  // };

  return (
    <React.Fragment>
      <a href="upi://pay?pa=9163608399@ybl&pn=Abhirup Ghosh&cu=INR&am=1&tn=Testing UPI Payment&mode=04">
        Any UPI App
      </a>
      {/* <br />
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
      <a href="amazon://pay?pa=upiaddress@okhdfcbank&pn=JohnDoe&cu=INR">
        Amazon Pay
      </a>

      <br />
      <br />
      <br />

      <p>App List</p>
      <div onClick={redirectApp}>
        <p id="amazon">Amazon</p>
        <p id="gpay">Gpay</p>
        <p id="phonepe">PhonePe</p>
        <p id="paytm">Paytm</p>
      </div> */}
    </React.Fragment>
  );
};

export default App;
