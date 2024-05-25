import { useEffect,useState } from "react";

//its my customised hook
function useCurrencyInfo(currency){
  const [data, setdata] = useState({})
useEffect(() => {
fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.5.23/v1/currencies/${currency}.json`)
.then((res)=>res.json())
 .then((res)=>setdata(res[currency]))
}, [currency])
console.log(data);
return data;

}

export default useCurrencyInfo