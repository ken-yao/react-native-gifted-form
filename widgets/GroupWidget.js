var React = require('react-native');
var {
  View,
  Text
} = React;

var WidgetMixin = require('../mixins/WidgetMixin');

module.exports = React.createClass({
  mixins: [WidgetMixin],
  
  getDefaultProps() {
    return {
      type: 'GroupWidget',
      // @todo proptypes
    };
  },
  
  render() {
     var childrenWithProps = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        formStyles: this.props.formStyles,
        openModal: this.props.openModal,
        formName: this.props.formName,
        navigator: this.props.navigator,
        onFocus: this.props.onFocus,
        onBlur: this.props.onBlur,
        onValidation: this.props.onValidation,
      });
    });
    if (this.props.title) {
      return (
          <View>
            <Text
                style={this.getStyle('headerTitle')}
                {...this.props}
            >
              {this.props.title.toUpperCase()}
            </Text>
            {childrenWithProps}

          </View>
      );
    } else {
      return <View {...this.props}>{childrenWithProps}</View>
    }
  },
  
  defaultStyles: {
    headerTitle: {
      fontSize: 12,
      color: '#9b9b9b',
      paddingLeft: 10,
      paddingRight: 10,
      marginBottom: 5,
      marginTop: 10,
    },
  },
});
