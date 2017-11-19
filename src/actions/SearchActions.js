import { NUMBER_CHANGED,
         NUMBER_LOOKUP} from './types';


export const numberChanged = (text) => {
    return {
        type: NUMBER_CHANGED,
        payload: text
    };
};

export const numberLookup = ({number}) => {
    return (dispatch) => {
        console.log(number);
        const url = `http://10.0.2.2:8000/api/products/detail/${number}/`;
        console.log(url);
        fetch(url, {
            method: "GET",
        })
        .then((response) => response.json())
        .then((answer) => {
            console.log('Hallo' + answer);
            dispatch({ type: NUMBER_LOOKUP, payload: answer});
        })
        .done();
    };
};
