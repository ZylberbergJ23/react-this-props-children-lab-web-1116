const React = require('react')

class ThemedDecoration extends React.Component {
	render() {
		const addedClassName = React.Children.map(this.props.children, child => {
			return React.cloneElement(child, {className: this.props.theme})
		})
    	return (
	      <div>
	        {addedClassName}
	      </div>
    	)
	}
}

module.exports = ThemedDecoration