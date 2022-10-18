export const createUser = jest.fn(() => {
    console.log('Estoy en mock')
    return Promise.reject({code : 'auth/invalid-email'})
})

export const signGoogle = () => Promise.resolve();

