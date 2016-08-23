let helpers = {

    rando (arr){
        return arr[Math.floor(Math.random() * arr.length)];
    },

    getFunNames () {

        names =['hamza' ,'ahmed', 'ghulam', 'abbas']
        console.log("maths "+names[(Math.random() * 10) + 1])
        return `${this.rando(names)}`;
    }

}
export default helpers;