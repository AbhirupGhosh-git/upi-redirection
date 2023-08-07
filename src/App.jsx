import React, {useEffect} from "react";

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

useEffect(()=> {

const isFocused= () => {
let text;
if(document.hasFocus())
alert('Focused')
else
alert('Focus Lost')
}

setInterval(isFocused, 1)

}, [])

  return (
    <React.Fragment>
      <a href="upi://pay?pa=hrupam55@okaxis&pn=Rupam Hari&cu=INR&am=1.00&tn=Testing UPI Payment">
       1. Any UPI App - Whatsapp - Mode Removed
      </a>

      <p>Auto Complete: New Password</p>
      <input type="password" autoComplete="new-password" />
      <br />
      <p>Auto Complete: Default</p>
      <input type="password" />
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
