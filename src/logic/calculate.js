function calculate (leftOperand, rightOperand, operator) {
    if(leftOperand === '.'){
        leftOperand = '0';
    }
    if(rightOperand === '.'){
        rightOperand = '0';
    }
    const left = +leftOperand;
    const right = +rightOperand;
    switch(operator){
        case '+':
            return left + right;
        case '-':
            return left-right;
        case '*':
            return left * right;
        case '/':
            return left / right;
        default:
            return 0;

    }
}

export default calculate;