const Borrows = require('../models/borrow')
const messageHandler = require('../handler/messageHandler')
const bookService = require('../services/book.service')
const bookUnitService = require('../services/bookUnit.service')
const userService = require('../services/user.service')
const userIdentityService = require('../services/userIdentity.service')
const { tokenTranslate } = require('../utils/jwt.util')

const getAll = async (filter, details = false) => {
    try{
        var borrows = undefined
        if(details){
            borrows = await Borrows.find(filter).populate('userId').populate('bookUnit')
        }else{
            borrows = await Borrows.find(filter)
        }
        return messageHandler.ok(borrows)
    }catch(e){
        return e.message
    }
}

const getById = async (id, details = false) => {
    try{
        var borrow = undefined
        if(details){
            borrow = await Borrows.findById(id).populate('userId').populate('bookUnit')
        }else{
            borrow = await Borrows.findById(id)
        }
        if(!borrow){
            return messageHandler.notFound("Borrow Not Found")
        }
        return messageHandler.ok(borrow)
    }catch(e){
        return e.message
    }
}

const create = async (_borrow) => {
    try{
        //check user is true
        var user = await userService.getAll({username:_borrow.username})
        if(user.code != 200){
            return user //err message
        }
        const userIden = await userIdentityService.getAll({userAccID: user.id})
        if(userIden.code != 200){
            return userIden //err message
        }
        var bookUnit = await bookUnitService.getAll({_id:_borrow.bookUnit, isPrimary:false, isBusy:false})
        if(bookUnit.code != 200){
            return bookUnit //err message
        }
        if(bookUnit.message.length == 0){
            return "Can not Borrow. This Book is not Available now"
        }
        _borrow.isPickUp = true
        const borrow = await Borrows.create(_borrow)
        if(borrow){
            bookUnit = bookUnit.message[0]
            bookUnit.isBusy = true
            await bookUnit.save()
        }
        return messageHandler.created(borrow)
    }catch(e){
        return e.message
    }
}

const update = async (id, _borrow) => {
    try{
        const borrow = await Borrows.findById(id)
        if(!borrow){
            return messageHandler.notFound('Borrow Not Found')
        }
        if(_borrow.userId){
            const user = await userService.getById(_borrow.userId)
            if(user.code != 200){
                return user
            }
            borrow.userId = _borrow.userId
        }
        if(_borrow.bookUnit){
            console.log();
            const bookUnit = await bookUnitService.getById(_borrow.bookUnit)
            console.log(bookUnit);
            if(bookUnit.code != 200){
                return bookUnit
            }
            borrow.bookUnit = _borrow.bookUnit
        }
        borrow.reason = _borrow.reason ? _borrow.reason:borrow.reason
        borrow.pickUpDate = _borrow.pickUpDate ? _borrow.pickUpDate:borrow.pickUpDate
        borrow.duration = _borrow.duration ? _borrow.duration:borrow.duration
        borrow.status = _borrow.status ? _borrow.status:borrow.status
        borrow.returnDate = _borrow.returnDate ? _borrow.returnDate:borrow.returnDate
        borrow.isPickUp = _borrow.isPickUp ? _borrow.isPickUp:borrow.isPickUp
        await borrow.save()
        return messageHandler.ok(borrow)
    }catch(e){
        return e.message
    }
}

const remove = async (id) => {
    try{
        if(await Borrows.doesntExist({_id:id})){
            return messageHandler.notFound("Borrow Not Found")
        }
        await Borrows.deleteOne({_id:id})
        if(await Borrows.doesntExist({_id:id})){
            return messageHandler.conflict("Delete Fail")
        }
        return messageHandler.ok("Delete Successful")
    }catch(e){
        return e.message
    }
}

const userGetAll = async (token, details = false) => {
    try{
        const user = tokenTranslate(token)
        var borrows = undefined
        if(details){
            borrows = await Borrows.find({userId: user.id}).populate('userId').populate('bookUnit')
        }else{
            borrows = await Borrows.find({userId: user.id})
        }
        return messageHandler.ok(borrows)
    }catch(e){
        return e.message
    }
}

const userCreate = async (_borrow, _token) => {
    try{
        //get user id from token
        user = tokenTranslate(_token)
        // check user have Identity?
        const userIden = await userIdentityService.getAll({userAccID: user.id})
        if(userIden.code != 200){
            return userIden
        }
        //set data
        _borrow.userId = user.id
        //check is book id correct
        const book = await bookService.getById(_borrow.book)
        if(book.code != 200){
            return book
        }
        //if true randomly choose the above book unit for borrow
        var bookUnit = await bookUnitService.getAll({bookRef: book.message._id, isPrimary:false, isBusy:false})
        bookUnit = bookUnit?.message[0]
        //if no book unit. it can not borrow
        if(!bookUnit){
            return messageHandler.conflict("Can not Borrow. This Book is not Available now")
        }
        _borrow.bookUnit = bookUnit._id
        const borrow = await Borrows.create(_borrow)
        if(borrow){
            bookUnit.isBusy = true
            await bookUnit.save()
        }
        return messageHandler.created(borrow)
    }catch(e){
        return e.message
    }
}

const userCancelRequest = async (id, isCancel) => {
    try{
        var borrow = await Borrows.findById(id)
        if(borrow.isPickUp == true){
            return messageHandler.forbidden("Access Deny. Please return the book")
        }
        if(isCancel === "true" && borrow.status === "pending"){
            borrow.status = "cancel"
        }
        if(isCancel === "false" && borrow.status === "cancel"){
            borrow.status = "pending"
        }
        else{
            return messageHandler.forbidden()
        }
        await borrow.save()
        return messageHandler.ok(borrow)
    }catch(e){
        return e.message
    }
}

module.exports = {
    getAll,
    getById,
    userGetAll,
    create,
    userCreate,
    update,
    userCancelRequest,
    remove
}