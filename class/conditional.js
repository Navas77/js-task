



// conditional stmt-if,if..else,if else if...else,switch

// if(condtion){
//     console.log();
    
// }


// // if..else

// if(condition){
//     console.log();
    
// }
// else{
//     console.log();
    
// }



// // if else if else-multiple condition

// if(condition){
//     console.log();
    
// }
// else if(condition){
//     console.log();
    
// }

// else{
//     console.log();
    
// }


// if example

let a=5;
let b=6;
if(a>b){
    console.log("a is greater");
    
}
else{
    console.log("b is greater");
    
}



// positive,negative,zero
const prompt=require('prompt-sync')()

let c=prompt("enter a number")

if(c>0){
    console.log("c is  a positive number");
    
}
else if(c<0){
    console.log("c is a negative number");

}
else{
    console.log("c is an zero number");
    
}


// switch-multion 

// switch(condition/exp){
//     case 1:
//         stmt
//         break;
//         case 2:
//             stmt;
//             break;
//             default:
//                 stmt
//                 break;
// }


    
let day=9;

switch(day){
    case 1:
        console.log("Monday");
        break;
        case 2:
            console.log("tuesday");
            break;
            case 3:
                console.log("wednesday");
                break;
                case 4:
                    console.log("thursady");
                    break;
                    case 5:
                        console.log("friday");
                        break;
                        default:
                            console.log("invalid day");
                            break;
                            
                    
                
            
        
}


