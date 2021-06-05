//Desestructuracion
interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

const autor = 'Fulano';

const {volumen: vol, segundo, cancion, detalles:{autor: autorDetalle}} = reproductor;
//const {autor, anio} = detalles;

// console.log('El volumen actual de: ', vol);
// console.log('El segundo actual de: ', segundo);
// console.log('La canción actual de: ', cancion);
// console.log('El autor actual de: ', autorDetalle);

//Desestructurar arreglos
const dbz:string[] = ['Goku','Vegeta','Trunks'];
const[,,p3] = dbz;

// console.log('Pesonaje 1:', p1);
// console.log('Pesonaje 2:', p2);
console.log('Pesonaje 3:', p3);