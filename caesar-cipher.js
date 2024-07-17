const args = process.argv.slice(2);
const withoutEnc=[...args[0]];
const encNum=Number(args[1]);

const final=withoutEnc.map((letter,index) => {
            let letterPos=withoutEnc[index].charCodeAt(0);
                // for encripting only capital letters
            if (letterPos>=65 && letterPos<=90){
                if (letterPos+encNum>=65 && letterPos+encNum<=90){
                    return justMove();
                }
                else if (letterPos+encNum>90){
                    return moveToStart2(65,90)
                }
                else if(letterPos+encNum<65){
                    return moveToEnd(65,90);
                }
            }
            //for encripting also small letters
            else if(letterPos>=97 && letterPos<=122){
                if (letterPos+encNum>=97 && letterPos+encNum<=122){
                    return justMove();
                }
                else if(letterPos+encNum>122){
                    return moveToStart2(97,122);
                }
                else if(letterPos+encNum<97){
                    return moveToEnd(97,122);
                }
            }
            
                // for encripting numbers
            else if (letterPos>=48 && letterPos<=57){
                if (letterPos+encNum>=48 && letterPos+encNum<=57){
                    return justMove();
                }
                else if (letterPos+encNum>57){
                    return moveToStart2(48,57)
                }
                else if (letterPos+encNum<48){
                    return moveToEnd(48,57);
                }
            }
            // the next four sections are for encripting other characters and symbols
            // section 1 
            else if (letterPos>=33 && letterPos<=47){
                if (letterPos+encNum>=33 && letterPos+encNum<=47){
                    return justMove();
                }
                else if (letterPos+encNum>47){
                    return moveToStart2(33,47);    
                }
                else if (letterPos+encNum<33){
                    return moveToEnd(33,47);
                }
            }
            // section 2
            else if (letterPos>=58 && letterPos<=64){
                if (letterPos+encNum>=58 && letterPos+encNum<=64){
                    return justMove();
                }
                else if (letterPos+encNum>64){
                    return moveToStart2(58,64);
                }
                else if (letterPos+encNum<58){
                    return moveToEnd(58,64);
                }
            }
            // section 3
            else if (letterPos>=91 && letterPos<=96){
                if (letterPos+encNum>=91 && letterPos+encNum<=96){
                    return justMove();
                }
                else if (letterPos+encNum>96){
                    return moveToStart2(91,96)    
                }
                else if (letterPos+encNum<91){
                    return moveToEnd(91,96)
                }
            }
            //section 4
            else if (letterPos>=123 && letterPos<=127){
                if (letterPos+encNum>=123 && letterPos+encNum<=127){
                    return justMove();
                }
                else if (letterPos+encNum>127){
                    return moveToStart2(123,127);    
                }
                else if (letterPos+encNum<123){
                    return moveToEnd(123,127);
                }
             }
    
    //this section is for things that dont need encription 
            else if (letterPos>=0 && letterPos<=32){
            return withoutEnc[index];
            }
             function justMove(){
            return String.fromCharCode(letterPos+encNum);
            }
            function moveToStart2(start,end){
                    let counter=end - letterPos ;
                    let differnz= encNum-counter;
                    letterPos = start -1 +differnz;
                    return String.fromCharCode(letterPos);
            }
            function moveToEnd(start,end){
                    let counter=letterPos-start ;
                    let differnz= -encNum-counter;
                    letterPos = end+1-differnz;
                    return String.fromCharCode(letterPos);
            }
});
console.log(final.join(""));
