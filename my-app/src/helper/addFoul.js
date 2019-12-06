

const addFoul = (foulScore, strikeScore) => {
    if(strikeScore === 0){
    return (foulScore + 1);} else if(strikeScore === 1){
        return (strikeScore + 1), (foulScore + 1);} 
        else{
            return (foulScore + 1);
        }
    }


export default addFoul;