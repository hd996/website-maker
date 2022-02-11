export default (req, __, next: () => void) => {
  console.log('req', req.url)
  next()
}
