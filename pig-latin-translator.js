const args = process.argv.slice(2);
const pl = args.map(x=> x.split(""))
const letters = /^[A-Za-z]+$/;
let uppercase=true;
const final=pl.map(((word,index)=>{
    if (pl[index][0].match(letters) && pl[index][1].match(letters)){
        const checker = ["a", "e", "i", "o", "u","A","E","I","O","U"];
        if (!checker.includes(pl[index][0]) && checker.includes(pl[index][1])){
           if(pl[index][0] == pl[index][0].toLowerCase()){
            uppercase=false;
           }else{
            pl[index][0]=pl[index][0].toLowerCase();
            uppercase=true;
           }
            const new1 =pl[index].shift();
            pl[index].push(new1[0]);
            pl[index].push("a","y");
            if(uppercase){pl[index][0]=pl[index][0].toUpperCase()}
            return pl[index].join("");
            
        }else if (!checker.includes(pl[index][0]) && !checker.includes(pl[index][1])){
            if(pl[index][0] == pl[index][0].toLowerCase()){
             uppercase=false;
            }else{
             pl[index][0]=pl[index][0].toLowerCase();
             uppercase=true;
            }
             const new1 =pl[index].shift();
             pl[index].push(new1[0]);
             const new2 =pl[index].shift();
             pl[index].push(new2[0]);
             pl[index].push("a","y");
             if(uppercase){pl[index][0]=pl[index][0].toUpperCase()}
             return pl[index].join("");
             
         }else if (checker.includes(pl[index][0]) && checker.includes(pl[index][1])){
             pl[index].push("way");
             return pl[index].join("");
             }
    }else{
        return pl[index].join("");
    }
}));

console.log(final.join(" "));
