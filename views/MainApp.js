import React, {Component} from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


class Button extends Component{

	render(){
		return(
			<TouchableHighlight onPress={() => {this.props.onPress()}}>
			 <View>
			 	<Text>Tap Me</Text>
			 </View>
			</TouchableHighlight>
		);
	}
}

class Reset extends Component{
	render(){
		return(
			<TouchableHighlight onPress={()=>{this.props.onPress()}}>
				<View>
					<Text>
					  Reset
					</Text>
				</View>
			</TouchableHighlight>
		);
	}
}

export default class MainApp extends Component{
	constructor(props){
		super(props);
		this.state = {taps: 0};
	}
	onTaps = () =>{
		this.setState({taps:this.state.taps+1});
	}
	onReset = () =>{
		this.setState({taps: 0});
	}
	onDecrease = () =>{
		this.setState({taps: this.state.taps-1});
	}
	render(){
		return(
		  <View>
		  	<TouchableHighlight onPress={()=>{this.onDecrease()}}>
		  		<Text>{this.state.taps} Taps</Text>
		  	</TouchableHighlight>
		  	<Button onPress={()=>{this.onTaps()}}/>
		  	<Reset onPress={()=>{this.onReset()}}/>
		  </View>
		);
	}
}