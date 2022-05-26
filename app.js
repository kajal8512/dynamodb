const AWS = require("aws-sdk")

var dynamoDB = new AWS.DynamoDB.DocumentClient({
    region:"ap-south-1",
    accessKeyId:"AKIA4ZRGSVQLNKNMPKHH",
    secretAccessKey:"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"
});

const TABLE_NAME = 'users';
module.exports={
    createOrUpdateUser,
    getAllUsers,
    getUser,
    deleteUser
  }

  // CREATE OR UPDATE USER
  const createOrUpdateUser = async (data = {}) => {
    const params = {
      TableName: TABLE_NAME,
      Item: data
    }
    try {
      await dynamoDB.put(params).promise()
      return { success: true }
    } catch(error) {
      return { success: false }
    }
  }

  // READ ALL USERS
  const getAllUsers = async () => {
    const params = {
      TableName: TABLE_NAME,
    }
    try {
      const { Items = [] } = await dynamoDB.scan(params).promise()
      return { success: true, data: Items }
    } catch(error) {
      return { success: false, data: null }
    }
  }

  // READ SINGLE USER ON KEY(id)
  const getUser = async (value, key = 'id') => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        [key]: value,
      },
    }
    try {
      const { Item = {} } = await dynamoDB.get(params).promise()
      return { success: true, data: Item }
    } catch(error) {
      return { success: false, data: null }
    }
  }

  // Delete Existing User
  const deleteUser = async (value, key = "id") => {
    const params = {
      TableName: TABLE_NAME,
      Key: {
        [key]: value,
      },
    }
    try {
      await dynamoDB.delete(params).promise()
      return { success: true }
    } catch(error) {
      return { success: false }
    }
  }

