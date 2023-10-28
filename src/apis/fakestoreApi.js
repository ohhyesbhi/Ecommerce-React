
export function getAllCtegories(){
    return `${import.meta.env.VITE_FAKE_STORE_URL}/products/categories`
}


export function productDetails(id){
    return `${import.meta.env.VITE_FAKE_STORE_URL}/products/${id}`
}

export function getAllProducts(){
    return `${import.meta.env.VITE_FAKE_STORE_URL}/products`
}

export function getParticularProducts(id){
    return `${import.meta.env.VITE_FAKE_STORE_URL}/products/${id}`
}

export function getParticularCategory(category){
    return `${import.meta.env.VITE_FAKE_STORE_URL}/products/category/${category}`
}

export function signUp(){
    return `${import.meta.env.VITE_FAKE_STORE_URL}/users`;
}

export function sigin() {
    return `${import.meta.env.VITE_FAKE_STORE_URL}/auth/login`;
}

export function getCartByUser(userId){
    return `${import.meta.env.VITE_FAKE_STORE_URL}/carts/user/${userId}`
}

export function addProductToCart(){
    return `${import.meta.env.VITE_FAKE_STORE_URL}/carts`
}

export function addProductQuantity(){
    return `${import.meta.env.VITE_FAKE_STORE_URL}/carts/updateProduct`
}

 