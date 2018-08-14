import PropTypes from 'prop-types'

export const characterType = PropTypes.shape({
  comics: PropTypes.array.isRequired,
  description: PropTypes.string,
  events: PropTypes.array,
  id: PropTypes.string.isRequired,
  modified: PropTypes.string,
  name: PropTypes.string.isRequired,
  resourceURI: PropTypes.string,
  series: PropTypes.array,
  stories: PropTypes.array,
  thumbnail: PropTypes.arrayOf(PropTypes.string).isRequired,
  urls:PropTypes.arrayOf(PropTypes.string)
})
