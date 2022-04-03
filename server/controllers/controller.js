const houses = require('../db.json')

let globalId = 4

const getHouse = (req, res) => {
    res.status(200).send(houses)
}


const deleteHouse = (req, res) => {
    // let index = houses.findIndex(elem => elem.id === +req.params.id)
    //     houses.splice(index, 1)
    //     res.status(200).send(houses)

    const  HouseToBeDeletedID = +req.params.id
    
    for(let i = 0; i < houses.length; i++){
        const house = houses[i]
        if(house.id === HouseToBeDeletedID){
            houses.splice(i, 1)
            return res.status(200).send(houses)
        }
    }
}


const createHouse = (req, res) => {
    const { address, price, imageURL } = req.body
        const newHouse = {
            id: globalId,
            address, 
            price,
            imageURL
        }
        houses.push(newHouse)

        globalId++

        res.status(200).send(houses)
}


const updateHouse = (req, res) => {
    let { id } = req.params
        let { type } = req.body
        let index = houses.findIndex(elem => +elem.id === +id)

        if (houses[index].price <= 10000 && type === 'minus') {
            houses[index].price = 0
            res.status(200).send(houses)
        } else if (type === 'plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (type === 'minus') {
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else {
            res.sendStatus(400)
        }

    // const houseToBeUpdatedID = +req.params.id
    // const {type} = req.body

    // for(let i = 0; i < houses.length; i++){
    //     const house = houses[i]
    //     if(house.id === houseToBeUpdatedID){
    //         if(type === 'plus'){
    //             if(house.rating !== 5){
    //             house.rating++
    //             }
    //         } else {
    //             if (movie.rating !== 0){
    //             movie.rating--
    //             }
    //         }

    //         return res.status(200).send(movies)
    //         }
    //     }

    res.status(400).send(houses)

}


const exportObj = {
    getHouse,
    deleteHouse,
    createHouse,
    updateHouse,
}

module.exports = exportObj