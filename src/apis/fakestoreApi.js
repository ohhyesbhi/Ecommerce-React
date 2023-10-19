
export function getAllCtegories(){
    return `${import.meta.env.VITE_FAKE_STORE_URL}/products/categories`
}


export function productDetails(id){
    return `${import.meta.env.VITE_FAKE_STORE_URL}/products/${id}`
}

export function getAllProducts(){
    return `${import.meta.env.VITE_FAKE_STORE_URL}/products`
}

export function getParticularCategory(category){
    return `${import.meta.env.VITE_FAKE_STORE_URL}/products/category/${category}`
}

export function signUp(){
    return 
}