const index = (req, res) =>
{
  res.render('index',{
    title: "D2 Store",
    row: null
  })
}

const admin = (req, res) =>
{
  res.render('admin/admin',{})
}

const about = (req, res) =>
{
  res.render('about',{})
}

const login = (req, res) =>
{
  res.render('login',{})
}

const signin = (req, res) =>
{
  res.render('signin',{})
}

const terms = (req, res) =>
{
  res.render('terms',{})
}

const politics = (req, res) =>
{
  res.render('politics',{})
}

const clients = (req, res) =>
{
  res.render('admin/clients',{})
}

const employees = (req, res) =>
{
  res.render('admin/employees',{})
}

const products = (req, res) =>
{
  res.render('admin/products',{})
}

const users = (req, res) =>
{
  res.render('admin/users',{})
}

const providers = (req, res) =>
{
  res.render('admin/providers',{})
}

const error = (req, res) =>
{
  res.render('error', {})
}

module.exports = {
  index: index,
  admin: admin,
  about: about,
  login: login,
  signin: signin,
  terms: terms,
  politics: politics,
  clients: clients,
  employees: employees,
  products: products,
  providers: providers,
  users: users,
  error: error
}
