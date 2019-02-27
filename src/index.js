module.exports = function check(str, bracketsConfig) {
  // your solution
  let expList = [];
    if(str.length % 2 === 1){
        return false;
    }

    let config = [...bracketsConfig];

    for(let i = 0; i < str.length; i++){
        let start = "", expected = "";
        start = str[i];
        if(isOpen(start) == 1){
            expected = getExpected(start);
            expList.unshift(expected);
        } else if (isOpen(start) == 2) {
            if(expList.length >= 1 && expList[0] == start){
                expList.shift(start);
            } else {
                return false;
            }
        } else {
            if(!expList.includes(start)){
                expList.unshift(start);
            } else {
                if (expList[0] == start){
                    expList.shift(start);
                } else {
                    return false;
                }
            }
        }

    }

    return expList.length == 0;

    function isOpen(brace){
        let result = 2;
        for(let i = 0; i < config.length; i++){
            if(config[i][0] == brace){
                if(config[i][0] == config[i][1]){
                    return 3;
                }
                return 1;
            }
        }
        return 2;
    }

    function getExpected(brace) {
        let expected = "";
        for(let j = 0; j < config.length; j++){
            if(brace == config[j][0]){
                expected = config[j][1];
                break;
            }
        }
        return expected;
    }
}
