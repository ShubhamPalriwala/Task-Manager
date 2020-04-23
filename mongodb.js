const mongodb=require('mongodb')
const MongoClient= mongodb.MongoClient
const ObjectID=mongodb.ObjectID

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'

MongoClient.connect(connectionURL, {useUnifiedTopology: true}, (error,client)=>{
  if(error){
    return console.log('Unable tp connect')
  }

  const db=client.db(databaseName)

  const updatePromise=db.collection('users').updateOne({
    _id: new ObjectID("5e9cb92923233630080bbb87")

  }, {
    $set:{
      name: 'New friend'
    }
  })
  updatePromise.then((result)=>{
    console.log(result)
  }).catch((error)=>{
    console.log(error)    
  })
})
