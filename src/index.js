import React, {Component} from 'react';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';

export default class extends Component {

	componentDidMount() {
		var listener = { 
			tempOpen: XMLHttpRequest.prototype.open,
			tempSend: XMLHttpRequest.prototype.send,
			callback(){ }
		};

		XMLHttpRequest.prototype.open = function(a='',b='') {
			NProgress.start();
			listener.tempOpen.apply(this, arguments);
			listener.method = a;  
			listener.url = b;
			if (a.toLowerCase() == 'get') {
				listener.data = b.split('?');
				listener.data = listener.data[1];
			}
		}

		XMLHttpRequest.prototype.send = function(a='',b='') {
			setTimeout(() => { NProgress.done() }, 500);
			listener.tempSend.apply(this, arguments);
			if(listener.method.toLowerCase() == 'post') { listener.data = a };
			listener.callback();
		}
	}

	render() {
		return false;
	}
}
