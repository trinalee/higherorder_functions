'use strict'
const expect = require('chai').expect
const higherOrderFunctions = require('../higherorder_functions')
describe('Higher order function map',() => {
  describe('Implements the map function',() => {
    it('returns a new array based on callback function',() => {
      let inputArray = [0,1,2,3]
      let higherOrderFunction =   new higherOrderFunctions()
      //init class here
      var result = higherOrderFunction.implementingMap(inputArray, function(x){return x*5})
      expect(result).to.eql([0,5,10,15])
    })
    it('returns a new array based on callback function',() => {
      let inputArray = [0,1,2,3]
      let higherOrderFunction =   new higherOrderFunctions()
      //init class here
      var result = higherOrderFunction.implementingMap(inputArray, function(x){return x+5*2})
      expect(result).to.eql([10,11,12,13])
    })
    it('returns when an empty array based on callback function',() => {
      let inputArray = []
      let higherOrderFunction =   new higherOrderFunctions()
      //init class here
      var result = higherOrderFunction.implementingMap(inputArray, function(x){return x+5*2})
      expect(result).to.eql([])
    })
  })
  describe('Implements the all function',() => {
    it('returns a boolean based on callback function',() => {
      let inputArray = [2,4,6]
      let higherOrderFunction =   new higherOrderFunctions()
      //init class here
      var result = higherOrderFunction.implementingAll(inputArray, function(x){return x%2 == 0})
      expect(result).to.be.true
    })
    it('returns a boolean based on callback function when all the elements in the array are greater than 10',() => {
      let inputArray = [12,14,6]
      let higherOrderFunction =   new higherOrderFunctions()
      var result = higherOrderFunction.implementingAll(inputArray, function(x){return x > 10})
      expect(result).to.be.false
    })
    it('returns a boolean based on callback function when all the elements in the array have length > 3',() => {
      let inputArray = ['aaaa','bbbbbb','ccccccc']
      let higherOrderFunction =   new higherOrderFunctions()
      var result = higherOrderFunction.implementingAll(inputArray, function(x){return x.length > 3})
      expect(result).to.be.true
    })
  })
  describe('Implements the any function',() => {
    it('returns a boolean based on callback function',() => {
      let inputArray = [3,5,6]
      let higherOrderFunction =   new higherOrderFunctions()
      //init class here
      var result = higherOrderFunction.implementingAny(inputArray, function(x){return x%2 == 0})
      expect(result).to.be.true
    })
    it('returns a boolean based on callback function when all the elements in the array are greater than 10',() => {
      let inputArray = [12,14,6]
      let higherOrderFunction =   new higherOrderFunctions()
      var result = higherOrderFunction.implementingAny(inputArray, function(x){return x > 10})
      expect(result).to.be.true
    })
    it('returns a boolean based on callback function when all the elements in the array have length < 3',() => {
      let inputArray = ['aaaa','bbbbbb','ccccccc']
      let higherOrderFunction =   new higherOrderFunctions()
      var result = higherOrderFunction.implementingAny(inputArray, function(x){return x.length < 3})
      expect(result).to.be.false
    })
    it('returns a boolean based on callback function when all the elements in the array have length > 3',() => {
      let inputArray = ['aaaa','bb','ccccccc']
      let higherOrderFunction =   new higherOrderFunctions()
      var result = higherOrderFunction.implementingAny(inputArray, function(x){return x.length > 3})
      expect(result).to.be.true
    })
  })
  describe('Implements the forEach function',() => {
    it('returns a new array based on callback function',() => {
      let inputArray = [0,1,2,3]
      let sample = 0
      let higherOrderFunction =   new higherOrderFunctions()
      //init class here
      higherOrderFunction.implementingforEach(inputArray, function(x){sample++})
      expect(sample).to.equal(4)
    })
    it('returns a new array based on callback function',() => {
      let inputArray = ['h','i']
      let message = ''
      let higherOrderFunction =   new higherOrderFunctions()
      //init class here
      higherOrderFunction.implementingforEach(inputArray, function(x){message+=x})
      expect(message).to.equal('hi')
    })
    it('returns a new array based on callback function',() => {
      let inputArray = [0,1,2,3]
      let message = 0
      let higherOrderFunction =   new higherOrderFunctions()
      //init class here
      higherOrderFunction.implementingforEach(inputArray, function(x){message = message + x})
      expect(message).to.equal(6)
    })
  })
  describe('Implements high order function to replace any duplicate names in an array',() => {
    it('returns a new array replacing duplicates with Jay',() => {
      let inputArray = ['Sujan', 'Trina', 'Sujan','Jay','Trina']
      let higherOrderFunction =   new higherOrderFunctions()
      let result = higherOrderFunction.implementingUniqueArray(inputArray)
      expect(result).to.eql(['Sujan', 'Trina', 'Jay','Jay','Jay'])
    })
  })
  describe('Implements high order function to get average of strings with length > 10 in a list',() => {
    it('returns the average length of strings that are > 10 in a list',() => {
      let inputArray = ['aa', 'asdfghjklwer', 'asdfghjklop','AllstateCorp','CompozedTraining','HighOrderFunction']
      let higherOrderFunction =   new higherOrderFunctions()
      let result = higherOrderFunction.getAveragelength(inputArray)
      expect(result).to.be.equal(13.6)
    })
  })
})
