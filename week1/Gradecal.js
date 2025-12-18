 function score(Mark){
    switch(true){
        case(Mark >=90) :
        return("Grade A")
break;
        case(Mark >= 70) :
        return("Grade B")
break;
        case(Mark >=60) :
        return("Grade C")
        break;
        default:
            return("Grade D")
    }

 }
 console.log(score(50))