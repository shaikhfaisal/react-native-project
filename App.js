/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  Image,
  ScrollView,
  FlatList,
  SectionList,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export class App extends Component<Props> {
  render() {

    let pic = {
      uri: "https://vignette.wikia.nocookie.net/mrmen/images/5/52/Small.gif/revision/latest?cb=20100731114437"
    }
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>
          Welcome to React Native!!!!
        </Text>

        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>

        <Text style={styles.instructions}>
          {instructions}
        </Text>


        <Image source={pic} style={{width: 100, height: 100}} />


        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
//            BlinkText.
          }}
          title="Press Me"
        />

        <LotsOfGreetings style={styles.instructions}></LotsOfGreetings>
        <LotsOfGreetings style={styles.otherInstructions}></LotsOfGreetings>


        <BlinkText textToBlink='testing the blinking text'></BlinkText>

      </View>
    );
  }
}

export class App2 extends Component<Props> {

    render() {

        return (
            <View>
                <Translator />
                <MyButton title='My Button'/>
            </View>


        )

    }

}

export class ScrollingApp extends Component<Props> {

    constructor(props) {
        super(props)

    }

    render() {

        let pic = {
          uri: "https://vignette.wikia.nocookie.net/mrmen/images/5/52/Small.gif/revision/latest?cb=20100731114437"
        }

        return (
            <ScrollView>
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <Image source={pic} style={{width: 100, height: 100}} />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <Image source={pic} style={{width: 100, height: 100}} />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />
                <LotsOfGreetings />

                <MyButton title='Finally!'/>



            </ScrollView>
        )

    }


}

export class FlatListApp extends Component<Props> {

    render() {

        return (
            <View>
                <FlatList
                    data={[
                        {key: 'abc'},
                        {key: 'efg'},
                        {key: 'Julie'},
                        {key: 'hjij'},
                        {key: 'adf'},
                        {key: '2134f'},
                        {key: 'adsfa'},
                        {key: 'abc'},
                        {key: 'abc'},
                        {key: 'abc'},
                        {key: 'abc'},
                        {key: 'abc'},
                        {key: 'abc'},
                        {key: 'adf'},
                        {key: '2134f'},
                        {key: 'adsfa'},
                        {key: 'abc'},
                        {key: 'adf'},
                        {key: '2134f'},
                        {key: 'adsfa'},
                        {key: 'abc'},
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'hjij'},
                        {key: 'adf'},
                        {key: '2134f'},
                        {key: 'adsfa'},
                        {key: 'abc'},
                        {key: 'abc'},
                        {key: 'abc'},
                        {key: 'abc'},
                        {key: 'abc'},
                        {key: 'abc'},
                        {key: 'adf'},
                        {key: '2134f'},
                        {key: 'adsfa'},
                        {key: 'abc'},
                        {key: 'adf'},
                        {key: '2134f'},
                        {key: 'adsfa'},
                        {key: 'abc'},
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                    ]}


                    renderItem={({item}) => <Text>{item.key}</Text>}

                />

            </View>


        )

    }


}

export default class SectionListApp extends Component<Props> {

    constructor(props) {
        super(props)
    }

    render() {

        return (


            <View>
                <SectionList
                    sections= {[
                        {title:'F', data:['Faisal', 'Fahd', 'Fatima']},
                        {title:'A', data:['Aliya']},
                        {title:'I', data:['Ibrahim']},
                        {title:'H', data:['Hayaa']},
                        {title:'F', data:['Faisal', 'Fahd', 'Fatima']},
                        {title:'A', data:['Aliya']},
                        {title:'I', data:['Ibrahim']},
                        {title:'H', data:['Hayaa']},
                        {title:'F', data:['Faisal', 'Fahd', 'Fatima']},
                        {title:'A', data:['Aliya']},
                        {title:'I', data:['Ibrahim']},
                        {title:'H', data:['Hayaa']},
                        {title:'F', data:['Faisal', 'Fahd', 'Fatima']},
                        {title:'A', data:['Aliya']},
                        {title:'I', data:['Ibrahim']},
                        {title:'H', data:['Hayaa']},
                        {title:'F', data:['Faisal', 'Fahd', 'Fatima']},
                        {title:'A', data:['Aliya']},
                        {title:'I', data:['Ibrahim']},
                        {title:'H', data:['Hayaa']},
                        {title:'F', data:['Faisal', 'Fahd', 'Fatima']},
                        {title:'A', data:['Aliya']},
                        {title:'I', data:['Ibrahim']},
                        {title:'H', data:['Hayaa']},
                        {title:'F', data:['Faisal', 'Fahd', 'Fatima']},
                        {title:'A', data:['Aliya']},
                        {title:'I', data:['Ibrahim']},
                        {title:'H', data:['Hayaa']},


                    ]}
                    renderItem = {({item}) => <Text>{item}</Text>}
                    renderSectionHeader = {({section}) => <Text style={styles.welcome}> {section.title} </Text>}
                    keyExtractor = {(item, index) => index}

                />
            </View>


        )


    }

}

class MyButton extends Component {

    _onPressButton() {
        Alert.alert('you pressed it...')
    }

    render() {

        return(
            <Button
                onPress={this._onPressButton}
                title={this.props.title}
            >
            </Button>
        )

    }

}

class Translator extends Component {

    constructor(props) {
        super(props);
        this.state = {translatedText: ''};
    }

    reverseString (string) {

        reversedString = '';
        for (i=string.length; i==0; i--) {
            reversedString = reversedString + string[i];
        }
        return reversedString;
    }

    render() {

        return (
            <View>

                <TextInput
                    onChangeText={translatedText => this.setState({translatedText})}
                    placeholder='Edit me to see the translations.'
                />

                <Text> {this.state.translatedText.split('').reverse().join('')} </Text>
                <Text> {this.state.translatedText} </Text>

            </View>
        )
    }

}

class BlinkText extends Component {

    constructor (props) {
        super(props)
        this.displayText = true;

    }

    render() {

        textToBlink = this.props.textToBlink

        if (this.displayText == false)
            textToBlink = ''


        return (
            <Text> {textToBlink} </Text>
        )
    }
}

class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name="Faisal" />
        <Greeting name="Fahd"   />
        <Greeting name="Fatima" />
      </View>
    )
  }
}

class Greeting extends Component {
  render() {
    return (
      <Text>This is {this.props.name}</Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
