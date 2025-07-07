export const changeLang = newLang => {
    return {
        type: 'locale/changeLang',
        payload: newLang,
    }
}

const localeInitialState = {
       lang: 'en',
    }

 
 export const localeReducer = (state = localeInitialState, action) =>{
    console.log(action)
                switch(action.type) {
                    case 'locale/changeLang':
                return {
                    ...state,
                       lang: action.payload,
                    }
            default:
                return state;
                }
            };