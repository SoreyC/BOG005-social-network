export const savePost = jest.fn(()=>{
    console.log('Moqueando publicación')
    return Promise.resolve({description:'Moqueando publicación', likes:0})
})

