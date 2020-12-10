export default function category_of_products(product){
    let categoryes = [product[0].category]
    let flag = true
    let product_category = [[product[0]]]
    for (let i = 1; i <product.length; i++){
        flag = true
        for (let j = 0; j <categoryes.length; j++){
            if (product[i].category == categoryes[j]){
                product_category[j].push(product[i])
                flag = false
                break;
            }
        }
        if (flag ==true){
            categoryes.push(product[i].category)
            product_category.push([product[i]])
        }       
    
    }
    return {
        categoryes,
        product_category
    }
}