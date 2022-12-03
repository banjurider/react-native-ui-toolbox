import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMobileScreen} from '@fortawesome/free-solid-svg-icons';

const style = StyleSheet.create({
  label: {padding: 5, paddingVertical: 10},
  labelError: {color: '#ff5050'},
  textBoxError: {borderColor: '#ff5050', borderWidth: 1},
  textBox: {},
  textBoxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eee',
  },
  icon: {color: '#eee'},
});

/**
 * @param {boolean} status Validation error status (true|false)
 * @param {TextBoxType} type 'text' | 'mobile' | 'password' | 'number' | 'alpha'
 * @param {function} onChangeText Callback for text change
 */
const TextBox = ({status, type, onChangeText, children}) => {
  const [error, setError] = useState(false);

  React.useEffect(() => {
    setError(status);
  }, [status]);

  const hTextChange = data => {
    if (onChangeText === undefined) {
      return;
    }
    onChangeText(data);
  };

  return (
    <View>
      <Text style={[style.label, error ? style.labelError : null]}>
        {children}
      </Text>
      <View style={[style.textBoxWrapper, error ? style.textBoxError : null]}>
        <FontAwesomeIcon
          style={[style.icon, error ? style.labelError : null]}
          icon={faMobileScreen}
        />
        <TextInput
          style={[style.textBox]}
          placeholder="enter some text"
          onChangeText={hTextChange}
        />
      </View>
    </View>
  );
};

export {TextBox};
