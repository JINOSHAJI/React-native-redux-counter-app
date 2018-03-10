import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import {connect} from 'react-redux';
import * as actionTypes from './src/store/actions/actionType';
import * as counterActions from './src/store/actions/index';

/* Counter Redux */
class Counter extends React.Component {
    state={count: 0};

    handlePressCounter= ()=>{
        this.setState({count : this.state.count+1});
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Counter : React-native redux</Text>
        <Text style={styles.welcome}>Count : {this.props.cntr}</Text>
         <View style={styles.Buttoncontainer}>
             <Button title="Increment" style={styles.button} color="#841584"  onPress={this.props.onIncrementCounter} />
          </View>
          <View style={styles.Buttoncontainer}>
            <Button title="Decrement" style={styles.button} color="#841584"  onPress={this.props.onDecrementCounter}/>
       </View>

       <View style={styles.Buttoncontainer}>
       <Button title="Add Five" style={styles.button} color="#841584"  onPress={this.props.onDecrementCounter}/>
  </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    Buttoncontainer: {
      // flex: 1,
       paddingTop: 50,
        flexDirection: 'column',
        justifyContent: 'space-between'
      },
    button: {
        backgroundColor: 'green',
        width: '40%',
        height: 40,
        margin:50
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
    }
});

const mapStateToProps =  (state) =>{
    return{
        cntr:state.count.count
    };
}

const mapDispatchToProps = (dispatch) =>{
 return {
     onIncrementCounter: () =>dispatch({type:actionTypes.INCREMENT_COUNT}),
     onDecrementCounter: () => dispatch(counterActions.decrementCount()) ,
     onDecrementCounter: () => dispatch(counterActions.addNumber(5)) 
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
