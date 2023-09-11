import users from '../axios/config'

const postUser = async (data) => {
    const url = '/users'
    await users.post(url, data)
        .catch(err => {
            console.log(err)
        })
}

const verifyUserExist = async (email, returnData = false) => {
    let userExist;
    const url = `/users?email=${email}`
    await users.get(url)
        .then(response => {
            userExist = response.data
        })
        .catch(err => console.log(err))

    if (returnData) {
        return userExist[0]
    }

    if (userExist.length == 0) {
        return false
    }
    return true
}

const handleShowError = (setShowError, setShowMessageError, messageError) => {
    setShowMessageError(messageError)
    setShowError(true)

    setTimeout(() => {
        setShowError(false)
    }, 5000)
}

const attDataUser = async (idUser, data) => {
    const url = `/users/${idUser}`
    await users.put(url, data)
        .catch(err => console.log(err))
}

const getData = () => {
    const today = new Date();

    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();

    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} - ${hours}:${minutes}`;
}

const handleCheckTask = async (idTask, dataUser, dispatch) => {
    let indexTask = dataUser.tasks.findIndex(task => task.id === idTask)

    dataUser.tasks[indexTask].isCompleted = !dataUser.tasks[indexTask].isCompleted

    dispatch({ type: 'user/update', payload: dataUser })

    await attDataUser(dataUser.id, dataUser)

}

const deleteTask = async (idTask, dataUser, dispatch) => {
    const indexTaskToRemove = dataUser.tasks.findIndex(task => task.id === idTask)

    dataUser.tasks.splice(indexTaskToRemove, 1)

    dispatch({ type: 'user/update', payload: dataUser })

    await attDataUser(dataUser.id, dataUser)
}

export {
    handleShowError,
    verifyUserExist,
    postUser,
    attDataUser,
    getData,
    handleCheckTask,
    deleteTask
}