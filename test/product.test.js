process.env.NODE_ENV = 'test'

const mongoose = require('mongoose')
const Product = require('../models/Product')
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')
const should = chai.should()
chai.use(chaiHttp)

describe('Products', () => {
  beforeEach((done) => {
    Product.remove({}, err => {
      done()
    })
  })

  describe('/GET products', () => {
    it('it should GET all products', done => {
      chai.request(server)
        .get('/api/products')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.data.should.be.a('array')
          res.body.data.length.should.be.eql(0)
          done()
        })
    })
  })

  describe('/POST product', () => {
    it('it should not POST products without all fields', done => {
      const product = { name: 'shoe' }
      chai.request(server)
        .post('/api/products')
        .send(product)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.message.should.have.property('errors')
          res.body.should.have.property('data')
          res.body.should.have.property('data').eql(null)
          done()
      })
  })

    it('it should POST a product with all fields', done => {
      const product = new Product({
        name: 'shoe lace',
        price: 19.93,
        image: 'na'
      })
      chai.request(server)
        .post('/api/products')
        .send(product)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.message.length.should.be.above(0)
          res.body.should.have.property('data')
          res.body.data.should.be.a('object')
          done()
        })
      })
    })

    describe('/GET/:product_id', () => {
      it('it should GET one product with all the fields', done => {
        const product = new Product({
          name: 'an item',
          price: 500.15,
          image: 'na'
        })
        product.save((err, product) => {
          chai.request(server)
          .get(`/api/products/${product._id}`)
          .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.message.length.should.be.above(0)
            res.body.should.have.property('data')
            res.body.data.should.be.a('object')
            done()
          })
        })

      })
    })

    describe('/DELETE/:product_id product', () => {
      it('it should DELETE a product', done => {
        const product = new Product({
          name: 'Pivot Switchblade',
          price: 8999.99,
          image: 'pic of sick whip'
        })
        product.save((err, product) => {
          chai.request(server)
          .delete(`/api/products/${product._id}`)
          .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.message.length.should.be.above(0)
            res.body.should.have.property('data')
            res.body.data.should.eql({})
            done()
          })
        })
      })
    })

})
