export function dateFormat(valor) {
    const dV = valor.replaceAll('/','').split('');
    if(dV.length == 3){
      valor = `${dV[0]}${dV[1]}/${dV[2]}`
    }
    if(dV.length == 4){
      valor = `${dV[0]}${dV[1]}/${dV[2]}${dV[3]}`
    }
    if(dV.length == 5){
      valor = `${dV[0]}${dV[1]}/${dV[2]}${dV[3]}/${dV[4]}`
    }
    if(dV.length == 6){
      valor = `${dV[0]}${dV[1]}/${dV[2]}${dV[3]}/${dV[4]}${dV[5]}`
    }
    if(dV.length == 7){
      valor = `${dV[0]}${dV[1]}/${dV[2]}${dV[3]}/${dV[4]}${dV[5]}${dV[6]}`
    }
    if(dV.length >= 8){
      valor = `${dV[0]}${dV[1]}/${dV[2]}${dV[3]}/${dV[4]}${dV[5]}${dV[6]}${dV[7]}`
    }
    
    return valor;
  }

export function contatoFormat(valor){
    const dv = valor.replace(/\D/g, "");
    valor = dv;
    
    if(dv.length < 3){
        valor = `(${dv.substring(0, 2)}`;
    } else {
        if(dv.length < 7){
            valor = `(${dv.substring(0, 2)}) ${dv.substring(2, 6)}`;
        } else {
            if(dv.length < 11){
                valor = `(${dv.substring(0, 2)}) ${dv.substring(2, 6)}-${dv.substring(6, 10)}`;
            }else{
                if(dv.length < 12 || dv.length >= 12){
                    valor = `(${dv.substring(0, 2)}) ${dv.substring(2, 7)}-${dv.substring(7, 11)}`;
                }
            }
        }
    }

    return valor;    
}

export function clockFormat(valor){
    const dv = valor.replace(/\D/g, "");
    valor = dv;
    console.log(dv.length)
    
    if(dv.length < 2 && parseInt(dv) > 2){
        valor = `0${dv.substring(0,1)}`;
    }else{
        if(dv.length < 3 && parseInt(dv) > 23){
            valor = ``;
        }else{
            if(dv.length < 3){
                valor = `${dv.substring(0,2)}`;
            }    
            else{
                if(parseInt(dv.substring(2,3)) > 5){
                    valor = `${dv.substring(0,2)}`;
                }else{
                    if(dv.length < 5 || dv.length >=5 ){
                        valor = `${dv.substring(0,2)}:${dv.substring(2,4)}`;
                    }
                }
                
            }
        }
    }
    
    return valor
}