import axios from "axios";
const instance=axios.create({
   
          baseURL:'http://localhost:8000/'
          // baseURL:"https://made4ever-admin.onrender.com/"

       
})
export default instance;