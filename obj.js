function recursionCompactObject(obj) {
    for (let i = 0; i < Object.keys(obj).length;) {
        const key=Object.keys(obj)[i];
        if (typeof obj[key] == 'object' && obj[key]) {
              recursionCompactObject(obj[key]);
             if(Object.keys(obj[key]).length == 0){
                if(Array.isArray(obj)){
                    obj.splice(key, 1);
                }else{
                    delete obj[key];
                }
             }else{
                i++;
             }
        }else if (!Boolean(obj[key])) {
            if (Array.isArray(obj)) {
                obj.splice(key, 1);
            } else {
                delete obj[key];
            }
        }else{
            i++;
        }

    }


    return obj;
}

const testa=[0,null,false,1];
const testb={"a":null,"b":[false,1]};
const testc=[null,0,5,[0],[false,16]];
const testd=[null,0,5,[0],[false,16],{}];

const a = recursionCompactObject(testd)

console.log(a);