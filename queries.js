db.address.find({})
db.address.aggregate([{$project: {"restaurant_id":1,"name":1, "borough":1,"cuisine":1}}])
db.address.aggregate([{$project: {"restaurant_id":1,"name":1, "borough":1,"cuisine":1, "_id":0}}])
db.address.aggregate([{$project: {"restaurant_id":1,"name":1, "borough":1,"address.zipcode":1, "_id":0}}])
db.address.find({"borough":"Bronx"});
db.address.find({"borough":"Bronx"}).limit(5)
db.address.find({"borough":"Bronx"}).skip(5).limit(5)
db.address.find({"grades.score":{"$gt":90}})
db.address.find({"grades.score":{"$gt":80, "$lt":100}})    
db.address.find({"address.coord.0":{"$lt":-95.754168}})
db.address.find({"$and":[{"cuisine":{"$ne":"American"}},{"grades.score":{"$gt":70}},{"address.coord.0":{"$lt":-65.754168}}]})
db.address.aggregate([{"$match":{"cuisine":{"$ne":"American"},"grades.score":{"$gt":70},"address.coord.0":{"$lt":-65.754168}}}])
db.address.find({"$and":[{"cuisine":{"$ne": "American"}},{"grades.grade": "A"},{"borough":{"$ne":"Brooklyn"}}]}).sort({"borough":-1})
db.address.find({"name":{"$regex": "^Wil"}},{"restaurant_id":1, "name":1, "borough":1, "cuisine":1} )
db.address.find({"name":{"$regex": "ces$"}},{"restaurant_id":1, "name":1, "borough":1, "cuisine":1} )
db.address.find({"name":{"$regex": 'Reg'}},{"restaurant_id":1, "name":1, "borough":1, "cuisine":1} )
db.address.find({"$and":[{"borough": "Bronx"},{"$or":[{"cuisine":"American"},{"cuisine":"Chinese"}]}]})
db.address.find({"borough":{"$in":["Staten Island","Queens","Bronx","Brooklyn"]}},{"restaurant_id":1, "name":1,"borough":1, "cuisine":1})
db.address.find({"borough":{"$not":{"$in":["Staten Island","Queens","Bronx","Brooklyn"]}}},{"restaurant_id":1, "name":1,"borough":1, "cuisine":1})
db.address.find({"grades.score":{"$not":{"$gt":10}}},{"restaurant_id":1, "name":1,"borough":1, "cuisine":1})
db.address.find({"grades.score":{"$not":{"$gt":10}}},{"restaurant_id":1, "name":1,"borough":1, "cuisine":1, "grades.score":1} )
db.address.find({"cuisine": "Seafood", "name":{"$not":{"$regex": '^Wil'}}}, {"restaurant_id":1, "name":1, "borough":1, "cuisine":1})
db.address.find({"grades.date":ISODate("2014-08-11T00:00:00Z"),"grades.grade":"A","grades.score":11},{"restaurant_id":1, "name":1, "grades":1})
db.address.find({"grades.1.grade":"A","grades.1.score":9, "grades.1.date": ISODate("2014-08-11T00:00:00Z")},{"restaurant_id":1, "grades":1} )
db.address.find({"address.coord.1":{"$gt":42, "$lte":52} },{"restaurant_id":1,"name":1,"address":1}   )
db.address.find({}).sort({"name":1})
db.address.find({}).sort({"name":-1})
db.address.find({}).sort({"cuisine":1,"borough":-1})             
db.address.find({"address.coord":{"$type":"double"}})     
db.address.find({"grades.score":{"$mod": [7,0]}}, {"restaurant_id":1, "name":1, "grades":1}).pretty()
db.address.find({"name":{"$regex":'mon'}},{"name":1,"borough":1,"cuisine":1,"coord.0":1,"coord.1":1})
db.address.find({"name":{"$regex":'^Mad'}},{"name":1,"borough":1,"cuisine":1,"coord.0":1,"coord.1":1})