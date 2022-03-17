class HelloController {
  async index(req, res) {
    return res.json({ hello: 'de boa?' })
  }
}

export default new HelloController()
