import { createStore } from 'redux'
import images from './Players images/images';

const initialState = {
    jugadores: [{
        id: 1,
        nombre: "Cristiano",
        foto: images.img1,
    },
    {
        id: 2,
        nombre: "Messi",
        foto: images.img2,
    },
    {
        id: 3,
        nombre: "Mbappe",
        foto: images.img3,
    },
    {
        id: 4,
        nombre: "James",
        foto: images.img4,
    },
    {
        id: 5,
        nombre: "Cavani",
        foto: images.img5,
    },
    {
        id: 6,
        nombre: "G. Bale",
        foto: images.img6,
    },
    {
        id: 7,
        nombre: "Marcelo",
        foto: images.img7,
    },
    {
        id: 8,
        nombre: "Pepe",
        foto: images.img8,
    },
    {
        id: 9,
        nombre: "S. Ramos",
        foto: images.img9,
    },
    {
        id: 10,
        nombre: "Piqué",
        foto: images.img10,
    },
    {
        id: 11,
        nombre: "M. Neuer",
        foto: images.img11,
    },
    {
        id: 12,
        nombre: "K. Navas",
        foto: images.img12,
    },
    {
        id: 13,
        nombre: "Bonucci",
        foto: images.img13,
    },
    {
        id: 14,
        nombre: "Cuadrado",
        foto: images.img14,
    },
    {
        id: 15,
        nombre: "Suarez",
        foto: images.img15,
    },
    {
        id: 16,
        nombre: "Hummels",
        foto: images.img16,
    }],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {
    if (action.type === 'AGREGAR_TITULAR') {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }
    if (action.type === 'AGREGAR_SUPLENTE') {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }
    if (action.type === 'QUITAR_TITULAR') {
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }
    if (action.type === 'QUITAR_SUPLENTE') {
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }
   return state
}

export default createStore(reducerEntrenador)