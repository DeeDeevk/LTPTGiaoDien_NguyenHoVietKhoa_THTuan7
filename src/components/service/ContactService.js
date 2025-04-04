export const getCustomerAPI = async() =>{
    try{
        const response = await fetch('https://67e3688c2ae442db76d000dd.mockapi.io/customer');
        if(response.ok){
            return await response.json();
        }
        return [];
    }catch(error){
        console.error("Lỗi nè");
        return [];
    }
}