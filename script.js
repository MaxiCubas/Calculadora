const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const ERROR2 = document.getElementById('error2');
const sonido = new Audio('sonido.mp3')
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const MANTENIMIENTOFIRST= document.getElementById('mantenimientofirst');
const MANTENIMIENTOSECOND = document.getElementById('mantenimientosecond');
CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').valueAsNumber
    sonido.play();

    if (DATO>0 && DATO<=30){
        ERROR.style.display = 'none'
        ERROR2.style.display = 'none';
        let dosis = hollidaySegar(DATO);
        let mantenimiento = dosis*1.5;
        FLU.innerHTML = dosis + ' cc/hr';
        MAN.innerHTML = 'm+m/2:   '  +  mantenimiento  +   '    cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
        MANTENIMIENTOFIRST.style.display = 'none';
        MANTENIMIENTOSECOND.style.display = 'none';
    } else if (DATO>30 && DATO<=119){
        ERROR.style.display = 'none'
        ERROR2.style.display = 'none';
        let flujo = superficieCorporal(DATO);
        let mantenimientofirst = flujo.toFixed(2);
        let mantenimientosecond = flujo.toFixed(2);    
        MANTENIMIENTOFIRST.innerHTML = mantenimientofirst*1500 + ' con 1500 SC';
        MANTENIMIENTOSECOND.innerHTML = mantenimientosecond*2000 + ' con 2000 SC';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
        MANTENIMIENTOFIRST.style.display = 'block';
        MANTENIMIENTOSECOND.style.display = 'block';
    }else if (DATO >119){
        ERROR2.style.display = 'block';
        ERROR.style.display = 'none';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
        MANTENIMIENTOFIRST.style.display = 'none';
        MANTENIMIENTOSECOND.style.display = 'none';
    }
    
    else {
        ERROR.style.display = 'block';
        ERROR2.style.display = 'none';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
        MANTENIMIENTOFIRST.style.display = 'none';
        MANTENIMIENTOSECOND.style.display = 'none';
        }
        
})


function hollidaySegar(peso){
    let dosis;
    let resultado;
     let mantenimiento;
        if(peso > 20){
            resultado =(peso-20)*20
            dosis= resultado +1500
        }else if (peso <=20 && peso >10){
        
            resultado=(peso-10)*50
            dosis= resultado + 1000
        }else if (peso <=10){
            resultado=peso*100
            dosis= resultado
        }


        return mantenimiento= Math.round(dosis/24)   
    
}
    

function superficieCorporal(peso){
    
    flujo= (( (peso* 4) + 7) / (parseInt(peso) + 90));
    return flujo;
}
