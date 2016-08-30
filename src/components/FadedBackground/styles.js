import Colors from '../../constants/styles/colors'

let styles = {
  backgroundStyles: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.blue.primary,
    backgroundSize: 'cover',
    backgroundPosition: '0 0',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    opacity: 0.3,
  },
  container: {
    position: 'relative',
    height: '100%',
    display: 'flex',
  },
  children: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    padding: 20,
    '@media (max-device-width: 992px)': {
      padding: 0,
    },
  }
}

export default styles