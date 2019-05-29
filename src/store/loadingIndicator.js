// Middleware to display a basic 'loading' indicator when making api calls

const loadingIndicator = store => next => action => {

    console.log(action)
    
    if (action.type && action.type.includes('REQUEST')) {

    }
    return next(action)
}

export default loadingIndicator;