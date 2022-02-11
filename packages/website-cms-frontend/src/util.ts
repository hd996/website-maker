export const getCmsURI = (): string => {
  let url = ''

  switch (location.host) {
    case 'localhost:4000':
      url = 'http://localhost:3000/cms'
      break
  }

  return url
}
