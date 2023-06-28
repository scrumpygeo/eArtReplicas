import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@test.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Fred Blogs',
    email: 'fred@test.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Wilma Flintstone',
    email: 'wilma@test.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
]

export default users