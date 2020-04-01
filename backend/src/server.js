//const request = require('supertest')
const app = require('../src/app')
//const connection = require('../src/database/connection')

app.listen(3333)
/*
describe('ONG', () => {

  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(() => {
    await connection.destroy()
  })

  it('should be able to craete a new ONG', async () => {
    const response = await request(app)
    .post('/ongs')
    .send({
      name: "APAD2",
      email: "contato",
      whatsapp: "11912345678",
      city: "Diadema",
      uf: "SP"
    })

    console.log(response.body)

  //  expect(response.body).toHavePropeerty('id')
  //  expect(response.body.id).toHavePropeerty(8)
    
  })
})
*/