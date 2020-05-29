export default function logger({ dispatch, getState }) {
    return next => action => {
        console.log(action);
        console.log(getState())

        return next(action);
    };
}