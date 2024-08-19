const { default: axios } = require("axios")

export const getServices = async() =>{
    try {
      const res = await axios.get(`http://localhost:5000/services`)
       if(res?.data){
        return res.data
       }
       else{
        throw new Error('first error')
       }


    } catch (error) {
         
        console.log(error)
    }
}