```javascript
// Correct way to handle potential string values and increment using MongoDB update query
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { field: 1 } });
//Alternative solution to handle existing string values and convert to number for increment
db.collection('myCollection').updateOne({ _id: 1 }, {$set: {field: parseInt(field)}}, {upsert:true}).then(result => {
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { field: 1 } });
})
```