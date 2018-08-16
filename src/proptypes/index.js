import PropTypes from 'prop-types'

export const characterType = PropTypes.shape({
  comics: PropTypes.object.isRequired,
  description: PropTypes.string,
  events: PropTypes.object,
  id: PropTypes.number.isRequired,
  modified: PropTypes.string,
  name: PropTypes.string.isRequired,
  resourceURI: PropTypes.string,
  series: PropTypes.object,
  stories: PropTypes.object,
  thumbnail: PropTypes.object.isRequired,
  urls:PropTypes.arrayOf(PropTypes.object)
})
