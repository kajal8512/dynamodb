// routes/users.js
const express = require("express")

const {createOrUpdateUser, getAllUsers, getUser, deleteUser}=require("./index")
const router = express.Router()

// GET ALL USERS
router.get('/users', async (req, res) => {
  const { success, data } = await getAllUsers()
  if (success) {
    return res.json({ success, data })
  }
  return res.status(500).json({ success: false, message: 'Error Occured !!!'})
});

// GET USER WITH ID
router.get('/users/:id', async (req, res) => {
  const { id } = req.params
  const { success, data } = await getUser(id)
  if (success) {
    return res.json({ success, data })
  }
  return res.status(500).json({ success: false, message: 'Error Occured !!!'})
});

// CREATE NEW USER
router.post('/users', async (req, res) => {
  const { success, data } = await createOrUpdateUser(req.body)
  if (success) {
    return res.json({ success, data })
  }
  return res.status(500).json({ success: false, message: 'Error Occured !!!'})
});

// UPDATE EXISTING USER
router.put('/users/:id', async (req, res) => {
  const user = req.body
  const { id } = req.params
  user.id = id

  const { success, data } = await createOrUpdateUser(user)
  if (success) {
    return res.json({ success, data })
  }
  return res.status(500).json({ success: false, message: 'Error Occured !!!'})
});

// DELETE USER
router.delete('/users/:id', async (req, res) => {
  const { id } = req.params
  const { success, data } = await deleteUser(id)
  if (success) {
    return res.json({ success, data })
  }
  return res.status(500).json({ success: false, message: 'Error Occured !!!'})
});

module.exports = router