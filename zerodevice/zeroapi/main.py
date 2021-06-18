from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
import pymongo

app = Flask(__name__)

client = pymongo.MongoClient('mongodb+srv://raul:3312@cluster0.pempn.mongodb.net/zero?retryWrites=true&w=majority')
db = client.zero
zeroUsers = db.zeroUsers

@app.route('/')
def holaMundo():
	return render_template("index.html")

@app.route('/add/<user>/<email>/<password>/', methods=['GET'])
def insertOne(user, email, password):
    queryObject = {
        'User': user,
        'Email': email,
        'Password': password
    }
    query = zeroUsers.insert_one(queryObject)
    return "query insertado"

@app.route('/getOne/<argument>/<value>/', methods=['GET'])
def findOne(argument, value):
    queryObject = {argument: value}
    query = zeroUsers.find_one(queryObject)
    query.pop('_id')
    return jsonify(query)

@app.route('/get/', methods=['GET'])
def findAll():
    query = zeroUsers.find()
    output = {}
    i = 0
    for x in query:
        output[i] = x
        output[i].pop('_id')
        i += 1
    return jsonify(output)

@app.route('/update/<key>/<value>/<element>/<updateValue>/', methods=['GET'])
def update(key, value, element, updateValue):
    queryObject = {key: value}
    updateObject = {element: updateValue}
    query = zeroUsers.update_one(queryObject, {'$set': updateObject})
    if query.acknowledged:
        return "Update Successful"
    else:
        return "Update Unsuccessful"

app.run(host='0.0.0.0', port=8080)