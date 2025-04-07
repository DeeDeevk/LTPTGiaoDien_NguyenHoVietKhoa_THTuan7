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

export const updateCustomerAPI = async(selectRow, newData) =>{
    try {
        const response = await fetch(`https://67e3688c2ae442db76d000dd.mockapi.io/customer/${selectRow.id}`,
            {
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newData)
            }
        );
        if(response.ok){
            console.log('Updated', await response.json());          
        }else{
            console.log("Update is failed");
            
        }
    } catch (error) {
        console.error("Lỗi update");
        
    }
}

