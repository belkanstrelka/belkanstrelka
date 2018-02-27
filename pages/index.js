import Link from 'next/link'

export default () => (
  <div>Hello test 2 <Link href='/about' as={process.env.BACKEND_URL + '/about'}><a>About</a></Link></div>
)
