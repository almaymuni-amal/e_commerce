// commerce was installed previously
import Commerce  from "@chec/commerce.js";

// we need public key from commercejs.com after signing up
//to make it work install dotenv package
//restart server
export const commerce= new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY,true);