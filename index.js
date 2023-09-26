async function connect() {
  console.log("king clicked connect");

  if (typeof window.ethereum !== "undefined") {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      document.getElementById("connectButton").innerHTML = "Connected!";
    } catch (error) {
      console.log(error);
      document.getElementById("connectButton").innerHTML =
        "Please install metamask!";
    }
  }
}
